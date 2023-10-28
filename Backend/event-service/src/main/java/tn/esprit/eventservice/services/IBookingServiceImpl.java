package tn.esprit.eventservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.eventservice.entities.Event;
import tn.esprit.eventservice.entities.EventBooking;
import tn.esprit.eventservice.entities.User;
import tn.esprit.eventservice.repositories.BookingRepository;
import tn.esprit.eventservice.repositories.EventRepository;
import tn.esprit.eventservice.repositories.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
public class IBookingServiceImpl implements IBookingService {

    @Autowired
    private BookingRepository eventBookingRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;

    @Override
    public EventBooking addEventBooking(EventBooking eventBooking, Long eventId, String userId) {
        // Fetch the event from the database
        Event event = eventRepository.findById(eventId).orElse(null);

        // Fetch the user from the database
        User user = userRepository.findUserByEmail(userId);
if(user!=null && event!=null && event.getRemainingPlaces()>0)
        // Set the event and user for the booking
{   eventBooking.setEvent(event);
        eventBooking.setUser(user);

        // Add the user to the participants list of the event
        user.getEvents().add(event);
        event.setRemainingPlaces(event.getRemainingPlaces()-1);
eventRepository.save(event);
userRepository.save(user);
    Map<String, Object> model = new HashMap<>();
    model.put("name", user.getFirstName());

String emailText="you have been added to the list of participants of the event"+event.getEventName()+" taking place "+event.getEventLocation()+"save the date!!!!"+event.getEventDate();
        // You might want to perform additional checks or logic before saving the booking
     emailService.sendEmail(user.getEmail(), "Booking Confirmation",emailText, model);

    return eventBookingRepository.save(eventBooking);}
else return null;
    }

    @Override
    public EventBooking updateEventBooking(EventBooking eventBooking) {
        if (eventBookingRepository.existsById(eventBooking.getBookingId())) {
            return eventBookingRepository.save(eventBooking);
        } else {
            throw new NoSuchElementException("EventBooking not found with ID: " + eventBooking.getBookingId());
        }
    }

    @Override
    public void deleteEventBooking(Long bookingId) {
        if (eventBookingRepository.existsById(bookingId)) {
            eventBookingRepository.deleteById(bookingId);
        } else {
            throw new NoSuchElementException("EventBooking not found with ID: " + bookingId);
        }
    }

    @Override
    public List<EventBooking> getAllEventBookings() {
        return eventBookingRepository.findAll();
    }

    @Override
    public EventBooking getEventBookingById(Long bookingId) {
        return eventBookingRepository.findById(bookingId).orElse(null);
    }
}
