package tn.esprit.Services;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.Entities.*;
import tn.esprit.Repositories.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class Services implements IService {

    private final EntrepriseRepo entrepriseRepo;
    private final PartenaireRepo partenaireRepo;
    private final ConnexionRepo connexionRepo;
    private final BesoinRepo besoinRepo;
    private final ServiceRepo serviceRepo ;
    private final UserRepository userRepository;

    public Services(EntrepriseRepo entrepriseRepo, PartenaireRepo partenaireRepo, ConnexionRepo connexionRepo, BesoinRepo besoinRepo, ServiceRepo serviceRepo, UserRepository userRepository, ConnexionRepo connexionRepository) {
        this.entrepriseRepo = entrepriseRepo;
        this.partenaireRepo = partenaireRepo;
        this.connexionRepo = connexionRepo;
        this.besoinRepo = besoinRepo;
        this.serviceRepo = serviceRepo;
        this.userRepository = userRepository;
        this.connexionRepository = connexionRepository;
    }


    @Override
    public Entreprise addEntreprise(Entreprise e) {
        return entrepriseRepo.save(e);
    }

    @Override
    public Entreprise updateEntreprise(Entreprise r) {
        return entrepriseRepo.save(r);
    }

    @Override
    public Entreprise getByIdEntreprise(int ide) {
        return entrepriseRepo.findById(ide).orElse(null);
    }

    @Override
    public List<Entreprise> getAllEntreprise() {
        return entrepriseRepo.findAll();
    }

    @Override
    public void removeEntreprise(int ide) {
        entrepriseRepo.deleteById(ide);
    }

    @Override
    public User setEntrepriseenUser(String email, String nom) {
      User user= userRepository.findByEmail(email);
        List<Entreprise> entreprises = entrepriseRepo.findByNom(nom);

        if (user != null && entreprises != null && user.getRole() == ERole.GUEST) {
            if (entreprises.size() == 1) {
                Entreprise e = entreprises.get(0);
                user.setEntreprise(e.getNom());
                user.setRole(ERole.REPRESENTATIVE);
                userRepository.save(user);}}
     return null;
    }

    @Override
    public Entreprise getEntreprisebyUser (String email) {
        User user = userRepository.findUserByEmail(email);
log.info(email);
log.info(user.getEmail());
        if (user != null) {
            String nomEntreprise = user.getEntreprise();

            List<Entreprise> entreprises = entrepriseRepo.findByNom(nomEntreprise);
            if (!entreprises.isEmpty()) {
                return entreprises.get(0); // Return the first matching entreprise.
            }
        }
        return null;
    }




    @Override
    public BesoinCommercial addBesoin(int ide ,BesoinCommercial b) {
        Entreprise entreprise = entrepriseRepo.findById(ide).orElse(null);
        if(entreprise!=null)
        {

            if(entreprise.getBesoinCommercials() == null)
            {
                entreprise.setBesoinCommercials(new ArrayList<>());

            }
            entreprise.getBesoinCommercials().add(b);
            entrepriseRepo.save(entreprise);
            b.setEntreprise(entreprise);
            besoinRepo.save(b);
        }
        return null;
    }

    @Override
    public ServiceCommercial addService(int ide, ServiceCommercial s) {
        Entreprise entreprise = entrepriseRepo.findById(ide).orElse(null);
        if(entreprise!=null)
        {

            if(entreprise.getServiceCommercials() == null)
            {
                entreprise.setServiceCommercials(new ArrayList<>());

            }
            s.setEntreprise(entreprise);
            serviceRepo.save(s);
            entreprise.getServiceCommercials().add(s);
            entrepriseRepo.save(entreprise);

        }
        return null;
    }

    @Override
    public List<ServiceCommercial> getAll() {
        return serviceRepo.findAll();
    }

    @Override
    public Partenaire addPartenaire(Partenaire p) {
        return partenaireRepo.save(p);
    }

    @Override
    public Partenaire updatePartenaire(Partenaire p) {
        return partenaireRepo.save(p);
    }

    @Override
    public Partenaire getByIdPartenaire(int idp) {
        return partenaireRepo.findById(idp).orElse(null);
    }

    @Override
    public List<Partenaire> getAllPartenaire() {
        return partenaireRepo.findAll();
    }

    @Override
    public void removePartenaire(int idp) {
        partenaireRepo.deleteById(idp);
    }

    @Override
    public List<Entreprise> rechercherEntreprises(String secteur, String adresse) {
        return entrepriseRepo.findBySecteurAndAdresse(secteur,adresse);
    }
    private final ConnexionRepo connexionRepository;
    @Override
    //fonctionnel
    public Connexion envoyerDemandeDeConnexion(String email, int idB) {
        Connexion connexion = new Connexion();
        User user = userRepository.findByEmail(email);

        if (user != null) {
            String nomEntreprise = user.getEntreprise();
            List<Entreprise> entreprises = entrepriseRepo.findByNom(nomEntreprise);

            if (!entreprises.isEmpty()) {
                Entreprise entrepriseA = entreprises.get(0);

                Entreprise entrepriseB = entrepriseRepo.findById(idB).orElse(null);
                if (entrepriseB != null) {
                    connexion.setEtat(Etat.ENATTENTE);
                    connexion.setEntrepriseA(entrepriseA);
                    connexion.setEntrepriseB(entrepriseB);
                    Connexion savedConnexion = connexionRepository.save(connexion);

                    if (entrepriseB.getConnexionsEntrantes() == null) {
                        entrepriseB.setConnexionsEntrantes(new ArrayList<>());
                    } else {
                        entrepriseB.getConnexionsEntrantes().add(savedConnexion);
                        entrepriseB.setInvitations(entrepriseB.getInvitations() + 1);
                        entrepriseRepo.save(entrepriseB);
                    }
                }
            }
        }
        return connexionRepository.save(connexion);
    }


    @Override
    public List<Connexion> getAllConnexionbyIdentreprise(String email) {
        User user = userRepository.findByEmail(email);

        if (user != null) {
            String nomEntreprise = user.getEntreprise();
            List<Connexion> connexions = connexionRepository.findByEntrepriseB_Nom(nomEntreprise);
            return connexions;
        }

        return new ArrayList<>();
    }






    /*public void accepterDemandeDeConnexion(Long connexionId) {
        LocalDate localDate = LocalDate.now();
        Date datepartenariat = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Connexion connexion = connexionRepository.findById(connexionId).orElse(null);
        if (connexion != null) {
            connexion.setEtat(Etat.ACCEPTEE);
            Entreprise Cible = connexion.getEntrepriseB();
            Entreprise Emetteur=connexion.getEntrepriseA();
            Cible.setInvitations(Cible.getInvitations()-1);
            entrepriseRepo.save(Cible);
            if (connexion != null && connexion.getEtat()==Etat.ACCEPTEE) {
                if (Emetteur.getPartenaires() == null) {
                    Emetteur.setPartenaires(new ArrayList<>());
                }

                if (Cible.getPartenaires() == null) {
                    Cible.setPartenaires(new ArrayList<>());
                }
                Partenaire p = new Partenaire();
                if (p!=null){
                    Emetteur.getPartenaires().add(p);
                    Cible.getPartenaires().add(p);
                    p.setDatepartenariat(datepartenariat);
                    p.setEntreprise1(Emetteur);
                    p.setEntreprise2(Cible);
                    p.setStatut(Statut.ENCOURS);
                    partenaireRepo.save(p);
                }
                entrepriseRepo.save(Emetteur);
                entrepriseRepo.save(Cible);

            }
            connexionRepository.save(connexion);
             }

    }*/
    @Override
    //fonctionnelle
    public void accepterDemandeDeConnexion(Long connexionId) {
        LocalDate localDate = LocalDate.now();
        Date datePartenariat = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());

        Connexion connexion = connexionRepository.findById(connexionId).orElse(null);

        if (connexion != null) {
            connexion.setEtat(Etat.ACCEPTEE);
            entrepriseRepo.save(connexion.getEntrepriseB());
            entrepriseRepo.save(connexion.getEntrepriseA());

            if (connexion.getEtat() == Etat.ACCEPTEE) {
                Entreprise cible = connexion.getEntrepriseB();
                Entreprise emetteur = connexion.getEntrepriseA();
                cible.setInvitations(cible.getInvitations()-1);

                if (emetteur.getPartenaires() == null) {
                    emetteur.setPartenaires(new ArrayList<>());
                }
                if (cible.getPartenaires() == null) {
                    cible.setPartenaires(new ArrayList<>());
                }

                Partenaire p = new Partenaire();
                p.setDatepartenariat(datePartenariat);
                p.setEntreprise1(emetteur);
                p.setEntreprise2(cible);
                p.setStatut(Statut.ENCOURS);

                emetteur.getPartenaires().add(p);
                cible.getPartenaires().add(p);
                partenaireRepo.save(p);
                entrepriseRepo.save(emetteur);
                entrepriseRepo.save(cible);
            }

            connexionRepository.save(connexion);
        }
    }

    @Override
    public void refuserDemandeDeConnexion(Long connexionId) {
        Connexion connexion = connexionRepository.findById(connexionId).orElse(null);
        if (connexion != null) {
            connexion.setEtat(Etat.REFUSEE);
            Entreprise entrepriseCible = connexion.getEntrepriseB();
            if (entrepriseCible!=null && entrepriseCible.getConnexionsEntrantes()!=null)
            {
                entrepriseCible.getConnexionsEntrantes().remove(connexion);
                entrepriseCible.setInvitations(entrepriseCible.getInvitations()-1);
                entrepriseRepo.save(entrepriseCible);
            }
            connexionRepository.delete(connexion);


        }
    }
    @Override
    public double getDureeMoyennePartenariats(int identreprise) {
        Entreprise entreprise = entrepriseRepo.findById(identreprise).orElse(null);
        if (entreprise != null) {
            List<Partenaire> partenaires = entreprise.getPartenaires();
            if (partenaires.isEmpty()) {
                return 0.0;
            }
            long totalDuration = 0;
            for (Partenaire partenaire : partenaires) {
                totalDuration += partenaire.getDatepartenariat().getTime();
            }
            return (double) totalDuration / partenaires.size();
        }

        return 0.0;
    }

}


