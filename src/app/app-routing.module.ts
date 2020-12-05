import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDeReceitaComponent } from './cadastro-de-receita/cadastro-de-receita.component';
import { DetalhesDaReceitaComponent } from './detalhes-da-receita/detalhes-da-receita.component';
import { ListaDeReceitaComponent } from './lista-de-receita/lista-de-receita.component';

const routes: Routes = [
  {path: '', component: ListaDeReceitaComponent},
  {path: 'cadastro', component: CadastroDeReceitaComponent},
  {path: 'detalhes/:id', component: DetalhesDaReceitaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
