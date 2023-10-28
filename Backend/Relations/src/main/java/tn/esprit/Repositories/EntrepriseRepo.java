package tn.esprit.Repositories;

import tn.esprit.Entities.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntrepriseRepo extends JpaRepository<Entreprise,Integer> {

    List<Entreprise> findBySecteurAndAdresse(String secteur, String adresse);
    public List<Entreprise> findByNom(String nom);

}
