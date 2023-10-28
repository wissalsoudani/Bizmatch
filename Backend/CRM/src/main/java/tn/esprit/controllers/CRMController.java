package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.Generic.GenericController;
import tn.esprit.entities.CRM;
import tn.esprit.entities.Entreprise;
import tn.esprit.services.ICRMservice;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/gestionCRM/crm")
public class CRMController extends GenericController<CRM,Long> {

    @Autowired
    private ICRMservice crmService;



}
