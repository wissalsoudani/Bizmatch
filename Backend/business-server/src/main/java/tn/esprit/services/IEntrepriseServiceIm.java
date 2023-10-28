package tn.esprit.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.repositories.ObjectifRepository;
import tn.esprit.repositories.EntrepriseRepository;

@Service
@AllArgsConstructor
@Slf4j
public class IEntrepriseServiceIm implements IEntrepriseService {

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @Autowired
    private ObjectifRepository boRepository;


}
