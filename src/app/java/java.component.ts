import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent {

  javaPlan = [
    {
      status: ['Not Started', 'In Progress', 'Done'],
      javaSkill: 'Angular',
      link: '/angular'
    },
    {
      status: 'Not Started',
      javaSkill: 'Java',
      link: '/java',
    },
    {
      status: 'Not Started',
      javaSkill: 'HTML',
      link: '/html',
    },
    {
      status: 'Not Started',
      javaSkill: 'CSS',
      link: '/css',
    },
    {
      status: 'Not Started',
      javaSkill: 'JavaScript',
      link: '/javascript',
    },

  ];
}
