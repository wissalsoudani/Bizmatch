package tn.esprit.Generic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


public class GenericController<T,ID> {
    @Autowired
    IGenericService<T,ID> genericService;

    @PostMapping()
    public T add(@RequestBody T entity) {
        return genericService.add(entity);
    }

    @PutMapping()
    public T update(@RequestBody T entity) {
        return	genericService.update(entity);
    }

    @GetMapping("/{id}")
    public T retrieveById(@PathVariable ID id ) {
        return	genericService.retrieveById(id);
    }

    @GetMapping()
    public List<T> retrieveAll() {
        return	genericService.retrieveAll();
    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable ID id) {
        return	genericService.delete(id);
    }


}
