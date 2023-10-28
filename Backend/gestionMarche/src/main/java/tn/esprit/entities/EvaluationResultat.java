package tn.esprit.entities;

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
public class EvaluationResultat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int score;

    @ManyToOne
    @JoinColumn(name = "marche_id")
    private Marche marche;

    @ManyToOne
    @JoinColumn(name = "critere_id")
    private EvaluationCritere critere;


}

