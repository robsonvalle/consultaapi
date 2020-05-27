import { RouterModule, Routes } from '@angular/router'
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LancamentoDetalheComponent } from './lancamento-detalhe/lancamento-detalhe.component';
import { LancamentoNovoComponent } from './lancamento-novo/lancamento-novo.component';
import { LacamentoEditarComponent } from './lacamento-editar/lacamento-editar.component';
import { LacamentoResumoComponent } from './lacamento-resumo/lacamento-resumo.component';


const routes: Routes = [
    {
      path: 'lancamentos',
      component: LancamentosComponent,
      data: { title: 'Lista de Lancamentos' }
    },
    {
      path: 'lancamento-detalhe/:numpedido',
      component: LancamentoDetalheComponent,
      data: { title: 'Detalhe do Lancamento' }
    },
    {
      path: 'lancamento-novo',
      component: LancamentoNovoComponent,
      data: { title: 'Adicionar Lancamento' }
    },
    {
      path: 'lancamento-resumo',
      component: LacamentoResumoComponent,
      data: { title: 'Resulmo do Lancamento' }
    },
    {
      path: 'lancamento-editar/:id',
      component: LacamentoEditarComponent,
      data: { title: 'Editar o Lancamento' }
    },
    { path: '',
      redirectTo: '/Lancamentos',
      pathMatch: 'full'
    }
  ];
  export const AppRoutingModule = RouterModule.forRoot(routes);
