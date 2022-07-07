import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CuestionarioService } from 'src/app/service/cuestionario.service';
import { ResultadoService } from 'src/app/service/resultado.service';



@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
//nota = {"estrategia":2, "finanzas":4, "marketing": 5};
nota: Number[] = [];
prueba:any[] = []



mostrar = false;
mostrar2 = true;


  public respuestasForm!: FormGroup;
  cuestionario: any[]=[];
  public arrRespuestas: any[]=[];

public result: string='';
prueba1: any;
prueba2: any;
estrategia: any;
finanzas: any;
marketing: any;





  constructor(private _cuestionarioService: CuestionarioService,
    private data: ResultadoService,

              private fb: FormBuilder) {
                console.log(this.result)

              }

//metodo get que devuelve la respuesta  de el form



ngOnInit(): void {
  this.cuestionario = this._cuestionarioService.getCuestionario();
  console.log(this.cuestionario);


  //creacion de formulario cuestionario
this.respuestasForm = this.fb.group({
  pregunta001: [''],
  pregunta002: [''],
  pregunta003: [''],
  pregunta004: [''],
  pregunta005: [''],
  pregunta006: [''],
  pregunta007: [''],
  pregunta008: [''],
  pregunta009: [''],
  pregunta010: [''],
  pregunta011: [''],






})

}






  sumarResultados() {
    console.log(this.respuestasForm.value);

    let prueba = Object.values(this.respuestasForm.value);
    //this.prueba1 =  Object.keys(this.respuestasForm.value);
    this.prueba1 =  this.respuestasForm.value;
this.prueba2= Object.values(this.prueba1) ;
console.log(this.prueba2[0]);

//eSTRATEGIA
let nota1 = 0;
let valor = 0;

for (let i = 0; i < Number(this.prueba2.slice(0,4).length); i++) {
    valor += Number(this.prueba2.slice(0,4)[i]);
  }
nota1 = valor/5;

//finanzas
let nota2 =0;
let valor2 =0;
for (let i = 0; i < Number(this.prueba2.slice(5,9).length); i++) {
  valor2 += Number(this.prueba2.slice(5,9)[i]);
}
nota2 = valor2/4;

let nota3 = Number(this.prueba2[10])



  console.log(nota1)

    this.finanzas = nota2
    this.marketing =  this.prueba2[10];

    //x tipo
  this.nota = [nota1, nota2, nota3]
     console.log(this.nota);

  this.prueba = [
    {
      "name": "Estrategia",
      "value":nota1 || 0
    },
    {
      "name": "Finanzas",
      "value": nota2 || 0
    },
    {
      "name": "Marketing",
      "value": nota3 || 0
    }


  ]
  console.log(this.prueba)








     //for para buscar preguntas dedicadas a consultorias
  for (let i =0; i<   this.prueba2.length; i++) {
    //si la PREGUNTA 1 TIENE 0  le muestro tales paquetes
    if(    this.prueba2[0] == 1 ) {
      console.log("a domir ")
    }

  }

    this.mostrar=true;
    this.mostrar2=false
//console.log(this.nota)



  }


}
