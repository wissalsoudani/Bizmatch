package tn.esprit.eventservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.eventservice.entities.EventBooking;

public interface BookingRepository extends JpaRepository<EventBooking,Long> {
}
