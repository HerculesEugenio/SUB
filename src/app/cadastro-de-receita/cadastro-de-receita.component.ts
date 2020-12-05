import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasService } from '../receitas.service';
import { Observable } from 'rxjs';
import { Receita } from '../app.model';
@Component({
  selector: 'app-cadastro-de-receita',
  templateUrl: './cadastro-de-receita.component.html',
  styleUrls: ['./cadastro-de-receita.component.css']
})
export class CadastroDeReceitaComponent implements OnInit {
  editando = {
    id: -1,
    titulo: '',
    tipo: 'CM',
    ingredientes: '',
    modo_preparo: '',
    tempo_preparo: 0,
    rendimento: '',
    publica: false
  }

  constructor(private receitaService: ReceitasService, private router: Router, private route: ActivatedRoute) {
    this.receitaService.all();
  }
  limpar(){
    this.receitaService.in_edicao = false;
    this.editando.titulo = '';
    this.editando.tipo = 'CM';
    this.editando.ingredientes = '';
    this.editando.modo_preparo = '';
    this.editando.tempo_preparo = 0;
    this.editando.rendimento = '';
    this.editando.publica = false;
    this.receitaService.editando = null;
  }
  salvar(editando: Receita){
    this.receitaService.salve(editando).subscribe((dados) => {this.router.navigate([''])
    },
    erro => alert(erro));
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.receitaService.in_edicao === true){
      this.editando.id = this.receitaService.editando.id;
      this.editando.titulo = this.receitaService.editando.titulo;
      this.editando.tipo = this.receitaService.editando.tipo;
      this.editando.ingredientes = this.receitaService.editando.ingredientes;
      this.editando.modo_preparo = this.receitaService.editando.modo_preparo;
      this.editando.tempo_preparo = this.receitaService.editando.tempo_preparo;
      this.editando.rendimento = this.receitaService.editando.rendimento;
      this.editando.publica = this.receitaService.editando.publica;
    }
    else{
      this.limpar();
    }
    
  }
}
