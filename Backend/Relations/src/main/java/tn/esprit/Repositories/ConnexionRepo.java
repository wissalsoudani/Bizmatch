package tn.esprit.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.Entities.Connexion;
import tn.esprit.Entities.Entreprise;

import java.util.List;


@Repository
public interface ConnexionRepo extends JpaRepository<Connexion,Long> {

    Connexion findByEntrepriseAAndAndEntrepriseB(Entreprise a , Entreprise b);

    List<Connexion>findByEntrepriseB_Nom(String email);
    List<Connexion> findByEntrepriseA(Entreprise nomEntreprise);
}
