import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDaReceitaComponent } from './detalhes-da-receita.component';

describe('DetalhesDaReceitaComponent', () => {
  let component: DetalhesDaReceitaComponent;
  let fixture: ComponentFixture<DetalhesDaReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesDaReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
