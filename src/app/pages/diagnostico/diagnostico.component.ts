import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoComponent implements OnInit {
  public phone = '51943853382';
  public title = "Hola, vengo de gribo web estoy interesado en un servicio"
  constructor() { }

  ngOnInit(): void {
  }

}
