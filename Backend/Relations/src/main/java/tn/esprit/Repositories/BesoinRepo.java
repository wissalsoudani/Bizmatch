package tn.esprit.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.Entities.BesoinCommercial;
@Repository
public interface BesoinRepo extends JpaRepository<BesoinCommercial,Integer> {
}
