package tn.esprit.reunionservice.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.reunionservice.entities.Reunion;
import tn.esprit.reunionservice.services.IReunionService;

import java.util.List;

@RestController
@RequestMapping("/reunions")
public class ReunionController {

    @Autowired
    private IReunionService reunionService;


    @PostMapping("/add/{idEntreprise1}/{idEntreprise2}")
    public Reunion addReunion(@RequestBody Reunion reunion,
                              @PathVariable int idEntreprise1,
                              @PathVariable int idEntreprise2) {
        return reunionService.addReunion(reunion, idEntreprise1, idEntreprise2);
    }

    @PutMapping("/update")
    public Reunion updateReunion(@RequestBody Reunion reunion) {
        return reunionService.updateReunion(reunion);
    }

    @GetMapping("/getAll")
    public List<Reunion> getAllReunions() {
        return reunionService.getAllReunions();
    }

    @DeleteMapping("/delete/{reunionId}")
    public void deleteReunion(@PathVariable Long reunionId) {
        reunionService.deleteReunion(reunionId);
    }

    @GetMapping("/find/{reunionId}")
    public Reunion findReunionById(@PathVariable Long reunionId) {
        return reunionService.findReunionById(reunionId);
    }


}