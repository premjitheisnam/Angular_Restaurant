import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  pic1: string = 'assets/images/users.png';

  addResto: FormGroup;

  constructor(private resto: RestoService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addResto = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(6), Validators.pattern('[a-zA-z ]*')]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required, Validators.pattern('[a-zA-z ]*')]],
    });
  }
  //function to work as a property in the form for invalid or touched//
  get name(){
    return this.addResto.get('name')
  }
  get email(){
    return this.addResto.get('email')
  }
  get address(){
    return this.addResto.get('address')
  }
  //api call for create/post/in the form  (saveRestro from resto.service file)//
  collectResto() {
    //console.log(this.addResto.value)
    this.resto.saveResto(this.addResto.value);
    // for reseting form
    this.addResto.reset({});
  }
}
