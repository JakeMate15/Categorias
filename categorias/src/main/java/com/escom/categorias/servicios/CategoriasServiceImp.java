package com.escom.categorias.servicios;

import org.springframework.beans.factory.annotation.Autowired;

import com.escom.categorias.repositorios.CategoriaRepository;
import com.escom.categorias.entidades.Categoria;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriasServiceImp implements CategoriasService{
    @Autowired
    CategoriaRepository repository;

    @Override
    @Transactional
    public List<Categoria> findAll() {
        return (List<Categoria>) repository.findAll();
    }

    @Override
    @Transactional
    public Categoria findById(Long id) {
        Optional<Categoria> res = repository.findById(id);
        return res.orElse(null);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Categoria save(Categoria categoria) {
        return repository.save(categoria);
    }
}
