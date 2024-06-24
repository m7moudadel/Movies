import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviService } from 'src/app/core/services/movi.service';
import { People } from 'src/app/core/interface/people';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
    constructor(private _MoviService:MoviService){}
    peopleData:People[]=[]
    ngOnInit(): void {
this._MoviService.getPeople().subscribe({
  next:(response)=>{
       this.peopleData =response.results

  }
})

    }
}
