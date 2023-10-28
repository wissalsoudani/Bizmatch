package tn.esprit.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.entities.Entreprise;
import tn.esprit.entities.BesoinOffre;
import tn.esprit.repositories.BesoinOffreRepository;
import tn.esprit.repositories.EntrepriseRepository;

@Service
@AllArgsConstructor
@Slf4j
public class IEntrepriseServiceIm implements IEntrepriseService {

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @Autowired
    private BesoinOffreRepository boRepository;


}
