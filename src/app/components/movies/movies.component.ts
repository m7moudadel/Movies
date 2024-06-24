import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviService } from 'src/app/core/services/movi.service';
import { Movies } from 'src/app/core/interface/movies';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
    constructor(private _MoviService:MoviService){}

    moviesData:Movies[]=[]
   ngOnInit(): void {
    this._MoviService.getAllMovi().subscribe({
      next:(response)=> {
         this.moviesData=response.results
      },
    })
   }
}
