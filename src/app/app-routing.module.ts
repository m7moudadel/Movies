import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {path: '' ,  loadComponent:()=> import('./layouts/blank-layout/blank.component').then((m)=>m.BlankComponent),
     canActivate:[authGuardGuard] ,
      children:[

    {path: '' , redirectTo:'home' , pathMatch:'full'},
    {path: 'home' ,  loadComponent:()=> import('./components/home/home.component').then((m)=>m.HomeComponent)},
    {path: 'movies' ,  loadComponent:()=> import('./components/movies/movies.component').then((m)=>m.MoviesComponent)},
    {path: 'people' ,  loadComponent:()=> import('./components/people/people.component').then((m)=>m.PeopleComponent)},
    {path: 'tv' ,  loadComponent:()=> import('./components/tv/tv.component').then((m)=>m.TvComponent)},
  ]},


  {path:'' , loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent), children:[
  {path:"" , redirectTo:'login' , pathMatch:'full' },
    {path:'login', loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent)},
    {path:'register', loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
