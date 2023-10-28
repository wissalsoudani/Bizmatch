package tn.esprit.userservice.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.userservice.dto.EventCalendar;
import tn.esprit.userservice.dto.UserDTO;
import tn.esprit.userservice.entities.Entreprise;
import tn.esprit.userservice.entities.Event;
import tn.esprit.userservice.entities.*;
import tn.esprit.userservice.repositories.EntrepriseRepository;
import tn.esprit.userservice.repositories.EventRepository;
import tn.esprit.userservice.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;


@Service
@AllArgsConstructor
public class IUserServiceImpl implements IUserService{
    private final UserRepository userRepository;

    private final EntrepriseRepository entrepriseRepository;
    private final EventRepository eventRepository;
    @Override
    public void deleteUser(String email) {
        userRepository.delete(userRepository.findUserByEmail(email));

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
    public String banUser(String email) {
        User user=userRepository.findUserByEmail(email);
        if(user!=null){
            user.setActive(false);
            userRepository.save(user);
            return "user succesfully banned";
        }
        return "user not found";
    }

    @Override
    public String unbanUser(String email) {
        User user=userRepository.findUserByEmail(email);
        if(user!=null){
            user.setActive(true);
            userRepository.save(user);
            return "user succesfully unbanned";
        }
        return "user not found";
    }

    @Override
    public List<User> search(String data) {
        return userRepository.findUsersByEmailOrFirstNameOrLastNameOrTel(data,data,data,data);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public List<Entreprise> getEnt() {
        return entrepriseRepository.findAll();
    }

    @Override
    public User findUserById(Long id) {

        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<Reunion> getUserReunions(String id) {
        User user= userRepository.findUserByEmail(id);
        if(user!=null){
        return user.getReunions();}
        return null;
    }

    @Override
    public List<Event> getUserEvents(Long id) {

        User user= userRepository.findById(id).orElse(null);
        if(user!=null){
            return eventRepository.findByParticipantsContainingAndTypeEvent(user,EType.event);}
        return null;
    }

    @Override
    public List<Event> getUserConference(Long id) {

        User user= userRepository.findById(id).orElse(null);
            if(user!=null){
                return eventRepository.findByParticipantsContainingAndTypeEvent(user,EType.conference);}
                return null;}

    @Override
    public List<EventBooking> getUserBookings(String id) {
        User user= userRepository.findUserByEmail(id);
        if(user!=null){
            return user.getEventBookings();}
        return null;}

    @Override
    public List<EventCalendar> getUserCalendarEvents(String email) {
        User user= userRepository.findUserByEmail(email);
        List<EventCalendar> eventCalendars=new ArrayList<EventCalendar>();
        if(user!=null){
            List<Reunion>reunions= user.getReunions();
            for (Reunion r:reunions
            ) {EventCalendar eventCalendar=new EventCalendar(r.getReunionId(),r.getReunionSubject(),"Reunion",r.getStartTime(),r.getEndTime());
                eventCalendars.add(eventCalendar);

            }
            List<Event>events=eventRepository.findByParticipantsContainingAndTypeEvent(user,EType.event);
            for (Event e:events
                 ) {EventCalendar eventCalendar2=new EventCalendar(e.getEventId(),e.getEventName(),"Event",e.getEventDate(),e.getEventDate());
                eventCalendars.add(eventCalendar2);

            }



            List<Event>conferences=eventRepository.findByParticipantsContainingAndTypeEvent(user,EType.conference);
            for (Event c:conferences
                 )  {
                EventCalendar eventCalendar3=new EventCalendar(c.getEventId(),c.getEventName(),"Conference",c.getEventDate(),c.getEventDate());
                eventCalendars.add(eventCalendar3);

            }
            }
        return eventCalendars;
    }
}
