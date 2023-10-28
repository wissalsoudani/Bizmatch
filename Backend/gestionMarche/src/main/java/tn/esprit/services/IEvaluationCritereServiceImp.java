package tn.esprit.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.Generic.IGenericServiceImpl;
import tn.esprit.entities.Entreprise;
import tn.esprit.entities.EvaluationCritere;

@Service
@AllArgsConstructor
public class IEvaluationCritereServiceImp extends IGenericServiceImpl<EvaluationCritere,Long> implements IEvaluationCritereService {
}
