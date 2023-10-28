package tn.esprit.eventservice.services;

import tn.esprit.eventservice.entities.Event;

import java.util.List;

public interface IEventService {
    Event addEvent(Event event, String organizerId);
    Event updateEvent(Event event);
    void deleteEvent(Long eventId);
    List<Event> getAllEvents();
    List<Event> getAllArchive();
    Event getEventById(Long eventId);

}
