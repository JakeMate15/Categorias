import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
    titulo: string = 'Gestión de Productos';

    listaCategorias: Categoria[] = [
        {
            "idCategoria": 1,
            "descripcionCategorias": "Descripción de ejemplo",
            "nombreCategoria": "Nombre de categoría de ejemplo"
        },
        {
            "idCategoria": 2,
            "descripcionCategorias": "Celulares bonitos",
            "nombreCategoria": "Tablets"
        },
    ];

    delete(): void{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
}
