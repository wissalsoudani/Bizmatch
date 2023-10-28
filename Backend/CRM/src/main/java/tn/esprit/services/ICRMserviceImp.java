package tn.esprit.services;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.Generic.IGenericServiceImpl;
import tn.esprit.entities.CRM;
import tn.esprit.entities.Entreprise;
import tn.esprit.repositories.CRMRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ICRMserviceImp extends IGenericServiceImpl<CRM,Long> implements ICRMservice{
    @Autowired
    private CRMRepository crmRepository;


}
