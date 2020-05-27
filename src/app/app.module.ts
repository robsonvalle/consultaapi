import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LancamentoDetalheComponent } from './lancamento-detalhe/lancamento-detalhe.component';
import { LancamentoNovoComponent } from './lancamento-novo/lancamento-novo.component';
import { LacamentoEditarComponent } from './lacamento-editar/lacamento-editar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { LacamentoResumoComponent } from './lacamento-resumo/lacamento-resumo.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    LancamentoDetalheComponent,
    LancamentoNovoComponent,
    LacamentoEditarComponent,
    MenuComponent,
    LacamentoResumoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    LayoutModule,
    NgxPaginationModule,
    OrderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
