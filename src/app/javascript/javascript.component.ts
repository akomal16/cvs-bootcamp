import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent {

  title = 'JavaScript Topics';

  javaScriptPlan = [
    {
      javascriptSkill: 'JavaScript Basics',
      status: 'Done',
    },
    {
      javascriptSkill: 'Objects',
      status: 'In Progress',
    },
    {
      javascriptSkill: 'Array',
      status: 'In Progress',
    },
    {
      javascriptSkill: 'JavaScript DOM',
      status: 'Not Started',
    },
    {
      javascriptSkill: 'Form Validation JS Email Validation',
      status: 'Not Started',
    },
    {
      javascriptSkill: 'JavaScript Events',
      status: 'Not Started',
    },
    {
      javascriptSkill: 'JavaScript Advance',
      status: 'Not Started',
    },
  ];
}
