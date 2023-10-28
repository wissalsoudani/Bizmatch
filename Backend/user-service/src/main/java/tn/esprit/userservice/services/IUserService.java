package tn.esprit.userservice.services;



import tn.esprit.userservice.dto.*;
import tn.esprit.userservice.entities.*;

import java.util.List;

public interface IUserService {

    void deleteUser(String email);
     User findUser(String email);
    void resetPassword(String email, UserDTO userDTO);

     String banUser(String email);
    String unbanUser(String email);
     List<User> search(String data);
    List<User> getAll();
    List<Entreprise> getEnt();
    User findUserById(Long id);
    List<Reunion>getUserReunions(String id);
    List<Event>getUserEvents(Long id);
    List<Event>getUserConference(Long id);
    List<EventBooking>getUserBookings(String id);
     List<EventCalendar> getUserCalendarEvents(String email);

}
