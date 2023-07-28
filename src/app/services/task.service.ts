import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  private url = "http://localhost:5256/api/ToDo/"

  getDetails(){
    return this.http.get(this.url + "GetToDoTaskList");
  }
  AddDetails(data:any){
    return this.http.post(this.url + "AddToDoTaskList",data);
  }
  DeleteDetails(id:any) {
    return this.http.delete(this.url + "DeleteTask/" + id);
  }
  UpdateDetails(data:any) {
    return this.http.put(this.url + "UpdateTask",data);
  }
}
