import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';

export const TarefaRoutes: Routes = [
  // DIRECIONA SE ACESSAR TAREFAS PARA TAREFAS LISTAR
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  // EXIBE O COMPONENTE DEFINIDO AO ACESSAR O PATH
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  // EXIBE O COMPONENTE DEFINIDO AO ACESSAR O PATH
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefasComponent
  }
]
