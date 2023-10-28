package tn.esprit.Generic;


import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.List;
import java.util.Map;


public class IGenericServiceImpl<T,ID> implements IGenericService<T,ID> {

    @Autowired
    JpaRepository<T,ID> baseRepository;

    // @Autowired
    //private  BaseRepository<T, ID> baseRepository;

    @Override
    public T add(T entity) {
        return baseRepository.save(entity);
    }

    @Override
    public T update(T entity) {
        return baseRepository.save(entity);
    }

    @Override
    public T retrieveById(ID id) {
        return baseRepository.findById(id).orElse(null);
    }

    @Override
    public List<T> retrieveAll() {
        return baseRepository.findAll();
    }

    @Override
    public Boolean delete(ID id) {
        if (baseRepository.existsById(id)) {
            baseRepository.deleteById(id);
            return true;
        }
        else {return false;}
    }


}