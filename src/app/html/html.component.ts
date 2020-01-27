import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../services/course-service";

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit, OnDestroy {
  constructor(private courseService: CourseService) {
  }

  title = 'HTML Topics';

  htmlPlan = [
    // {
    //   htmlSkill: 'HTML 5',
    //   status: 'Done',
    // },
    // {
    //   htmlSkill: 'HTML Elements',
    //   status: 'Done',
    // },
    // {
    //   htmlSkill: 'DOM',
    //   status: 'Not Started',
    // },
    // {
    //   htmlSkill: 'Form',
    //   status: 'Done',
    // },
    // {
    //   htmlSkill: 'Styles',
    //   status: 'Done',
    // },
    // {
    //   htmlSkill: 'Events',
    //   status: 'Not Started',
    // },
    // {
    //   htmlSkill: 'SVG',
    //   status: 'In Progress',
    // },
  ];

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
