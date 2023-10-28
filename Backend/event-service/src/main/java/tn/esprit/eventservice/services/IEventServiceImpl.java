package tn.esprit.eventservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tn.esprit.eventservice.entities.Event;
import tn.esprit.eventservice.entities.User;
import tn.esprit.eventservice.repositories.EventRepository;
import tn.esprit.eventservice.repositories.UserRepository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;


@Service
public class IEventServiceImpl implements IEventService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;



    @Override
    public Event addEvent(Event event, String organizerId) {
        // Fetch the organizer from the database
        User organizer = userRepository.findUserByEmail(organizerId);

        // Set the organizer for the event
        event.setEventOrganizer(organizer);
event.setRemainingPlaces(event.getEventCapacity());
event.setStatus(true);
        // You might want to perform additional checks or logic before saving the event
        return eventRepository.save(event);
    }

    @Override
    public Event updateEvent(Event event) {
        if (eventRepository.existsById(event.getEventId())) {
            return eventRepository.save(event);
        } else {
            throw new NoSuchElementException("Event not found with ID: " + event.getEventId());
        }
    }

    @Override
    public void deleteEvent(Long eventId) {
        if (eventRepository.existsById(eventId)) {
            eventRepository.deleteById(eventId);
        } else {
            throw new NoSuchElementException("Event not found with ID: " + eventId);
        }
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findEventByStatus(true);
    }

    @Override
    public List<Event> getAllArchive() {
        return eventRepository.findEventByStatus(false);
    }

    @Override
    public Event getEventById(Long eventId) {
        return eventRepository.findById(eventId).orElse(null);
    }
    @Scheduled(cron = "0 0 0 * * *") // Runs every day at midnight
    public void updateEventStatus() {
        List<Event> events = eventRepository.findAll();

        Date today = new Date();

        for (Event event : events) {
            // Compare the eventDate with today's date
            if (event.getEventDate().before(today)) {
                // Update the status to false if the eventDate has passed
                event.setStatus(false);
                // Save the updated event
              eventRepository.save(event);
            }
        }
    }}