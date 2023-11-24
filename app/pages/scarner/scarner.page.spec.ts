import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScarnerPage } from './scarner.page';

describe('ScarnerPage', () => {
  let component: ScarnerPage;
  let fixture: ComponentFixture<ScarnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScarnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
