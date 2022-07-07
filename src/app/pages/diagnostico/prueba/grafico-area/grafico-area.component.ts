import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-area',
  templateUrl: './grafico-area.component.html',
  styleUrls: ['./grafico-area.component.css']
})
export class GraficoAreaComponent {
  @Input() notaq:any = [];
  @Input() prueba1:any = [];

  estrategia!: Number;
  finanzas!: Number;
  marketing!: Number;







  colorScheme = 'flame';


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
    console.log(this.notaq)

  }


  onSelect(event: any) {
    console.log(event);
  }


}
