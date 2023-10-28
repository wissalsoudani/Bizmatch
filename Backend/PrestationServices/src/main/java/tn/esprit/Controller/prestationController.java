package tn.esprit.Controller;

import org.springframework.web.bind.annotation.*;
import tn.esprit.Entities.BesoinCommercial;
import tn.esprit.Entities.ServiceCommercial;
import tn.esprit.Services.IPrestService;

import java.util.List;

@RestController
@RequestMapping(value = "/prestation")
@CrossOrigin("*")
public class prestationController {
    private final IPrestService iPrestService ;

    public prestationController(IPrestService iPrestService) {
        this.iPrestService = iPrestService;
    }

    @PostMapping("/addBesoin/{email}")
    public BesoinCommercial addBesoin(@PathVariable String email , @RequestBody BesoinCommercial b)
    {
        return iPrestService.addBesoin(email,b);
    }
    @PostMapping("/Service/add/{ide}")
    public ServiceCommercial addService(@PathVariable int ide, @RequestBody ServiceCommercial s)
    {
        return iPrestService.addService(ide,s);
    }
    @GetMapping("/Besoin/getbyid/{idb}")
    public BesoinCommercial getByidBesoin (@PathVariable int idb)
    {
        return iPrestService.getByidBesoin(idb);
    }
    @GetMapping("/Service/getbyid/{ids}")
    public ServiceCommercial getByidSer (@PathVariable int ids)
    {
        return iPrestService.getByidSer(ids);
    }
    @GetMapping("/Besoin/getall/{ide}")
    public List<BesoinCommercial> getAll(@PathVariable int ide)
    {
        return iPrestService.getAll(ide);
    }
    @GetMapping("/Service/getAll/{ide}")
    public List<ServiceCommercial> getAllServices(@PathVariable int ide )
    {
        return iPrestService.getAllServices(ide);
    }
    @DeleteMapping("/Besoin/delete/{idb}")
    public void deleteBesoin (@PathVariable int idb)
    {
        iPrestService.deleteBesoin(idb);
    }
    @DeleteMapping("/Service/delete/{ids}")
    public void deleteService(@PathVariable int ids)
    {
        iPrestService.deleteService(ids);
    }
}
