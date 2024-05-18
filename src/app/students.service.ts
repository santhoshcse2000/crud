import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url="http://localhost:3000/students";

  constructor(private http:HttpClient) { }

  GetAllStudent(){
    return this.http.get<any>(this.url);
  }
  AddNewStudents(data:any){
    return this.http.post<any>(this.url,data)

  }
  remove(data:number){
    console.log('Urlvalue is',this.url);
    console.log('data value is',data);
    return this.http.delete<any>(`${this.url}/${data}`);

  }
  GetUpdate(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  UpdateMethod(id:any,Data:any){
    return this.http.put(`${this.url}/${id}`,Data);
  }


}
