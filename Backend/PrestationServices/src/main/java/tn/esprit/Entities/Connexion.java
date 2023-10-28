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
    public class Connexion {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @ManyToOne
        private Entreprise entrepriseA;
        @ManyToOne
        private Entreprise entrepriseB;
        @Enumerated(EnumType.STRING)
        private Etat etat;
}
