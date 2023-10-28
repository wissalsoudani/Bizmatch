package tn.esprit.reunionservice.services;

import tn.esprit.reunionservice.entities.Reunion;

import java.util.List;

public interface IReunionService {
    Reunion addReunion(Reunion reunion,int idEntreprise1,int idEntreprise2);
    Reunion updateReunion(Reunion reunion);
    List<Reunion> getAllReunions();
    void deleteReunion(Long reunionId);
    Reunion findReunionById(Long reunionId);
}