package tn.esprit.Generic;


import java.util.List;
import java.util.Map;


public interface IGenericService<T,ID> {

    T add(T entity);
    T update(T entity);
    T retrieveById(ID id);
    List<T> retrieveAll();
    Boolean delete(ID id);
}