import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }

  listCollection= <any>[];

  ngOnInit(): void {
    this.resto.getRestaurantList().subscribe((result)=>{
      this.listCollection = result
    })
  }

  removeResto(id:number){
    this.resto.deleteRestaurant(id).subscribe(
      data => {
        console.log(data);
        this.listCollection = this.listCollection.filter((item: { id: number })=> item.id !== id)
      }
    )
  }

}
