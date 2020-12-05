import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from './app.model';
@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  private API_URL = 'https://lpweb-receitas.herokuapp.com/api/receitas/';
  in_edicao: boolean = false;
  editando: Receita;
 
  constructor(private http: HttpClient){
  }

  all(){
    return this.http.get(this.API_URL);
  }
  salve(receita: Receita){
    if (receita.id != -1){
      return this.http.put(this.API_URL+ receita.id +'/', {titulo: receita.titulo, tipo: receita.tipo, 
        ingredientes: receita.ingredientes, modo_preparo: receita.modo_preparo,
        tempo_preparo: receita.tempo_preparo,
        rendimento: receita.rendimento, publica: receita.publica})
    }
    else{
      return this.http.post(this.API_URL, {titulo: receita.titulo, tipo: receita.tipo, 
        ingredientes: receita.ingredientes, modo_preparo: receita.modo_preparo,
        tempo_preparo: receita.tempo_preparo,
        rendimento: receita.rendimento, publica: receita.publica})
    }
  }
  delete(receita: Receita){
    return this.http.delete(this.API_URL + receita.id + '/');
  }
  
  publish(id:number){
    return this.http.patch(this.API_URL + id + '/', { publica: true });
  }

  find(id:number){
    return this.http.get(this.API_URL + id + '/');
  }
}
