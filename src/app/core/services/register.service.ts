import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor(private _HttpClient:HttpClient) { }

  baserUr:string ='https://ecommerce.routemisr.com/api/v1/auth/';
  getUserData(data:any):Observable<any>{
  return this._HttpClient.post(this.baserUr+ 'signup' , data )
}

loginUser(data:any):Observable<any>{
 return  this._HttpClient.post(this.baserUr+`signin` , data)
}
}

