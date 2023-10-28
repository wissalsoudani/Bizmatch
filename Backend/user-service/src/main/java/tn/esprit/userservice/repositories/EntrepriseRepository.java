package tn.esprit.userservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.userservice.entities.Entreprise;

public interface EntrepriseRepository extends JpaRepository<Entreprise,Integer> {
}
