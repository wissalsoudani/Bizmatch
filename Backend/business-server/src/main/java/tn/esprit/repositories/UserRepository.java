package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.entities.Activity;
import tn.esprit.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
