import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public phone = '51943853382';
  public title = "Hola, vengo de gribo web estoy interesado en un servicio"

  constructor() { }

  ngOnInit(): void {
  }

}
