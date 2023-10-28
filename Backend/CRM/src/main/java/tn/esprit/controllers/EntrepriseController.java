package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.Generic.GenericController;
import tn.esprit.entities.Entreprise;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/gestionCRM/entreprise")
public class EntrepriseController extends GenericController<Entreprise,Integer> {

}
