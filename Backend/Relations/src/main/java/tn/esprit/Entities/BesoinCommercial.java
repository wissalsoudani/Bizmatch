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
public class BesoinCommercial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idBesoin ;
    private String titre ;
    private String description ;
    @Enumerated(EnumType.STRING)
    private Besoinetat besoinetat ;
    @ManyToOne
    private Entreprise entreprise ;

}
