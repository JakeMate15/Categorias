import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import Swal from 'sweetalert2';
import { CategoriaService } from '../services/categoria.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-categoriasform',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './categoriasform.component.html',
    styleUrls: ['./categoriasform.component.css']
})
export class CategoriasformComponent implements OnInit {
    titulo: string = 'Datos de la Categoria';
    categoria: Categoria = new Categoria();

    constructor(
        private categoriaService: CategoriaService,
        private router: Router,
        private rutaActiva: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.mostrarCategoria();
    }

    mostrarCategoria(): void {
        this.rutaActiva.params.subscribe((parametro) => {
            let id = parametro['id'];
            if (id) {
                this.categoriaService
                    .mostrarCategoria(id)
                    .subscribe((laCategoria) => (this.categoria = laCategoria));
            }
        });
    }

    actualizarCategoria(): void {
        this.categoriaService.actualizarCategoria(this.categoria).subscribe(() => {
            Swal.fire('Actualizado', 'La categoría ha sido actualizada', 'success');
            this.router.navigate(['/categorias']);
        });
    }

    registrarCategoria(): void {
        if (this.categoria.descripcionCategorias.length < 5 || this.categoria.descripcionCategorias.length > 50) {
            Swal.fire('Error', 'La descripción debe tener entre 5 y 50 caracteres', 'error');
            return;
        }
        this.categoriaService.crearCategoria(this.categoria).subscribe(() => {
            Swal.fire('Registrado', 'La categoría ha sido registrada', 'success');
            this.router.navigate(['/categorias']);
        }, error => {
            Swal.fire('Error', 'Ocurrió un error al registrar la categoría', 'error');
            console.error('Error al registrar la categoría', error);
        });
    }
    
}
