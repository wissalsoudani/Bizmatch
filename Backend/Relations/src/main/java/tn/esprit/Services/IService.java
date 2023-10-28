package tn.esprit.Services;

import tn.esprit.Entities.*;

import java.util.List;

public interface IService {

    public Entreprise addEntreprise(Entreprise e);
    public Entreprise updateEntreprise(Entreprise r);
    public Entreprise getByIdEntreprise(int ide);
    public List<Entreprise> getAllEntreprise();
    public void removeEntreprise(int ide);
    public User setEntrepriseenUser(String email, String nom);
    public Entreprise getEntreprisebyUser (String email);
    public BesoinCommercial addBesoin(int  ide ,BesoinCommercial b);
    public ServiceCommercial addService(int ide, ServiceCommercial s);
    public List<ServiceCommercial> getAll();
    public Partenaire addPartenaire(Partenaire p);
    public Partenaire updatePartenaire(Partenaire p);
    public Partenaire getByIdPartenaire(int idp);
    public List<Partenaire> getAllPartenaire();
    public void removePartenaire(int idp);
    public List<Entreprise> rechercherEntreprises(String secteur, String adresse);
    public Connexion envoyerDemandeDeConnexion(String email , int idB);
    public List<Connexion> getAllConnexionbyIdentreprise(String email);
    public void accepterDemandeDeConnexion(Long connexionId);
    public void refuserDemandeDeConnexion(Long connexionId);
    public double getDureeMoyennePartenariats(int identreprise);






}
