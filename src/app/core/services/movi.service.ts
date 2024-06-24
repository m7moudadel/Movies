import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviService {

  constructor(private _HttpClient:HttpClient) { }
  myHeadrer:any={

      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDJiZWU5MGM3MDFiMDgyOWQzNjQ2OWEyN2Q5ZjcwMCIsInN1YiI6IjY2NmMyNWJjMDI1ZGFjZDIxZTJlODdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8JkwoXfTWB2ua5KLUXFa_LVUvo_gXOaKf9p4OwutgU'

  }
  getAllMovi():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US` ,{
      headers:this.myHeadrer
    })
  }

  getMovis():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US` , {
      headers:this.myHeadrer
    })
  }

  getPeople():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/day?language=en-US' , {
      headers:this.myHeadrer
    })
    }
    getTv():Observable<any>{
    return   this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US' , {
      headers:this.myHeadrer
    })
    }
}
