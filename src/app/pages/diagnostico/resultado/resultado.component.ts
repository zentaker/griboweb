import { Component, OnInit } from '@angular/core';
import { ResultadoService } from 'src/app/service/resultado.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{
  //mensaje: string;
  constructor( private data: ResultadoService){

  }
  ngOnInit(): void {
    this.data.curentMensaje.subscribe( mensaje => {
      console.log(mensaje)
    })


  }


}
