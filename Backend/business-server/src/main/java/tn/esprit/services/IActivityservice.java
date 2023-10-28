package tn.esprit.services;


import tn.esprit.entities.Activity;

import java.util.List;

public interface IActivityservice {

    Activity addActivity(Activity bo, Long idObj, Long idUser);

    List<Activity> ListActivities();

    void deleteActivity(Long idBO);

    void updateActivity(Activity activity, Long idActivity);

    Activity getActivityById(Long idBO);
}
