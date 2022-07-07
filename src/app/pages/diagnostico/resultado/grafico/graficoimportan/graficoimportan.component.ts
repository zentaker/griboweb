import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficoimportan',
  templateUrl: './graficoimportan.component.html',
  styleUrls: ['./graficoimportan.component.css']
})
export class GraficoimportanComponent{
  results: any[]=[

    {
      "name": "Muy importante",
      "value": 20
    },
    {
      "name": "Importante",
      "value": 10
    },
    {
      "name": "inmaterial",
      "value": 40
    },
    {
      "name": "irrelevante",
      "value": 60
    }
  ];

  colorScheme = 'flame';

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Area';
  showYAxisLabel = true;
  yAxisLabel = 'Puntuacion';



  constructor() {
  }

  onSelect(event: any) {
    console.log(event);
  }


}
