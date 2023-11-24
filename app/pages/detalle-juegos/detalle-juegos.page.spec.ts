import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleJuegosPage } from './detalle-juegos.page';

describe('DetalleJuegosPage', () => {
  let component: DetalleJuegosPage;
  let fixture: ComponentFixture<DetalleJuegosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
