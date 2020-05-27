import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Resumo } from 'src/model/resumo';

@Component({
  selector: 'app-lancamento-detalhe',
  templateUrl: './lancamento-detalhe.component.html',
  styleUrls: ['./lancamento-detalhe.component.css']
})
export class LancamentoDetalheComponent implements OnInit {

  displayedColumns: string[] = [ "valor", "mes" ];
  dataSource: Resumo[];

  constructor(private _api: ApiService) { }

  ngOnInit() {

    this._api.getMes()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
    
  }

}
