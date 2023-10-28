package tn.esprit.eventservice.services;

import tn.esprit.eventservice.entities.EventBooking;

import java.util.List;

public interface IBookingService {
    EventBooking addEventBooking(EventBooking eventBooking, Long eventId, String userId);
    EventBooking updateEventBooking(EventBooking eventBooking);
    void deleteEventBooking(Long bookingId);
    List<EventBooking> getAllEventBookings();
    EventBooking getEventBookingById(Long bookingId);
}
