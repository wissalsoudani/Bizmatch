package tn.esprit.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.dto.UserDTO;
import tn.esprit.entities.User;
import tn.esprit.repositories.UserRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class IUserServiceImpl implements IUserService{

    private final UserRepository userRepository;

    @Override
    public void addUser(UserDTO userDTO) {

            // Map UserDTO to User entity
            User user = new User();
            user.setFirstName(userDTO.getFirstName());
            user.setLastName(userDTO.getLastName());
            user.setEmail(userDTO.getEmail());
            user.setRole(userDTO.getRole());
            user.setImage(userDTO.getImage());
            user.setTel(userDTO.getTel());
            user.setPassword(userDTO.getPassword());
            user.setActive(userDTO.isActive());
user.setEntreprise(userDTO.getEntreprise());
user.setJob(userDTO.getJob());
user.setCode(userDTO.getCode());
            user.setBestFriend(userDTO.getBestFriend());
            user.setFavoritePet(userDTO.getFavoritePet());
        userRepository.save(user);

    }



    @Override
    public User findUser(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public void resetPassword(String email, UserDTO userDTO) {
User u=userRepository.findUserByEmail(email);
u.setPassword(userDTO.getPassword());
userRepository.save(u);
    }




    @Override
    public User activateUser(String email, String code) {
        User user=userRepository.findUserByEmail(email);
        if(user!=null && user.getCode().equals(code)){
            user.setActive(true);
            return userRepository.save(user);
        }return user;
    }
    @Override
    public User findUserById(Long id) {

        return userRepository.findById(id).orElse(null);
    }

    public void updateUser(UserDTO userDTO) {
        // Extract user ID from the received UserDTO
        Long userId = userDTO.getIdUser();

        // Retrieve the existing user from the database
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            // Update the existing user entity with the fields from the received UserDTO
            User existingUser = optionalUser.get();
            updateUserFromDTO(existingUser, userDTO);

            // Save the updated user back to the database
            userRepository.save(existingUser);
        } else {
            // Handle the case where the user with the given ID is not found
            // You might want to throw an exception or log a warning
            // depending on your application's error handling strategy
            System.out.println("User not found with ID: " + userId);
        }
    }
    private void updateUserFromDTO(User user, UserDTO userDTO) {
    }
}
