import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBusquedaComponent } from './components/heroe-busqueda/heroe-busqueda.component';


const routes: Routes = [
  { path: '', component: HeroesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:slug', component: HeroeBusquedaComponent },
    {path: '**', component: HeroesComponent}

];


export const APP_ROUTING = RouterModule.forRoot(routes);

