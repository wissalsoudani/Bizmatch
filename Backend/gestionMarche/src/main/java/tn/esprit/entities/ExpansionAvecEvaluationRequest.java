package tn.esprit.entities;

import java.util.List;
import java.util.Map;


public class ExpansionAvecEvaluationRequest {
    private Map<Long, Integer> evaluations;
    private List<Marche> nouveauxMarches;

    public Map<Long, Integer> getEvaluations() {
        return evaluations;
    }

    public List<Marche> getNouveauxMarches() {
        return nouveauxMarches;
    }

}
