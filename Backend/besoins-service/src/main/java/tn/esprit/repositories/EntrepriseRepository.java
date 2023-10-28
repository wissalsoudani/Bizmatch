package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Entreprise;

import java.util.Optional;

public interface EntrepriseRepository extends JpaRepository<Entreprise,Integer>{

}
