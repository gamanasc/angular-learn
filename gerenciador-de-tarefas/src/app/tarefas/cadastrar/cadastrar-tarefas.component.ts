import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  // ViewChild faz a validação do formulário
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  // Inicia o tarefa service e o router
  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  /**
   * Método para cadastrar uma nova tarefa no localStorage, caso o formulário seja validado
   * @returns void
   */
  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.tarefaService.cadastrar(this.tarefa);
  	  this.router.navigate(["/tarefas"]);
    }
  }

}
