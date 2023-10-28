package tn.esprit.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.entities.Entreprise;
import tn.esprit.Generic.IGenericServiceImpl;
import tn.esprit.entities.EvaluationCritere;
import tn.esprit.entities.EvaluationResultat;
import tn.esprit.entities.Marche;
import tn.esprit.repositories.EntrepriseRepository;
import tn.esprit.repositories.EvaluationCritereRepository;
import tn.esprit.repositories.EvaluationResultatRepository;
import tn.esprit.repositories.MarcheRepository;

import javax.ws.rs.NotFoundException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class IEntrepriseServiceImp extends IGenericServiceImpl<Entreprise,Integer> implements IEntrepriseService{
    @Autowired
    private EntrepriseRepository entrepriseRepository;
    @Autowired
    private MarcheRepository marcheRepository;
    @Autowired
    private EvaluationCritereRepository evaluationCritereRepository;
    @Autowired
    private EvaluationResultatRepository evaluationResultatRepository;


    @Transactional
    public void ajouterMarcheAEntreprise(int entrepriseId, Long marcheId) {
        Entreprise entreprise = entrepriseRepository.findById(entrepriseId).orElse(null);
        Marche marche = marcheRepository.findById(marcheId).orElse(null);

        if (entreprise != null && marche != null) {
            entreprise.addMarche(marche);
            entrepriseRepository.save(entreprise);
        }
    }

    @Transactional
    public void etendreMarchesAvecEvaluation(int id_entreprise, List<Marche> nouveauxMarches, Map<Long, Integer> evaluations) {
        Entreprise entreprise = entrepriseRepository.findById(id_entreprise).orElseThrow(() -> new NotFoundException("Entreprise non trouvée"));

        if (entreprise != null) {
            for (Marche marche : nouveauxMarches) {
                if (marche != null) {
                    entreprise.addMarche(marche);
                }
            }
            entrepriseRepository.save(entreprise);

            for (Map.Entry<Long, Integer> entry : evaluations.entrySet()) {
                EvaluationCritere critere = evaluationCritereRepository.findById(entry.getKey())
                        .orElseThrow(() -> new NotFoundException("Critère d'évaluation non trouvé"));

                EvaluationResultat resultat = new EvaluationResultat();
                resultat.setCritere(critere);
                resultat.setScore(entry.getValue());

                Marche marche = nouveauxMarches.get(0);
                if (marche.getId_marche() == 0) {
                    marche = marcheRepository.save(marche);
                }
                resultat.setMarche(marche);

                evaluationResultatRepository.save(resultat);
            }
        } else {
            throw new NotFoundException("Entreprise non trouvée");
        }
    }


    @Transactional
    public void etendreMarches(int id_entreprise, List<Marche> nouveauxMarches) {
        Entreprise entreprise = entrepriseRepository.findById(id_entreprise).orElseThrow(() -> new NotFoundException("Entreprise non trouvée"));
        entreprise.getMarches().addAll(nouveauxMarches);
        entrepriseRepository.save(entreprise);
    }


}
