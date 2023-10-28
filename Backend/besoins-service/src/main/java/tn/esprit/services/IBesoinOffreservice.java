package tn.esprit.services;


import org.springframework.http.ResponseEntity;
import tn.esprit.entities.BesoinOffre;

import java.util.List;

public interface IBesoinOffreservice {

    BesoinOffre addBesoinOffre(BesoinOffre bo, int idEntrep);

    List<BesoinOffre> ListBesoinOffre();

    void deleteBesoinOffre(Long idBO);

    void updateBesoinOffre(BesoinOffre bo, Long idBO);

    BesoinOffre getBesoinOffreById(Long idBO);

    ResponseEntity<?> NameFiltre (String filter);
}
