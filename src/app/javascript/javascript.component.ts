import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})

export class JavascriptComponent implements OnInit {

  constructor(private backRouter: Router, private  homeRouter: Router, ) {

  }

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

  ngOnInit() {

  }

  goBack() {
    this.backRouter.navigate(['/courses']);
  }
  goHome() {
    this.homeRouter.navigate(['/home']);
  }
}

