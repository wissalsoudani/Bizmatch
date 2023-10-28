package tn.esprit.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.Generic.IGenericServiceImpl;
import tn.esprit.entities.Entreprise;
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

@Service
@AllArgsConstructor
public class IMarcheServiceImp extends IGenericServiceImpl<Marche,Long> implements IMarcheService{


}




