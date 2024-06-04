import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActividadesComponent } from './actividades/actividades.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'actividades', component:ActividadesComponent}
];
