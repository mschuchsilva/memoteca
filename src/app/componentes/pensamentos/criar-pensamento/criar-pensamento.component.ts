import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {
  cancelar() {
    throw new Error('Method not implemented.');
  }
  criarPensamento() {
    throw new Error('Method not implemented.');
  }
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };
}
