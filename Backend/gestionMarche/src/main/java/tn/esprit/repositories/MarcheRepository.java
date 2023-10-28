package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Marche;

public interface MarcheRepository extends JpaRepository<Marche, Long> {
}
