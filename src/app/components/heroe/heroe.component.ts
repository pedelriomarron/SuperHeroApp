import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.heroe = _heroesService.getHeroe(params.id);
    })
   }

  ngOnInit() {
  }

  saberCasa(casa): string{
    
    if(casa === 'Marvel') {
      return 'assets/img/marvel-logo.png';
    }
    else if(casa === 'DC') {
      return 'assets/img/dc-logo.jpg';
    }  
  }
}
