package tn.esprit.services;

import tn.esprit.Generic.IGenericService;
import tn.esprit.entities.Entreprise;
import tn.esprit.entities.Marche;

import java.util.List;
import java.util.Map;

public interface IEntrepriseService extends IGenericService<Entreprise,Integer> {
    public void ajouterMarcheAEntreprise(int entrepriseId, Long marcheId);
    public void etendreMarchesAvecEvaluation(int id_entreprise, List<Marche> nouveauxMarches, Map<Long, Integer> evaluations);

    public void etendreMarches(int entrepriseId, List<Marche> nouveauxMarches);

}
