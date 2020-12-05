import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeReceitaComponent } from './cadastro-de-receita.component';

describe('CadastroDeReceitaComponent', () => {
  let component: CadastroDeReceitaComponent;
  let fixture: ComponentFixture<CadastroDeReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
