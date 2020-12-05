import { Component, Input, OnInit } from '@angular/core';
import { ReceitasService } from '../receitas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Receita } from '../app.model';
@Component({
  selector: 'app-lista-de-receita',
  templateUrl: './lista-de-receita.component.html',
  styleUrls: ['./lista-de-receita.component.css']
})
export class ListaDeReceitaComponent implements OnInit {
  Receitas = null;
  
  constructor(private receitaService: ReceitasService, private router: Router, private route: ActivatedRoute){
    this.receitaService.all();
  }
  
  Update(){
    this.receitaService.all().subscribe((dados) => { this.Receitas = dados},
    erro => alert(erro));
  }
  edit(receita: Receita){
    this.receitaService.editando = receita;
    this.receitaService.in_edicao = true;
  }

  excluir(receita: Receita){
    if(receita.publica == false){
      if (confirm('Deseja realmente excluir essa Receita?')){
        this.receitaService.delete(receita).subscribe(() => this.Update(), erro => alert(erro))
      }
    }
    else{
      alert('Não é possivel excluir Receita Pública!')
    }
  }

  ngOnInit(): void {
    this.Update();
  }

}
