package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.entities.BesoinOffre;
import tn.esprit.services.IBesoinOffreservice;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/besoins")
public class BesoinOffreController  {

    @Autowired
    private IBesoinOffreservice boService;


    @PostMapping("/addBesoinOffre/{idEntrep}")
    //@ResponseBody
    public ResponseEntity<BesoinOffre> addBesoinOffre(@RequestBody BesoinOffre r, @PathVariable int idEntrep) {
        try {
            BesoinOffre addedBesoinOffre = boService.addBesoinOffre(r, idEntrep);
            return new ResponseEntity<>(addedBesoinOffre, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            // Handle the case where Entreprise with specified ID does not exist
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions (e.g., database errors)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/listBesoinOffre")
    //@ResponseBody
    public List<BesoinOffre> listBesoinOffre(){

        return boService.ListBesoinOffre();
    }

    @DeleteMapping("/deleteBesoinOffre/{idBesoinOffre}")
    //@ResponseBody
    public void deleteBesoinOffre(@PathVariable("idBesoinOffre") Long idBesoinOffre){

        boService.deleteBesoinOffre(idBesoinOffre);
    }

    @PutMapping("/modifierBesoinOffre/{idBesoinOffre}")
    //@ResponseBody
    public ResponseEntity<String> modifierBesoinOffre(
            @RequestBody BesoinOffre besoinOffre,
            @PathVariable("idBesoinOffre") Long idBesoinOffre) {

        try {
            boService.updateBesoinOffre(besoinOffre, idBesoinOffre);
            return ResponseEntity.ok("BesoinOffre updated successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("BesoinOffre not found with ID: " + idBesoinOffre);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update BesoinOffre.");
        }
    }

    @GetMapping("/getBesoinOffre/{idBesoinOffre}")
    //@ResponseBody
    public BesoinOffre getBesoinOffreByiD(@PathVariable("idBesoinOffre") Long idBesoinOffre){

        return boService.getBesoinOffreById(idBesoinOffre);
    }

    @GetMapping("/filterNameFourn")
    public ResponseEntity<?> filter(@RequestParam String filter)
    {
        return boService.NameFiltre(filter);
    }



}

