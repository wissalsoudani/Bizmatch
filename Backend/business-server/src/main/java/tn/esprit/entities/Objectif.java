package tn.esprit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@CrossOrigin
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Objectif {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_objectif;
    private String name_objectif;
    private String descr_objectif;

    @Temporal(TemporalType.DATE)
    private Date date_debut_objectif;
    @Temporal(TemporalType.DATE)
    private Date date_fin_objectif;

    @Enumerated(EnumType.STRING)
    private Type type_objectif;
    @Enumerated(EnumType.STRING)
    private Status status_objectif = Status.PENDING;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "identreprise")
    private Entreprise entreprise;

    @OneToMany(mappedBy = "objectif")
    @JsonIgnore
    private List<Activity> activities;

}


