package tn.esprit.Repositories;

import tn.esprit.Entities.Partenaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartenaireRepo extends JpaRepository<Partenaire,Integer> {
}
