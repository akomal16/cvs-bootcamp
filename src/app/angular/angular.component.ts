import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  constructor(private backRouter: Router, private  homeRouter: Router, ) {

  }

  title = 'Angular Topics';
  angularTopics = [
    {
      name: 'TypeScript',
      status: 'In Progress'
    },
    {
      name: 'Components',
      status: 'Done'
    },
    {
      name: 'Modules',
      status: 'Done'
    },
    {
      name: 'Directives',
      status: 'In Progress'
    },
    {
      name: 'Data Binding',
      status: 'Not Started'
    },
    {
      name: 'Router',
      status: 'Not Started'
    },
    {
      name: 'Life Cycles',
      status: 'Not Started'
    },
    {
      name: 'Observables',
      status: 'Not Started'
    },
    {
      name: 'Angular Material',
      status: 'Not Started'
    }
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
