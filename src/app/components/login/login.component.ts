import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { authService } from 'src/app/core/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule  ,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _authService:authService , private _Router:Router){}
  MsgSuss:string=''
  MsgError:string=''
  myToken:string=''
loginForm:FormGroup =new FormGroup({
  email:new FormControl([''] , [Validators.required , Validators.email]),
  password: new FormControl([''], [Validators.required , Validators.pattern(/^\w{6,}$/)])
})

handleForm():void{
       const dataUser=this.loginForm.value
     this._authService.loginUser(dataUser).subscribe({
      next:(response)=> {
        this.MsgSuss==response.message
        this.myToken=response.token
          if (response.message=='success') {
                  this._Router.navigate(['/home'])
                  localStorage.setItem('myToken' ,this.myToken)
          }
      },error:(err)=> {
         this.MsgError=err.error.errors.msg
      },
     })
}
}
