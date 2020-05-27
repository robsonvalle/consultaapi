import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Lancamento } from 'src/model/lancamento';


@Component({
  selector: 'app-lancamento-novo',
  templateUrl: './lancamento-novo.component.html',
  styleUrls: ['./lancamento-novo.component.css'],
  
})

@Component({
  selector: 'app-lancamento-novo',
  templateUrl: './lancamento-novo.component.html',
  styleUrls: ['./lancamento-novo.component.css'],
  
})
export class LancamentoNovoComponent implements OnInit {
  
  key: string = 'data'; // Define um valor padrão, para quando inicializar o componente
    reverse: boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }


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
  
  addLancamento(form: NgForm) {
    this.isLoadingResults = false;
    this.api.addLancamento(form)
      .subscribe(res => {
          const id = res['numpedido'];
          this.isLoadingResults = true;
          this.ngOnInit();
          // this.router.navigate(['/lancamento-novo']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  ngOnInit() {
    this.lancamentoForm = this.formBuilder.group({
      'nomecliente' : ["consumidor", Validators.required],
      'valor' : [null, Validators.required],
      'data' : [new Date().getTime(), Validators.required],
      'soma' : [this.total, Validators.required],
      'tipovenda' :  ["dinheiro", Validators.required]
      
    });
    this.api.getPedidos()
    .subscribe(res => {
      this.dataSource = res;
      this.filtrarPedidoAtual();
    }, err => {
      console.log(err);
    });
    
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  
  date() {
    const now = new Date();
    var dataAtual: string;
    const ano = now.getFullYear();
    const mes = now.getMonth();
    const dia = now.getDay();
    return dataAtual = `${ano}-${mes}-${dia}`;
  }

  numero(){
    var now = new Date;
    var num: number ;
    return num = Math.floor(Math.random() * ( now.getMilliseconds() + 8000));
  }
  
  filtrarPedidoAtual() {
    const date = new Date().toLocaleDateString();
    let a = [];
    this.total = 0 ;
    this.dataSource.filter(d => {
    let date1 = new Date(Date.parse(d.data.toString())).toLocaleDateString();
     if(date1 === date){
      this.total += d.valor;   
       a.push(d);
      }
    });  
    console.log(this.total) ;
    this.dataSource = a;
    return this.total; 
  }

  
}
