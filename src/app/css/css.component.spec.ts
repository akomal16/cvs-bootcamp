import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComponent } from './css.component';

xdescribe('CssComponent', () => {
  let component: CssComponent;
  let fixture: ComponentFixture<CssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
