package tn.esprit.Controller;

import org.springframework.web.bind.annotation.*;
import tn.esprit.Entities.*;
import tn.esprit.Services.IService;

import java.util.List;

@RestController
@RequestMapping(value = "/miserelation")
public class RelationsController {

    private final IService iService;

    public RelationsController(IService iService) {
        this.iService = iService;
    }

    @GetMapping("/Partenariat/getdureemoyenne/{identreprise}")
    public double getDureeMoyennePartenariats(@PathVariable int identreprise){
        return iService.getDureeMoyennePartenariats(identreprise);
    }
    @PostMapping("/besoin/add/{ide}")
    public BesoinCommercial addBesoin(@PathVariable int  ide , @RequestBody BesoinCommercial b)
    {
        return iService.addBesoin(ide,b);
    }
    @PostMapping("/Service/{ide}")
    public ServiceCommercial addService(@PathVariable int ide,@RequestBody ServiceCommercial s)
    {
        return iService.addService(ide,s);
    }
    @GetMapping("/Service/getall")
    public List<ServiceCommercial> getAll(){
        return iService.getAll();
    }





    @PostMapping("/entreprises")
    public Entreprise addEntreprise(@RequestBody Entreprise entreprise) {
        return iService.addEntreprise(entreprise);
    }

    @PutMapping("/entreprises/update")
    public Entreprise updateEntreprise( @RequestBody Entreprise entreprise) {

        return iService.updateEntreprise(entreprise);
    }

    @GetMapping("/entreprises/{id}")
    public Entreprise getByIdEntreprise(@PathVariable int id) {
        return iService.getByIdEntreprise(id);
    }

    @GetMapping("/entreprises")
    public List<Entreprise> getAllEntreprise() {
        return iService.getAllEntreprise();
    }

    @DeleteMapping("/entreprises/{id}")
    public void removeEntreprise(@PathVariable int id) {
        iService.removeEntreprise(id);
    }

    @PutMapping("/Partenariat/update")
    public Partenaire updatePartenaire(@RequestBody Partenaire p) {
        return iService.updatePartenaire(p);
    }

    @GetMapping("/Partenariat/getById/{idp}")
    public Partenaire getByIdPartenaire(@PathVariable int idp) {
        return iService.getByIdPartenaire(idp);
    }

    @GetMapping("/Partenariat/getall")
    public List<Partenaire> getAllPartenaire() {
        return iService.getAllPartenaire();
    }

    @DeleteMapping("/Partenariat/delete/{idp}")
    public void removePartenaire(@PathVariable int idp) {
        iService.removePartenaire(idp);
    }

    @GetMapping("/Connexion/recherche/{secteur}/{adresse}")
    public List<Entreprise> rechercherEntreprises(@PathVariable String secteur, @PathVariable String adresse) {
        return iService.rechercherEntreprises(secteur, adresse);
    }

    @PostMapping("/connexion/demande/{email}/{idB}")
    public Connexion envoyerDemandeDeConnexion(@PathVariable String email ,@PathVariable int idB) {

        return iService.envoyerDemandeDeConnexion(email,idB);
    }
    @GetMapping("/getbyuserentreprise/{email}")
    public Entreprise getEntreprisebyUser(@PathVariable String email){
        return iService.getEntreprisebyUser(email);
    }
    @GetMapping("/connexion/getallinvitations/{email}")
    public List<Connexion> getAllConnexionbyIdentreprise(@PathVariable String email) {
        return iService.getAllConnexionbyIdentreprise(email);
    }

    @PutMapping("/connexion/accepter/{connexionId}")
    public void accepterDemandeDeConnexion(@PathVariable Long connexionId) {
        iService.accepterDemandeDeConnexion(connexionId);
    }

    @PutMapping("/connexion/refuser/{connexionId}")
    public void refuserDemandeDeConnexion(@PathVariable Long connexionId) {
        iService.refuserDemandeDeConnexion(connexionId);
    }
    @PutMapping("/EntrepriseUser/{email}/{nom}")
    public User setEntrepriseenUser(@PathVariable String email,@PathVariable String nom)
    {
       return iService.setEntrepriseenUser(email, nom);
    }


}
