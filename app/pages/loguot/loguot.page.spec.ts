import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoguotPage } from './loguot.page';

describe('LoguotPage', () => {
  let component: LoguotPage;
  let fixture: ComponentFixture<LoguotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoguotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
