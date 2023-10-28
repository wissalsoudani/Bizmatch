package tn.esprit.eventservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.eventservice.entities.Event;
import tn.esprit.eventservice.entities.EventBooking;
import tn.esprit.eventservice.services.EmailService;
import tn.esprit.eventservice.services.IBookingService;
import tn.esprit.eventservice.services.IEventService;

import java.util.List;

@RestController

@RequestMapping("/events")
public class EventBookingController {

    @Autowired
    private IEventService eventService;

    @Autowired
    private IBookingService eventBookingService;


    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }
    @GetMapping("/archive")
    public List<Event> getAllEventsArchive() {
        return eventService.getAllArchive();
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<Event> getEventById(@PathVariable Long eventId) {
        Event event = eventService.getEventById(eventId);
        if (event != null) {
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{organizerId}")
    public ResponseEntity<Event> addEvent(@RequestBody Event event, @PathVariable String organizerId) {
        Event addedEvent = eventService.addEvent(event, organizerId);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedEvent);
    }

    @PutMapping("/{eventId}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long eventId, @RequestBody Event event) {
        event.setEventId(eventId);
        Event updatedEvent = eventService.updateEvent(event);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long eventId) {
        eventService.deleteEvent(eventId);
        return ResponseEntity.noContent().build();
    }

    // New endpoints for EventBooking

    @PostMapping("/{eventId}/bookings/{userId}")
    public ResponseEntity<EventBooking> addEventBooking(
            @RequestBody EventBooking eventBooking,
            @PathVariable Long eventId,
            @PathVariable String userId) {
        EventBooking addedBooking = eventBookingService.addEventBooking(eventBooking, eventId, userId);


        return ResponseEntity.status(HttpStatus.CREATED).body(addedBooking);
    }

    @PutMapping("/bookings/{bookingId}")
    public ResponseEntity<EventBooking> updateEventBooking(@PathVariable Long bookingId, @RequestBody EventBooking eventBooking) {
        eventBooking.setBookingId(bookingId);
        EventBooking updatedBooking = eventBookingService.updateEventBooking(eventBooking);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/bookings/{bookingId}")
    public ResponseEntity<Void> deleteEventBooking(@PathVariable Long bookingId) {
        eventBookingService.deleteEventBooking(bookingId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/bookings")
    public List<EventBooking> getAllEventBookings() {
        return eventBookingService.getAllEventBookings();
    }

    @GetMapping("/bookings/{bookingId}")
    public ResponseEntity<EventBooking> getEventBookingById(@PathVariable Long bookingId) {
        EventBooking eventBooking = eventBookingService.getEventBookingById(bookingId);
        if (eventBooking != null) {
            return ResponseEntity.ok(eventBooking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
