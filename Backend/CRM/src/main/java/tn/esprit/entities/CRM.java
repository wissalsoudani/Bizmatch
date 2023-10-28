package tn.esprit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
@CrossOrigin
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CRM {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_CRM;
    private String type;
    private String nom;
    private String contact;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "identreprise")
    private Entreprise entreprisee;


}
