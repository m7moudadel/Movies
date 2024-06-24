import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterOutlet } from '@angular/router';
import { NavComponent } from 'src/app/components/nav-blank/nav.component';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule , NavComponent ,RouterOutlet ],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {

}
