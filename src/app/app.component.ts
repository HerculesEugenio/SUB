import { Component } from '@angular/core';
import { ReceitasService } from './receitas.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SUB';
  constructor(private receitasService: ReceitasService){
    this.receitasService.all().subscribe(
      (dados) => { return dados
      },
      () => alert(console.error())
    )
  }
}
