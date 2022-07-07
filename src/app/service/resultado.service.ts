import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private mensaje = new BehaviorSubject<string>('default');
  curentMensaje = this.mensaje.asObservable();

  constructor() { }
  changeMensaje(mensaje: any) {
    this.mensaje.next(mensaje)
  }
}
