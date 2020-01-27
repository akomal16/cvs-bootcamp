import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  title =  'Course Title';

  alertMe() {
    alert('Hello, I am from the service');
  }

  getJavaData() {

    // return [
    //   'Java Syntax', 'OOP', 'Exception Handling'
    // ];

      return [
        {
          javaSkill: 'Java Syntax',
          status: 'Done',
        },
        {
          javaSkill: 'OOP',
          status: 'In Progress',
        },
        {
          javaSkill: 'Exception Handling',
          status: 'Not Started',
        },
        {
          javaSkill: 'Multi Threading',
          status: 'In Progress',
        },
        {
          javaSkill: 'Collections',
          status: 'In Progress',
        },
        {
          javaSkill: 'Java IO',
          status: 'Not Started',
        },
      ];
     }

    getHtmlData() {
          return [
            {
              htmlSkill: 'HTML 5',
              status: 'Done',
            },
            {
              htmlSkill: 'HTML Elements',
              status: 'Done',
            },
            {
              htmlSkill: 'DOM',
              status: 'Not Started',
            },
            {
              htmlSkill: 'Form',
              status: 'Done',
            },
            {
              htmlSkill: 'Styles',
              status: 'Done',
            },
            {
              htmlSkill: 'Events',
              status: 'Not Started',
            },
            {
              htmlSkill: 'SVG',
              status: 'In Progress',
            },
          ];
    }
}
