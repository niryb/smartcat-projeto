import { Component } from '@angular/core';
import {Tarefa} from '../../shared/model/tarefa';
import { TAREFAS } from '../../shared/model/TAREFAS';

@Component({
    selector: 'app-quadro-card',
    standalone: false,

    templateUrl: './quadro-card.component.html',
    styleUrl: './quadro-card.component.css'
})
export class QuadroCardComponent {
    TAREFAS = TAREFAS;
    tarefaCadastro: Tarefa;
    constructor() {
        this.tarefaCadastro = new Tarefa();
    }

    cadastrar(){
        this.TAREFAS.push(this.tarefaCadastro);
        this.tarefaCadastro = new Tarefa();
    }
}
