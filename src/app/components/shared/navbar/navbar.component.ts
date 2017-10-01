import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './navbar.component.html',
  selector: 'app-navbar'
})
export class NavbarComponent implements OnInit {


  constructor( private _router:Router  ) { }

  ngOnInit() {
  }
  buscarHeroe(termino:string){
    console.log(termino)
    this._router.navigate(['/buscarheroes',termino]);
  }
}
