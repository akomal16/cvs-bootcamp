import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent {
  title =  'Java Topics';
  javaPlan = [
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
