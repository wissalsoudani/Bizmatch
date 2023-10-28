package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.Generic.GenericController;
import tn.esprit.entities.ExpansionAvecEvaluationRequest;
import tn.esprit.entities.Marche;
import tn.esprit.services.IMarcheService;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/gestionMarche/marche")
public class MarcheController extends GenericController<Marche,Long> {



}



