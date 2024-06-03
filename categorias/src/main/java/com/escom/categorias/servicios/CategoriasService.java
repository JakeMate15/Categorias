package com.escom.categorias.servicios;

import com.escom.categorias.entidades.Categoria;

import java.util.List;

public interface CategoriasService {
    public List<Categoria> findAll();
    public Categoria findById(Long id);
    public void deleteById(Long id);
    public Categoria save(Categoria categoria);
}
