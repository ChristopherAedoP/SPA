import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, IHeroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: IHeroe;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getheroe(params['id']);
    });
  }
}
