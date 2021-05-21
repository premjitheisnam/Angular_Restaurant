import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  pic1: string = 'assets/images/users.png';

  editResto: FormGroup;

  constructor(
    private router: ActivatedRoute,
     private resto: RestoService,
     private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editResto = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(6), Validators.pattern('[a-zA-z ]*')]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required, Validators.pattern('[a-zA-z ]*')]],
    });
    console.log(this.router.snapshot.params.id);

    //api call to get data for update with particular id from resto.service//
    this.resto
      .getCurrentResto(this.router.snapshot.params.id)
      .subscribe((result) => {
        //console.log("result",result);
        this.editResto =this.formBuilder.group({
          name: (result['name']),
          email: (result['email']),
          address:(result['address']),
        });
      });
  }
   //function to work as a property in the form for invalid or touched//
   get name(){
    return this.editResto.get('name')
  }
  get email(){
    return this.editResto.get('email')
  }
  get address(){
    return this.editResto.get('address')
  }
  // api call to update/submit the data of the id from resto.service//
  collection() {
    console.log(this.editResto.value);
    this.resto
      .updateResto(this.router.snapshot.params.id, this.editResto.value)
      .subscribe((result) => {
        console.log(result);
        this.editResto.reset({});
      });
  }
}
