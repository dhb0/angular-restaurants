import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.scss'],
})
export class UpdateRestoComponent implements OnInit {
  constructor(private resto: RestoService, private actRoute: ActivatedRoute) {}

  restaurantId: any;
  alert: any = { type: '', text: '' };

  changeResto = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {
    this.resto
      .getSingleRestaurant(this.actRoute.snapshot.params.id)
      .subscribe((result: any) => {
        console.log(result);
        this.changeResto = new FormGroup({
          name: new FormControl(result['name']),
          adress: new FormControl(result['adress']),
          email: new FormControl(result['email']),
        });
      });
  }

  closeAlert(){
    this.alert = { type: '', text: '' };
  }

  updateResto() {
    this.resto
      .updateRestaurant(
        this.actRoute.snapshot.params.id,
        this.changeResto.value
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.alert = { type: 'success', text: 'Updated' };
        },
        (err) => (this.alert = { type: 'danger', text: 'Failed' })
      );
  }
}
