import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviService } from 'src/app/core/services/movi.service';
import { TvData } from 'src/app/core/interface/tv-data';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
   constructor(private _MoviService:MoviService){}
dataTv:TvData[]=[]
   ngOnInit(): void {
     this._MoviService.getTv().subscribe({
      next:(response)=> {
           this.dataTv=response.results
      },
     })
   }
}
