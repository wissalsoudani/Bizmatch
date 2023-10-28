package tn.esprit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.Date;

@CrossOrigin
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_activity;
    private String name_activity;
    private String descr_activity;

    @Temporal(TemporalType.DATE)
    private Date date_debut_activity;
    @Temporal(TemporalType.DATE)
    private Date date_fin_activity;

    @Enumerated(EnumType.STRING)
    private Type type_activity;
    @Enumerated(EnumType.STRING)
    private Status status_activity= Status.PENDING;
    @Enumerated(EnumType.STRING)
    private Priority priority_activity;


    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_objectif")
    private Objectif objectif;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_user")
    private User user;

}


