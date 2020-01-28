import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponent } from './angular.component';
import {RouterTestingModule} from "@angular/router/testing";

xdescribe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ AngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have class title header ', () => {
    const comp = fixture.debugElement.componentInstance;
    // const header = comp.nati
    // expect (comp)
  });
  fit(`should render correct title`, () => {
    const amar = fixture.debugElement.componentInstance;
    expect(amar.title).toEqual('Angular Topics');
  });
});
