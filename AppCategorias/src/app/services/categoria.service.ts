import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    private urlEndpoint: string = 'http://localhost:8080/api/categorias';

    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient) {}

    mostrarCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.urlEndpoint);
    }

    mostrarCategoria(id: number): Observable<Categoria> {
        return this.http.get<Categoria>(`${this.urlEndpoint}/${id}`);
    }

    crearCategoria(categoria: Categoria): Observable<Categoria> {
        return this.http.post<Categoria>(this.urlEndpoint, categoria, {
            headers: this.httpHeaders
        });
    }

    eliminarCategoria(id: number): Observable<void> {
        return this.http.delete<void>(`${this.urlEndpoint}/${id}`, {
            headers: this.httpHeaders
        });
    }

    actualizarCategoria(categoria: Categoria): Observable<Categoria> {
        return this.http.put<Categoria>(`${this.urlEndpoint}/${categoria.idCategoria}`, categoria, {
            headers: this.httpHeaders
        });
    }
}
