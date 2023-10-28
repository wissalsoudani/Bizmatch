package tn.esprit.reunionservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.reunionservice.entities.ERole;
import tn.esprit.reunionservice.entities.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findByRoleAndEntrepriseIn(ERole role,List<String> enterprise);
}
