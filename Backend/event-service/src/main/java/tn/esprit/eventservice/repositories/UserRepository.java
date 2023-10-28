package tn.esprit.eventservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.eventservice.entities.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findUserByEmail(String email);

    List<User>findUsersByEmailOrFirstNameOrLastNameOrTel(String a,String b,String c,String d);
}