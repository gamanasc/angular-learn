import { Injectable } from '@angular/core';
import { Tarefa } from '.';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * Lista todas as tarefas do localStorage
   * @returns Tarefa
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Armazena a nova tarefa no localStorage
   * @param Tarefa tarefa
   * @returns void
   */
  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Busca a tarefa com ID especificado no localStorage
   * @param number ID da tarefa
   * @returns Tarefa
   */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**
   * Atualiza o ID da tarefa no localStorage
   * @param Tarefa tarefa
   * @returns void
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Remove a tarefa do localStorage caso o ID seja igual ao parâmetro
   * @param number ID
   * @returns void
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Atualizar o status da tarefa no localStorage
   * @param number ID
   * @returns void
   */
  alterarStatus(id: number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id){
        objs[index].concluida = !obj.concluida
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
