package com.escom.categorias.repositorios;

import com.escom.categorias.entidades.Categoria;
import org.springframework.data.repository.CrudRepository;

public interface CategoriaRepository extends CrudRepository<Categoria, Long> {
}
