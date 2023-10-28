package tn.esprit.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Partenaire {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int idparte;
    @Temporal(TemporalType.DATE)
    private Date datepartenariat ;
    @Enumerated(EnumType.STRING)
    private Statut statut ;

    @ManyToOne
    private Entreprise entreprise1;
    @ManyToOne
    private Entreprise entreprise2;


}
