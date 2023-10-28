package tn.esprit.services;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tn.esprit.entities.BesoinOffre;
import tn.esprit.entities.Entreprise;
import tn.esprit.repositories.BesoinOffreRepository;
import tn.esprit.repositories.EntrepriseRepository;
import tn.esprit.entities.RequestApiForm.MessageResponse;

import javax.persistence.EntityNotFoundException;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class IBesoinOffreserviceImp implements IBesoinOffreservice {

    @Autowired
    private BesoinOffreRepository boRepository;
    @Autowired
    private EntrepriseRepository entrepriseRepository;

    MailerService mailerService;

    @Override
    public BesoinOffre addBesoinOffre(BesoinOffre bo, int idEntrep) {
        Entreprise entreprise = entrepriseRepository.findById(idEntrep)
                .orElseThrow(() -> new EntityNotFoundException("Entreprise not found with id: " + idEntrep));
        bo.setEntreprise(entreprise);

        mailerService.sendEmail(entreprise.getAdresse(), "Welcome to BizMatch!", "Dear "+entreprise.getNom()+"Team, \nWe would like to inform you that you have successfully added your new need " +bo.getName_besoin() +"to your Needs database ");


        Date date = new Date(System.currentTimeMillis());
        bo.setDate_ajout_besoin(date);
        bo.setStatus_besoin(0);
        return boRepository.save(bo);
    }

    @Override
    public List<BesoinOffre> ListBesoinOffre(){
        return boRepository.findAll();
    }

    @Override
    public void deleteBesoinOffre(Long idBO) {
        BesoinOffre r = boRepository.findById(idBO).orElse(null);

        boRepository.delete(r);
    }

    @Override
    public void updateBesoinOffre(BesoinOffre besoinOffre, Long idBesoinOffre) {

        // Check if the BesoinOffre with the specified ID exists in the database
        BesoinOffre existingBesoinOffre = boRepository.findById(idBesoinOffre)
                .orElseThrow(() -> new EntityNotFoundException("BesoinOffre not found with id: " + idBesoinOffre));

        // Update properties of existingBesoinOffre with the values from besoinOffre
        existingBesoinOffre.setName_besoin(besoinOffre.getName_besoin());
        existingBesoinOffre.setDescr_besoin(besoinOffre.getDescr_besoin());
        existingBesoinOffre.setStatus_besoin(besoinOffre.getStatus_besoin());
        existingBesoinOffre.setDate_ajout_besoin(besoinOffre.getDate_ajout_besoin());
        existingBesoinOffre.setType(besoinOffre.getType());
        existingBesoinOffre.setCategory(besoinOffre.getCategory());


        // Save the updated BesoinOffre
        boRepository.save(existingBesoinOffre);
    }

    @Override
    public BesoinOffre getBesoinOffreById(Long idBO) {

        return boRepository.getById(idBO);
    }

    public ResponseEntity<?> NameFiltre (String filter) {

        List<BesoinOffre> fourn=boRepository.findByFilter(filter)
                .stream()
                .sorted(Comparator.comparing(BesoinOffre::getId_besoin))
                .collect(Collectors.toList());
        return ResponseEntity.ok(new MessageResponse(fourn.toString()));
    }


}
