import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifJuegoPage } from './modif-juego.page';

describe('ModifJuegoPage', () => {
  let component: ModifJuegoPage;
  let fixture: ComponentFixture<ModifJuegoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
