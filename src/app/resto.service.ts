import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }
  //getApiCall//
  getList(){
  return this.http.get(environment.url);
  }
  //save/post/create Api call request & "data" will get from the form//
  saveResto(data){
    //console.log("service", data)
 return this.http.post(environment.url, data).subscribe((result) =>{
   console.log("data is submitted", result)
 })
  }
  //delete api call request//
  deleteResto(id){
    return this.http.delete(`${environment.url}/${id}`);
  }
  // api call to get the particular id in the update form//
  getCurrentResto(id){
    return this.http.get(`${environment.url}/${id}`);
  }
  //api call to update resto with particular id(here i'm taking two parameter "id,data")
  updateResto(id,data){
    return this.http.put(`${environment.url}/${id}`,data);
  }
}
