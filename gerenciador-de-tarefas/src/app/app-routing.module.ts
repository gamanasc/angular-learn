import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { TarefaRoutes } from "./tarefas";

export const routes: Routes = [
  // DIRECIONA PARA TAREFAS LISTAS SE A URL ESTIVER VAZIA
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  // CONCATENA O ARRAY TAREFA ROUTES COM O ROUTES
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
