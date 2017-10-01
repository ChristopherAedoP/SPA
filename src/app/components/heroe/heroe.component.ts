import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService,iHeroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe:iHeroe;

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
              ) {

    this._activatedRoute.params.subscribe(params=> {
      console.log(params['id'])
      this.heroe = this._heroesService.getheroe(params['id']);
      console.log(this.heroe)
    })


  }



}
