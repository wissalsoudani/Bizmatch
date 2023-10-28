package tn.esprit.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.Entities.ServiceCommercial;

@Repository
public interface ServiceRepo extends JpaRepository<ServiceCommercial,Integer> {


}
