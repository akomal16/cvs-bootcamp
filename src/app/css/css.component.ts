import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {

  constructor(private backRouter: Router, private  homeRouter: Router, ) {

  }

  title =  'CSS Topics';
  cssPlan = [
    {
      cssSkill: 'Syntax',
      status: 'Not Started',
    },
    {
      cssSkill: 'Selectors',
      status: 'Done',
    },
    {
      cssSkill: 'Colors',
      status: 'Done',
    },
    {
      cssSkill: 'Backgrounds',
      status: 'Done',
    },
    {
      cssSkill: 'Borders',
      status: 'Done',
    },
    {
      cssSkill: 'Margins',
      status: 'Done',
    },
    {
      cssSkill: 'Padding',
      status: 'Done',
    },
    {
      cssSkill: 'Box Model',
      status: 'Not Started',
    },
    {
      cssSkill: 'Transform',
      status: 'In Progress',
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
