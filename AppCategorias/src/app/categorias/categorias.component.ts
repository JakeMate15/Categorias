import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Categoria } from '../model/categoria';
import Swal from 'sweetalert2';
import { CategoriaService } from '../services/categoria.service';
import { response } from 'express';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
    titulo: string = 'Gestión de Productos';
    listaCategorias: Categoria[] = [];

    constructor(private categoriaService: CategoriaService) {}
    httClient = inject(HttpClient);

    ngOnInit(): void {
        this.cargarCategorias();
    }

    cargarCategorias(): void {
        this.categoriaService.mostrarCategorias().subscribe(
            (categorias) => this.listaCategorias = categorias
        );
    }

    delete(categoria: Categoria): void{
        Swal.fire({
            title: "Estas seguro?",
            text: "Se perdera la categoria para siempre",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borralo"
        }).then((result) => {
            if (result.isConfirmed) {
                this.categoriaService
                    .eliminarCategoria(categoria.idCategoria)
                    .subscribe(
                        (response) => this.categoriaService
                            .mostrarCategorias()
                            .subscribe(
                                (lasCategorias) => (this.listaCategorias = lasCategorias)
                            )
                    )

                Swal.fire({
                    title: "Eliminado!",
                    text: "El registro se elimino satisfactoriamente",
                    icon: "success"
                });
            }
        });
    }
}
