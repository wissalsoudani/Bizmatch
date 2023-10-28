package tn.esprit.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.Generic.IGenericService;
import tn.esprit.Generic.IGenericServiceImpl;
import tn.esprit.entities.CRM;
import tn.esprit.entities.Entreprise;

@Service
@AllArgsConstructor
public class IEntrepriseServiceIm extends IGenericServiceImpl<Entreprise,Integer> implements IEntrepriseService {
}
