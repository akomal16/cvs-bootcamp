import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent {
  title = 'HTML Topics';

  htmlPlan = [
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
