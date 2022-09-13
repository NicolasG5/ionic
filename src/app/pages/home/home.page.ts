import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  usuario : any;

  constructor(private router: Router,private activateRouter: ActivatedRoute) {}

  ngOnInit(){
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario
  }

}
