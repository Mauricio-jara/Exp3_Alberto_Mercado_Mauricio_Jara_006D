import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarJuegoPage } from './eliminar-juego.page';

describe('EliminarJuegoPage', () => {
  let component: EliminarJuegoPage;
  let fixture: ComponentFixture<EliminarJuegoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
