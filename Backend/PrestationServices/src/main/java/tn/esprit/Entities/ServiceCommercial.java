package tn.esprit.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceCommercial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idservice ;
    private String nomservice ;
    private String problemedeservice;
    private String description ;


    @ManyToOne
    private Entreprise entreprise;
}
