import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
    titulo: string = 'Operaciones Basicas';
    n1: number = 0;
    n2: number = 0;
    res: number = 0;

    sumar(): void {
        this.res = this.n1 + this.n2;
    }

    resta(): void {
        this.res = this.n1 - this.n2;
    }

    multiplicacion(): void {
        this.res = this.n1 * this.n2;
    }

    division(): void {
        this.res = this.n1 / this.n2;
    }
}
