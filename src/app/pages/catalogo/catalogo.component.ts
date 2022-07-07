import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/service/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  paquete: any[]= [];
  filtro: any[] = [];
  categoria: any[] = [];
  cargando = false;
  public phone = '51943853382';
  public title = "Hola, vengo de gribo web estoy interesado en un servicio"

  constructor(private _catalogoService: CatalogoService) { }


  //cuando la pagina ya esta cargada
  ngOnInit(): void {
    this.paquete = this._catalogoService.getPaquetes();
    this.filtro = this.paquete;
  }

  //filtro por categorias
  catGo(termino:string) {
    let paqueteArr: any[]=[];
    termino = termino;
    console.log(termino);




    for (let i =0; i< this.paquete.length; i++) {
      let paque = this.paquete[i];
      let categoria = paque.categoria;

      for (let i = 0; i < categoria.length; i++) {
        console.log(categoria)
        if (categoria.indexOf(termino) >=0){
          paque.idx = i;

          if(paque.idx == 0 ) {
            paqueteArr.push(paque);
            this.filtro = paqueteArr;
          }
        }
      }
    }


    console.log(paqueteArr);
  }

}
