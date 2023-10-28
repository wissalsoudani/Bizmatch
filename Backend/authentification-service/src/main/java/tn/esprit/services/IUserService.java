package tn.esprit.services;

import tn.esprit.dto.UserDTO;
import tn.esprit.entities.User;

public interface IUserService {
    void addUser(UserDTO userDTO);

     User findUser(String email);

    User activateUser(String email,String code);
   void resetPassword(String email, UserDTO userDTO);

    User findUserById(Long id);

}
