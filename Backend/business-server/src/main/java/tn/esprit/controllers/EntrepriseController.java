package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.repositories.ObjectifRepository;
import tn.esprit.repositories.EntrepriseRepository;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/business/entreprise")
public class EntrepriseController {

    @Autowired
    private tn.esprit.services.IEntrepriseService IEntrepriseService;
    @Autowired
    private EntrepriseRepository entrepriseRepository;
    @Autowired
    private ObjectifRepository boRepository;



}
