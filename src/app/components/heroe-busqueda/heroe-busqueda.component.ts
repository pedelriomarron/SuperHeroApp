import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-busqueda',
  templateUrl: './heroe-busqueda.component.html',
  styleUrls: ['./heroe-busqueda.component.css']
})
export class HeroeBusquedaComponent implements OnInit {

    heroes: any = [];
    busqueda:string= '';
  
    constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.slug);
      this.busqueda=params.slug;
      this.heroes = _heroesService.buscarHeroes(params.slug);
    })
   }


  ngOnInit() {
    console.log(this.heroes);
  }

  

}
