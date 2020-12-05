import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeReceitaComponent } from './lista-de-receita.component';

describe('ListaDeReceitaComponent', () => {
  let component: ListaDeReceitaComponent;
  let fixture: ComponentFixture<ListaDeReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
