import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: IHeroe[] = [];
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    // console.log(this.termino)
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      // console.log(this.termino);
      if (this.termino) {
        this.heroes = this._heroesService.buscarHeroes(this.termino);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }
      // console.log(this.heroes)
    });
  }

  ngOnInit() {
    // console.log(this.heroes)
  }

  // verHeroe(idx: number) {
  //   // console.log(idx);
  //   this._router.navigate(['/heroe', idx]);
  // }
}
