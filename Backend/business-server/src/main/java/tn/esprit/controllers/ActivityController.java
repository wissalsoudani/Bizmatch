package tn.esprit.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.entities.Activity;
import tn.esprit.services.IActivityservice;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/business/business-activities")
public class ActivityController {

    @Autowired
    private IActivityservice boService;


    @PostMapping("/addActivity/{idObj}/{idUser}")
    //@ResponseBody
    public ResponseEntity<Activity> addActivity(@RequestBody Activity r, @PathVariable Long idObj, @PathVariable Long idUser) {
        try {
            Activity addedAcivity = boService.addActivity(r, idObj, idUser);
            return new ResponseEntity<>(addedAcivity, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/listActivities")
    //@ResponseBody
    public List<Activity> listActivity(){

        return boService.ListActivities();
    }

    @DeleteMapping("/deleteActivity/{idActivity}")
    //@ResponseBody
    public void deleteActivity(@PathVariable("idActivity") Long idActivity){

        boService.deleteActivity(idActivity);
    }

    @PutMapping("/modifierActivity/{idActivity}")
    //@ResponseBody
    public ResponseEntity<String> modifierActivity(
            @RequestBody Activity activity,
            @PathVariable("idActivity") Long idActivity) {

        try {
            boService.updateActivity(activity, idActivity);
            return ResponseEntity.ok("Activity updated successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Activity not found with ID: " + idActivity);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update Activity.");
        }
    }

    @GetMapping("/getActivity/{idActivity}")
    //@ResponseBody
    public Activity getActivityByiD(@PathVariable("idActivity") Long idActivity){

        return boService.getActivityById(idActivity);
    }



}

