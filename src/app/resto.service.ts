import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url="http://localhost:3000/restaurants"
  rootUrl="http://localhost:3000"

  constructor(private http: HttpClient) { 
    
  }

  getRestaurantList(){
    return this.http.get(this.url)
  }

  getSingleRestaurant(id:Number){
    return this.http.get(`${this.url}/${id}`)
  }

  saveRestaurant(data:Object){
    return this.http.post(this.url, data)
  }

  deleteRestaurant(id:Number){
    return this.http.delete(`${this.url}/${id}`)
  }

  updateRestaurant(id:Number, data:any){
    return this.http.put(`${this.url}/${id}`, data)
  }

  registerUser(data:any){
    return this.http.post(`${this.rootUrl}/users`, data)
  }
}
