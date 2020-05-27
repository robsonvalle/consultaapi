import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lancamento } from 'src/model/lancamento';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  displayedColumns: string[] = [ "nomecliente","numpedido", "valor", "data", "acao" ];
  dataSource: Lancamento[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getPedidos()
    .subscribe(res => {
      this.dataSource = res;
      // console.log(this.dataSource);
            this.filtrarPedidoAtual();
      //this.isLoadingResults = false;
    }, err => {
      console.log(err);
      //this.isLoadingResults = false;
    });
  }

  filtrarPedidoAtual() {
    const date = new Date().toLocaleDateString();
    let a = [];
    this.dataSource.filter(d => {
      let date1 = new Date(Date.parse(d.data.toString())).toLocaleDateString();
      // console.log(`Data convertida: ${date1}`);
     if(date1 === date)
      a.push(d.valor);
    });
    console.log(a);
    // console.log(`data do controler: ${date}`);
  }

  somaValor(){
    const date = new Date().toLocaleDateString();
    let soma  = [];

    this.dataSource.filter(d => {
      let date1 = new Date(Date.parse(d.data.toString())).toLocaleDateString();
      // console.log(`Data convertida: ${date1}`);
     if(date1 === date)
      soma.push(d.valor);

    });
    console.log(soma);

  }

}
