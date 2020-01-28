import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../services/course-service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit, OnDestroy {
  constructor(private courseService: CourseService) {
  }

  title = 'HTML Topics';
  htmlPlan = [];

  ngOnInit(): void {
    console.log('This is on html component initialization');
    // This is calling getJavaData() from the CourseService
    this.htmlPlan = this.courseService.getHtmlData();
    // this.courseService.getHtmlData();
    alert('Hello from HTML component');
    console.log(this.htmlPlan, 'This is our htmlPlan data');
  }
  ngOnDestroy() {
    console.log('This is on HTML component removal');
  }
}
