package tn.esprit.Services;

import tn.esprit.Entities.BesoinCommercial;
import tn.esprit.Entities.Besoinetat;
import tn.esprit.Entities.Entreprise;
import tn.esprit.Entities.ServiceCommercial;

import java.util.List;

public interface IPrestService {
    public BesoinCommercial addBesoin(String email, BesoinCommercial b);
    public ServiceCommercial addService(int ide, ServiceCommercial s);
    public BesoinCommercial getByidBesoin (int idb);
    public ServiceCommercial getByidSer (int ids);

    public List<BesoinCommercial> getAll(int ide);
    public BesoinCommercial findByEtat(Besoinetat etat );
    public List<ServiceCommercial> getAllServices(int ide);

    public void deleteBesoin (int idb);
    public int getNombreBesoinCommercialAvecTitreOuSecteur(Entreprise entreprise, String titre, String secteur);
    public void deleteService(int ids);
}
