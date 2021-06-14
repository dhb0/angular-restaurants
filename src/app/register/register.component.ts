import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  registerUser(){
    console.log(this.register.value)
    this.resto.registerUser(this.register.value).subscribe((result)=>{
      console.warn("result: ", result);
      this.alert={type:"success", text:"Registered succesfully"}
    },
    (err)=>this.alert={type:"danger", text:"failed"})
  }

  alert={
    type:"",
    text:""
  }

  closeAlert(){
    this.alert = {
      type:"",
      text:""
    }
  }

  constructor(private resto:RestoService) { }

  ngOnInit(): void {

  }

}
