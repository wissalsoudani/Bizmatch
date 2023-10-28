package tn.esprit.reunionservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.reunionservice.entities.Reunion;

public interface ReunionRepository extends JpaRepository<Reunion,Long> {
}
