package tn.esprit.Services;

import org.springframework.stereotype.Service;
import tn.esprit.Entities.*;
import tn.esprit.Repositories.BesoinRepo;
import tn.esprit.Repositories.EntrepriseRepo;
import tn.esprit.Repositories.ServiceRepo;
import tn.esprit.Repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class PrestService implements IPrestService{

    private final BesoinRepo besoinRepo;
    private final UserRepository userRepository;
    private final ServiceRepo serviceRepo ;
    private final EntrepriseRepo entrepriseRepo;

    public PrestService(BesoinRepo besoinRepo, UserRepository userRepository, ServiceRepo serviceRepo, EntrepriseRepo entrepriseRepo) {
        this.besoinRepo = besoinRepo;
        this.userRepository = userRepository;
        this.serviceRepo = serviceRepo;
        this.entrepriseRepo = entrepriseRepo;
    }



    @Override
    public BesoinCommercial addBesoin(String email, BesoinCommercial b) {

        User user = userRepository.findByEmail(email);

        if (user != null) {

            String nomEntreprise = user.getEntreprise();
            List<Entreprise> entreprises = entrepriseRepo.findByNom(nomEntreprise);

            if (entreprises != null && entreprises.size() == 1) {
                Entreprise e = entreprises.get(0);

               b.setEntreprise(e);




                return besoinRepo.save(b);
            }
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
            entreprise.getServiceCommercials().add(s);
            entrepriseRepo.save(entreprise);
            s.setEntreprise(entreprise);
            serviceRepo.save(s);
        }
        return null;
    }

    @Override
    public BesoinCommercial getByidBesoin(int idb) {
        return besoinRepo.findById(idb).orElse(null);
    }

    @Override
    public ServiceCommercial getByidSer(int ids) {
        return serviceRepo.findById(ids).orElse(null);
    }


    @Override
    public List<BesoinCommercial> getAll(int ide) {
        Entreprise e = entrepriseRepo.findById(ide).orElse(null);
        if (e != null) {
            return e.getBesoinCommercials();
        }
        return new ArrayList<>();
    }


    @Override
    public BesoinCommercial findByEtat(Besoinetat etat) {
        return null;
    }

    @Override
    public List<ServiceCommercial> getAllServices(int ide )
    {
        Entreprise e = entrepriseRepo.findById(ide).orElse(null);
        if (e != null) {
            return e.getServiceCommercials();
        }
        return new ArrayList<>();
    }

    @Override
    public void deleteBesoin(int idb) {
      besoinRepo.deleteById(idb);
    }

    @Override
    public void deleteService(int ids) {
     serviceRepo.deleteById(ids);
    }
    @Override
    public int getNombreBesoinCommercialAvecTitreOuSecteur(Entreprise entreprise, String titre, String secteur) {
        List<BesoinCommercial> besoins = entreprise.getBesoinCommercials();
        int count = 0;
        for (BesoinCommercial besoin : besoins) {
            if (besoin.getTitre().equals(titre) || besoin.getEntreprise().getSecteur().equals(secteur)) {
                count++;
            }
        }
        return count;
    }
}
