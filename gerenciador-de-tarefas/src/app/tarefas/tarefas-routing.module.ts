import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

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
  },
  // EXIBE O COMPONENTE DEFINIDO AO ACESSAR O PATH
  // com parâmetro
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
]
