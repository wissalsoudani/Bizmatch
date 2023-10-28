package tn.esprit.controllers;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.Generic.GenericController;
import tn.esprit.entities.Entreprise;
import tn.esprit.entities.ExpansionAvecEvaluationRequest;
import tn.esprit.entities.Marche;
import tn.esprit.repositories.EntrepriseRepository;
import tn.esprit.repositories.MarcheRepository;
import tn.esprit.services.IEntrepriseService;
import tn.esprit.services.IEvaluationCritereService;
import tn.esprit.services.IMarcheService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/gestionMarche/entreprise")
public class EntrepriseController extends GenericController<Entreprise,Integer> {

    @Autowired
    private IEntrepriseService IEntrepriseService;
    @Autowired
    private EntrepriseRepository entrepriseRepository;
    @Autowired
    private MarcheRepository marcheRepository;
    @Autowired
    private IEntrepriseService iEntrepriseService;

    @PostMapping("/affectation/{id_entreprise}/{id_marche}")
    public ResponseEntity<String> affectation(@PathVariable int id_entreprise, @PathVariable Long id_marche) {
        Optional<Entreprise> entrepriseOpt = entrepriseRepository.findById(id_entreprise);
        Optional<Marche> marcheOpt = marcheRepository.findById(id_marche);

        if (entrepriseOpt.isPresent() && marcheOpt.isPresent()) {
            IEntrepriseService.ajouterMarcheAEntreprise(id_entreprise,id_marche);
            return ResponseEntity.ok("Affectation réussie !");
        } else {
            return ResponseEntity.badRequest().body("Entreprise ou marché introuvable !");
        }
    }
    @PostMapping("/{id_entreprise}/etendre-marches")
    public ResponseEntity<String> etendreMarches(@PathVariable int id_entreprise, @RequestBody List<Marche> nouveauxMarches) {
        iEntrepriseService.etendreMarches(id_entreprise, nouveauxMarches);
        return ResponseEntity.ok("Expansion des marchés réussie");
    }


    @PostMapping("/{id_entreprise}/etendre-marches-avec-evaluation")
    public ResponseEntity<String> etendreMarchesAvecEvaluation(@PathVariable int id_entreprise, @RequestBody ExpansionAvecEvaluationRequest request) {
        Map<Long, Integer> evaluations = request.getEvaluations();
        List<Marche> nouveauxMarches = request.getNouveauxMarches();
        iEntrepriseService.etendreMarchesAvecEvaluation(id_entreprise, nouveauxMarches, evaluations);
        return ResponseEntity.ok("Expansion des marchés avec évaluation réussie");
    }

}
