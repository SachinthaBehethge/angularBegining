import { Component, OnInit } from '@angular/core';

export interface Employee {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  employees: Employee[] = [
    { id: '1', name: 'Sahan', email: 'sahan@gmail.com', password: '1234' },
    { id: '2', name: 'Kasun', email: 'kasun@gmail.com', password: '1235' },
    { id: '3', name: 'Sadun', email: 'sadun@gmail.com', password: '1236' },
  ];

  constructor() {}

  ngOnInit() {}

  show() {
    alert('You clicked the danger button');
  }
}
