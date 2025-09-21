import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusMedicamentosPage } from './meus-medicamentos.page';

describe('MeusMedicamentosPage', () => {
  let component: MeusMedicamentosPage;
  let fixture: ComponentFixture<MeusMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
