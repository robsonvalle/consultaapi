import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Lancamento } from 'src/model/lancamento';

@Component({
  selector: 'app-lacamento-editar',
  templateUrl: './lacamento-editar.component.html',
  styleUrls: ['./lacamento-editar.component.css']
})
export class LacamentoEditarComponent implements OnInit {

  lancamentoForm: FormGroup;
  isLoadingResults = false;
  mySubscription: any;
  total = 0;
  displayedColumns: string[] = [ "nomecliente", "valor", "data","tipovenda", "acao" ];
  dataSource: Lancamento[];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });  
    
  }

  ngOnInit() {
  }

}
