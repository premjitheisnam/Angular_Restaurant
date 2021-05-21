import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(12)]],
      address: ['',[Validators.required, Validators.pattern('[a-zA-z ]*')]],
      password: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(10)]]
    })
  }
 //function to work as a property in the form for invalid or touched//
 get email(){
  return this.registerForm.get('email')
}
get mobile(){
  return this.registerForm.get('mobile')
}
get address(){
  return this.registerForm.get('address')
}
get password(){
  return this.registerForm.get('password')
}

//submit
onRegister(){
  console.log(this.registerForm.value)
}
}
