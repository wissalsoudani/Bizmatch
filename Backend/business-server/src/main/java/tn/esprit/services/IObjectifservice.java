package tn.esprit.services;


import tn.esprit.entities.Objectif;

import java.io.ByteArrayInputStream;
import java.util.List;

public interface IObjectifservice {

    Objectif addObjectif(Objectif bo, int idEntrep);

    List<Objectif> ListObjectifs();

    void deleteObjectifs(Long idBO);

    void updateObjectif(Objectif bo, Long idBO);

    Objectif getObjectifById(Long idBO);

    ByteArrayInputStream objectifsPDFReport(List<Objectif> objectifs);

}
