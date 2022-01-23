import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';

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
  }
]
