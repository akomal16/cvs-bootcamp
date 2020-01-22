import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent {

  htmlPlan = [
    {
      status: ['Not Started', 'In Progress', 'Done'],
      htmlSkill: 'Angular',
      link: '/angular'
    },
    {
      status: 'Not Started',
      htmlSkill: 'html',
      link: '/html',
    },
    {
      status: 'Not Started',
      htmlSkill: 'HTML',
      link: '/html',
    },
    {
      status: 'Not Started',
      htmlSkill: 'CSS',
      link: '/css',
    },
    {
      status: 'Not Started',
      htmlSkill: 'JavaScript',
      link: '/javascript',
    },

  ];

}
