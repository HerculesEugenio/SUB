import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasService } from '../receitas.service';
import { Observable } from 'rxjs';
import { Receita } from '../app.model';
@Component({
  selector: 'app-detalhes-da-receita',
  templateUrl: './detalhes-da-receita.component.html',
  styleUrls: ['./detalhes-da-receita.component.css']
})
export class DetalhesDaReceitaComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  tipo: string = 'CM';
  ingredientes:string = '';
  modo_preparo: string ='';
  tempo_preparo:number = 0;
  rendimento:string = '';
  publica:boolean = true;
  
  constructor(private receitaService: ReceitasService, private router: Router, private route: ActivatedRoute) {
    
  }

  Find_Receita(id:number){
    this.receitaService.find(id).subscribe((dado: Receita) => { 
      this.titulo = dado.titulo;
      this.tipo = dado.tipo;
      this.ingredientes = dado.ingredientes;
      this.modo_preparo = dado.modo_preparo;
      this.tempo_preparo = dado.tempo_preparo;
      this.rendimento = dado.rendimento;
      this.publica = dado.publica;
    },
    erro => alert(erro));
  }
  publish(){
    if(confirm('Deseja realmente tornar essa Receita pública?')){
      this.receitaService.publish(this.id).subscribe(()=> {console.log('Receita publica')}, erro => alert(erro))
    }
  }

  ngOnInit(): void {
    const id =  Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.Find_Receita(this.id);
  }
}
