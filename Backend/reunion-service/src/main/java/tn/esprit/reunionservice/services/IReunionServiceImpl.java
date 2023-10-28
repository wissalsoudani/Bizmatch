package tn.esprit.reunionservice.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import tn.esprit.reunionservice.entities.ERole;
import tn.esprit.reunionservice.entities.Entreprise;
import tn.esprit.reunionservice.entities.Reunion;
import tn.esprit.reunionservice.entities.User;
import tn.esprit.reunionservice.repositories.EntrepriseRepository;
import tn.esprit.reunionservice.repositories.ReunionRepository;
import tn.esprit.reunionservice.repositories.UserRepository;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.*;


@Service
@Slf4j
public class IReunionServiceImpl implements IReunionService {

    @Autowired
    private ReunionRepository reunionRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EntrepriseRepository entrepriseRepository;
    @Autowired
    private EmailService emailService;
    @Override
    public Reunion addReunion(Reunion reunion, int idEntreprise1, int idEntreprise2) {
      Entreprise entreprise1 = entrepriseRepository.findById(idEntreprise1).orElse(null);
       Entreprise entreprise2 = entrepriseRepository.findById(idEntreprise2).orElse(null);

        if (entreprise1 != null && entreprise2 != null) {
            reunion.setEntreprise1(entreprise1);
            reunion.setEntreprise2(entreprise2);

            List<User> representatives = userRepository.findByRoleAndEntrepriseIn(
                    ERole.REPRESENTATIVE,
                    List.of(entreprise1.getNom(), entreprise2.getNom())
            );
            List<User> users = new ArrayList<User>();
            users.addAll(representatives);
            reunion.setParticipants(users);



            reunion = reunionRepository.save(reunion);
            for (User user:users) {


            Map<String, Object> model = new HashMap<>();
            model.put("name", user.getFirstName());

            String emailText="Reunion Name: " + reunion.getReunionName() +
                "\nDate: " + reunion.getReunionDate() +
                        "\nMeeting Link: " + reunion.getMeetLink() +
                        "\nSubject: " + reunion.getReunionSubject() +
                        "\nStart Time: " + reunion.getStartTime() +
                        "\nEnd Time: " + reunion.getEndTime();

                // You might want to perform additional checks or logic before saving the booking
            emailService.sendEmail(user.getEmail(), "Reunion Details:" + reunion.getReunionName(),emailText, model);
            }
            return reunion;
        }
        return null;
    }


    @Override
    public Reunion updateReunion(Reunion reunion) {

        return reunionRepository.save(reunion);
    }

    @Override
    public List<Reunion> getAllReunions() {
        return reunionRepository.findAll();
    }

    @Override
    public void deleteReunion(Long reunionId) {
        reunionRepository.deleteById(reunionId);
    }

    @Override
    public Reunion findReunionById(Long reunionId) {
        return reunionRepository.findById(reunionId).orElse(null);
    }
}