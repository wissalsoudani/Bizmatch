package tn.esprit.eventservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.eventservice.entities.Event;

import java.util.List;

public interface EventRepository extends JpaRepository<Event,Long> {
    public List<Event> findEventByStatus(boolean status);
}
