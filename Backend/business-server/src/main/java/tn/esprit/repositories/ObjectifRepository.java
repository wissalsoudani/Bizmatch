package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Objectif;

public interface ObjectifRepository extends JpaRepository<Objectif, Long> {
}
