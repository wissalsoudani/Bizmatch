package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.entities.BesoinOffre;
import tn.esprit.entities.Entreprise;
import tn.esprit.repositories.BesoinOffreRepository;
import tn.esprit.repositories.EntrepriseRepository;
import tn.esprit.services.IEntrepriseService;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/besoins/entreprise")
public class EntrepriseController {

    @Autowired
    private tn.esprit.services.IEntrepriseService IEntrepriseService;
    @Autowired
    private EntrepriseRepository entrepriseRepository;
    @Autowired
    private BesoinOffreRepository boRepository;



}
