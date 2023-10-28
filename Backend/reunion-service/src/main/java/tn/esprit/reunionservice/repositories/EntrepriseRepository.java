package tn.esprit.reunionservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.reunionservice.entities.Entreprise;

public interface EntrepriseRepository extends JpaRepository<Entreprise,Integer> {
}
