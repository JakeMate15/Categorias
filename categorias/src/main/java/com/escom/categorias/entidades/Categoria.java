package com.escom.categorias.entidades;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "categoria")
public class Categoria implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategoria;

    @NotBlank(message = "La descipcion es obligatoria")
    @Size(min = 5, max = 50, message = "Debe de estar entre 5 y 250")
    @Column(nullable = false, length = 50)
    private String descripcionCategorias;

    @Column(nullable = false, length = 50)
    private String nombreCategoria;
}
