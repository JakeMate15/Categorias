package com.escom.categorias.controlador;

import com.escom.categorias.entidades.Categoria;
import com.escom.categorias.servicios.CategoriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {
    @Autowired
    private CategoriasService categoriasService;

    @GetMapping
    public List<Categoria> findAll() {
        return categoriasService.findAll();
    }

    @GetMapping("/{id}")
    public Categoria findById(@PathVariable Long id) {
        return categoriasService.findById(id);
    }

    @PostMapping
    public Categoria save(@RequestBody Categoria categoria) {
        return categoriasService.save(categoria);
    }

    @PutMapping("/{id}")
    public Categoria update(@PathVariable Long id, @RequestBody Categoria categoria) {
        categoria.setIdCategoria(id);
        return categoriasService.save(categoria);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        categoriasService.deleteById(id);
    }
}
