package tn.esprit.userservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.userservice.entities.EType;
import tn.esprit.userservice.entities.Event;
import tn.esprit.userservice.entities.User;


import java.util.List;


public interface EventRepository extends JpaRepository<Event,Long> {
    List<Event> findByParticipantsContainingAndTypeEvent(User user, EType typeEvent);

}
