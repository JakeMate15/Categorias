import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { CategoriasComponent } from './categorias/categorias.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'actividades', component:ActividadesComponent},
    { path: 'categorias', component:CategoriasComponent},
    { path: 'categoriasForm', component: CategoriasComponent },
    { path: 'categoriasForm/:', component: CategoriasComponent },
];
