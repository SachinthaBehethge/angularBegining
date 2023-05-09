import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();

  constructor() {}
  ngOnInit() {}
  title = 'First-Angular';

  save() {
    alert(this.email.value);
    alert(this.password.value);
  }
}
