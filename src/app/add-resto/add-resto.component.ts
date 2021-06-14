import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss'],
})
export class AddRestoComponent implements OnInit {
  constructor(private resto:RestoService, private router: Router, private titleService: Title) {}

  addResto = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
    email: new FormControl(''),
  });


  newResto(){
    this.resto.saveRestaurant(this.addResto.value).subscribe(result=> {
      console.log("result is " + result);
    this.alert={type:"success", text:"Your data has been saved"};
    this.addResto.reset({});
    setTimeout(() => {
      this.router.navigate(['/list'])
    }, 3000);

    //this.router.navigate(['/user', 5]) Router with params
  }, err=>this.alert={type:"danger", text:"Failed"});
  }

  closeAlert(){
    this.alert = { type: '', text: '' };
  }

  alert:any = {type:"", text:""}

  ngOnInit(): void {
    this.titleService.setTitle("Resto - Add Restaurant")
  }
}
