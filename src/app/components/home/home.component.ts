import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MoviService } from '../../app/core/movi.service';
// import { AllMovi } from '../../app/core/all-movi';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MoviService } from 'src/app/core/services/movi.service';
import { AllMovi } from 'src/app/core/interface/all-movi';
import { NavComponent } from '../nav-blank/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,  NavComponent],
  templateUrl: '../home/home.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class HomeComponent   {
constructor(private _MoviService:MoviService ){}
moviData:AllMovi[] =[]
ngOnInit(): void {
  this._MoviService.getAllMovi().subscribe({
    next:(response)=> {
         this.moviData=response.results;

    },
  })}
}
