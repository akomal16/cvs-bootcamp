import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // will work either way with object ot without type object
  // formData: object;  //todo ****objects  userName: and userLastName: will
  //  be red in .html

  formData;

  // TODO practice this property what kind of type and value!
  // formData1 = 'test';
  // formData2: boolean;
  // formData3: string;
  // formData4: FormGroup;
  // formData5: FormControl;
  //

  ngOnInit() {
    console.log(this.formData, 'Initial formData');
    this.loginForm = new FormGroup({
    name: new FormControl(''),
    lname: new FormControl('')
  });
  }
  goSubmit() {
    console.log(this.loginForm, 'whole login');
    console.log(this.loginForm.value, 'login value');
    console.log(this.loginForm.value.name, 'First login value');
    console.log(this.loginForm.get('lname').value, 'last login value');

    const submittedFormData = {
      userName: this.loginForm.get('name').value,
      userLastName: this.loginForm.get('lname').value
    };
    this.formData = submittedFormData;
  }
}
