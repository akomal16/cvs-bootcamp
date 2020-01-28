import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule,
                MatSelectModule,
                MatFormFieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML Homepage testing', () => {

    it('should have correct class',  () => {
      const bootClass = fixture.debugElement.query(By.css('h1'));
      console.log(bootClass.attributes.class, 'log element class');
      expect(bootClass.attributes.class).toBe('bootcamp-title');
    });

    it('should full create title', () => {
      const debugEle = fixture.debugElement.query(By.css('h1'));
      console.log(debugEle.nativeElement.innerText, 'logging elements text');
      expect(debugEle.nativeElement.innerText).toBe('Welcome to CVS Bootcamp!');
    });

    it('should have correct header',  () => {
      console.log(component.header, 'log header property');
      expect(component.header).toBe('Choose Option');
    });

    it('should render 3 buttons', () => {
      const buttonDiv = fixture.debugElement.query(By.css('.home-page-buttons'));
      const buttonCollection = buttonDiv.queryAll(By.css('button'));
      console.log(buttonCollection.length, ' array of buttons');
      expect(buttonCollection.length).toBe(3);
    });
  });

  describe('TypeScript logic testing', () => {
      it('should contain correct title',  () => {
        console.log(component.title, 'log typescript title property');
        expect(component.title).toBe('CVS Bootcamp');
      });
      it('should show courses', () => {
        console.log(component.coursesList, 'first');
        const courseSpy = spyOn(component, 'onCourses');
        const courseButton = fixture.debugElement.query(By.css('#courseButton'));
        expect(component.header).toBe('Choose Option');
        courseButton.nativeElement.click();
        fixture.detectChanges();
        console.log(component.coursesList, 'second');
        expect(courseSpy).toHaveBeenCalled();
        expect(component.coursesList).toBeTruthy();
        expect(component.header).toBe('Subject List');
        expect(component.title).toBe('my courses');
        // console.log(courseButton, 'log course button');
      });

    });
});
