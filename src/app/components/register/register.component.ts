import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormControl, FormControlOptions, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { authService } from 'src/app/core/services/register.service';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule ,
    FormsModule,
    MatFormFieldModule,
     ReactiveFormsModule ,

    ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
   constructor(  private _authService:authService ,private _Router:Router){}

 Msg:string=''

   registerForm:FormGroup=new FormGroup({
    name:new FormControl('' , [Validators.minLength(3) , Validators.maxLength(10) ,Validators.required]),
    email:new FormControl('' , [Validators.email , Validators.required]),
  password:new FormControl('' , [Validators.pattern(/^\w{6,}$/) , Validators.required]),
    rePassword:new FormControl(''),
    phone:new FormControl('' , [ Validators.required ,Validators.pattern((/^01[0125][0-9]{8}$/))])
   } ,{validators:[this.confiremPass]} as FormControlOptions)

   handleForm():void{
    const userData = this.registerForm.value
      this._authService.getUserData(userData).subscribe(({
        next:(response)=> {
            this._Router.navigate(['/login'])
           this.Msg =response.message
        },error:(err)=>{
               this.Msg =err.error.message
        }
      }))
   }

   confiremPass(group:FormGroup):void{
    const passowrd = group.get('password')
    const rePassword = group.get('rePassword')
    if (rePassword?.value =='') {
        rePassword.setErrors({required:true})
    }else if(rePassword?.value !== passowrd?.value){
      rePassword?.setErrors({missmatch:true})
    }
   }
}
