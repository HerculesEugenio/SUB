import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaDeReceitaComponent } from './lista-de-receita/lista-de-receita.component';
import { CadastroDeReceitaComponent } from './cadastro-de-receita/cadastro-de-receita.component';
import { ReceitasService } from './receitas.service';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesDaReceitaComponent } from './detalhes-da-receita/detalhes-da-receita.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaDeReceitaComponent,
    CadastroDeReceitaComponent,
    DetalhesDaReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReceitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
