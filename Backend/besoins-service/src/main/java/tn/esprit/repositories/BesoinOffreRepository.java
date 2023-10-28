package tn.esprit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.entities.BesoinOffre;

import java.util.List;

public interface BesoinOffreRepository  extends JpaRepository<BesoinOffre, Long> {

    @Query("select f from BesoinOffre f where lower(f.name_besoin) like lower(concat('%', :filter,'%'))")
    public List<BesoinOffre> findByFilter(@Param("filter") String filter);

}
