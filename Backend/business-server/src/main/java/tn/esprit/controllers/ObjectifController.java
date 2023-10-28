package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.entities.Objectif;
import tn.esprit.services.IObjectifservice;

import javax.persistence.EntityNotFoundException;
import java.io.ByteArrayInputStream;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/business/business-objectifs")
public class ObjectifController {

    @Autowired
    private IObjectifservice boService;


    @PostMapping("/addObjectif/{idEntrep}")
    //@ResponseBody
    public ResponseEntity<Objectif> addBesoinOffre(@RequestBody Objectif r, @PathVariable int idEntrep) {
        try {
            Objectif addedObjectif = boService.addObjectif(r, idEntrep);
            return new ResponseEntity<>(addedObjectif, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            // Handle the case where Entreprise with specified ID does not exist
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions (e.g., database errors)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/listObjectifs")
    //@ResponseBody
    public List<Objectif> listObjectifs(){

        return boService.ListObjectifs();
    }

    @DeleteMapping("/deleteObjectif/{idObjectif}")
    //@ResponseBody
    public void deleteBesoinOffre(@PathVariable("idObjectif") Long idObjectif){

        boService.deleteObjectifs(idObjectif);
    }

    @PutMapping("/modifierObjectif/{idObjectif}")
    //@ResponseBody
    public ResponseEntity<String> modifierObjectif(
            @RequestBody Objectif besoinOffre,
            @PathVariable("idObjectif") Long idObjectif) {

        try {
            boService.updateObjectif(besoinOffre, idObjectif);
            return ResponseEntity.ok("Objectif updated successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Objectif not found with ID: " + idObjectif);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update Objectif.");
        }
    }

    @GetMapping("/getBesoinOffre/{idBesoinOffre}")
    //@ResponseBody
    public Objectif getObjectifByiD(@PathVariable("idObjectif") Long idObjectif){

        return boService.getObjectifById(idObjectif);
    }


    @GetMapping("/export/pdf")
    public ResponseEntity<InputStreamResource> exportObjectifsPdf()
    {
        List<Objectif> objectifs = boService.ListObjectifs();
        ByteArrayInputStream bais = boService.objectifsPDFReport(objectifs);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition","inline; filename=donations.pdf");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bais));
    }

}

