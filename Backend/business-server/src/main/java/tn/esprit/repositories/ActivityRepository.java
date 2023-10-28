package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Activity;
import tn.esprit.entities.Objectif;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
