import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';


 export enum direction {
  North, South,East,West
} 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-app';

  name: string[] = [];

  names: readonly string[] = ["hello readonly","new life"]

  turple: [number, string, string]

  //index signature
  indexsign : {[index : string]: number } = {};

  AllDirectiom = direction

  directionkeys: string[] =[];

  constructor(){
  this.name.push("hello");
  this.name.push("new data")
  this.turple = [1, '2','3'];
  this.indexsign["harpal"] = 29;
  this.indexsign["robi"] = 26;
  this.indexsign["manroop"] = 1.8;

  this.directionkeys = Object.keys(direction).filter(key => isNaN(Number(key)));
  }

}
