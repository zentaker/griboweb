import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficotipo',
  templateUrl: './graficotipo.component.html',
  styleUrls: ['./graficotipo.component.css']
})
export class GraficotipoComponent  {

  results: any[]= [
    {
      "name": "Corto Plazo",
      "series": [
        {
          "name": "Estrategia",
          "value": 34
        },
        {
          "name": "Finanzas",
          "value": 50
        },
        {
          "name": "Marketing",
          "value": 70
        },
        {
          "name": "Operaciones",
          "value": 12
        },
        {
          "name": "Gestion de personas",
          "value": 34
        }
      ]
    },

    {
      "name": "Mediano plazo",
      "series": [
        {
          "name": "Estrategia",
          "value": 34
        },
        {
          "name": "Finanzas",
          "value": 67
        },
        {
          "name": "Marketing",
          "value": 87
        },
        {
          "name": "Operaciones",
          "value": 45
        },
        {
          "name": "Gestion de personas",
          "value": 67
        }
      ]
    },

    {
      "name": "Largo plazo",
      "series": [
        {
          "name": "Estrategia",
          "value": 43
        },
        {
          "name": "Finanzas",
          "value": 45
        },
        {
          "name": "Marketing",
          "value": 32
        },
        {
          "name": "Operaciones",
          "value": 45
        },
        {
          "name": "Gestion de personas",
          "value": 76
        }
      ]
    }

  ];
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Periodo';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Puntuacion';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {

  }

 onSelect(event:any): any {
    console.log('Item clicked', JSON.parse(JSON.stringify(event)));
  }

  onActivate(event:any): any {
    console.log('Activate', JSON.parse(JSON.stringify(event)));
  }

  onDeactivate(event:any): any {
    console.log('Deactivate', JSON.parse(JSON.stringify(event)));
  }

}
