package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.CRM;
import tn.esprit.entities.Entreprise;
import java.util.List;

public interface CRMRepository extends JpaRepository<CRM, Long> {

}