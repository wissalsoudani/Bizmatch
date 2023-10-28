package tn.esprit.services;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.entities.Activity;
import tn.esprit.entities.Entreprise;
import tn.esprit.entities.Objectif;
import tn.esprit.entities.User;
import tn.esprit.repositories.ActivityRepository;
import tn.esprit.repositories.EntrepriseRepository;
import tn.esprit.repositories.ObjectifRepository;
import tn.esprit.repositories.UserRepository;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class IActivityserviceImp implements IActivityservice {

    @Autowired
    private ActivityRepository boRepository;
    @Autowired
    private ObjectifRepository objectifRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Activity addActivity(Activity bo, Long idObj, Long idUser) {
        Objectif objectif = objectifRepository.findById(idObj)
                .orElseThrow(() -> new EntityNotFoundException("Objectif not found with id: " + idObj));
        bo.setObjectif(objectif);

        User user = userRepository.findById(idObj)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + idUser));
        bo.setUser(user);

        Date date_debut = new Date();
        Date date_fin = new Date();
        bo.setDate_debut_activity(date_debut);
        bo.setDate_fin_activity(date_fin);
        return boRepository.save(bo);
    }

    @Override
    public List<Activity> ListActivities(){
        return boRepository.findAll();
    }

    @Override
    public void deleteActivity(Long idBO) {
        Activity r = boRepository.findById(idBO).orElse(null);

        boRepository.delete(r);
    }

    @Override
    public void updateActivity(Activity activity, Long idActivity) {

        Activity existingActivity = boRepository.findById(idActivity)
                .orElseThrow(() -> new EntityNotFoundException("Activity not found with id: " + idActivity));

        existingActivity.setDate_fin_activity(activity.getDate_fin_activity());
        existingActivity.setDate_debut_activity(activity.getDate_debut_activity());
        existingActivity.setDescr_activity(activity.getDescr_activity());
        existingActivity.setName_activity(activity.getName_activity());
        existingActivity.setStatus_activity(activity.getStatus_activity());
        existingActivity.setType_activity(activity.getType_activity());
        existingActivity.setPriority_activity(activity.getPriority_activity());

        boRepository.save(existingActivity);
    }

    @Override
    public Activity getActivityById(Long idBO) {

        return boRepository.getById(idBO);
    }


}
