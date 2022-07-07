import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private paquete:any[] = [
    {
      "img": "../../../assets/catalogo/c1.jpg",
      "txt": "Consiste en echar un primer vistazo a lo que es la transformación digital para empresas PYMES. El proceso resulta en sumar las perspectivas individuales y llegar a una solución que haga sentido para todos, analizando las posibles soluciones para encontrar un nuevo camino.",
      "tipo": "Proyecto",
      "contacto": "Solicitar",
      "categoria": [
        "Estrategia",
        "pymes",
        "diseño"
      ]
    },
    {
      "img": "../../../assets/catalogo/c2.jpg",
      "txt": "Realizar desarrollos con estructuras antiguas lleva rápidamente a la obsolescencia, mediante el desarrollo en MEAN permite saltar entre el desarrollo del backend y frontend en función de las necesidades del proyecto,  así como también tener una estructura del diseño completa.",
      "tipo": "Desarrollo",
      "contacto": "Cotizar",
      "categoria": [
        "desarrollo",
        "pymes",
        "independientes"
      ]

    },
    {
      "img": "../../../assets/catalogo/c3.jpg",
      "txt": "Los datos son los factores acerca de los sucesos recogidos por un usuario que representa un mensaje, y con esto se pueden tomar decisiones, pero para ello se necesita organizar los datos de manera de tablas.",
      "tipo": "Desarrollo",
      "contacto": "Cotizar",
      "categoria": [
        "desarrollo",
        "pymes",
        "independientes"
      ]
    },
    {
      "img": "../../../assets/catalogo/c4.jpg",
      "txt": "El desarrollo del comercio electrónico y su importancia en la economía no se ha generado de una forma lineal sino en los últimos años ha crecido de forma exponencial, Representan actualmente más de un 11% de las ventas en EEUU.",
      "tipo": "Desarrollo",
      "contacto": "Solicitar",
      "categoria": [
        "desarrollo",
        "pymes",
        "independientes",
        "estrategia"
      ]
    },
    {
      "img": "../../../assets/catalogo/c5.jpg",
      "txt": "Es un servicio en el cual se procesan y autorizan pagos en línea mediante una tarjeta o transferencia automática, que es equivalente a un terminal de punto de venta o POS.",
      "tipo": "Desarrollo",
      "contacto": "Solicitar",
      "categoria": [
        "desarrollo",
        "pymes",
        "independientes"
      ]
    },
    {
      "img": "../../../assets/catalogo/c6.jpg",
      "txt": "Nos encargamos de todo el proceso de desarrollo, diseño e implementación de una web page a medida de tu negocio, podemos modificar la existente que tienes y darle un nuevo aire así como también nuevas funcionalidades.",
      "tipo": "Desarrollo",
      "contacto": "Solicitar",
      "categoria": [
        "desarrollo",
        "pymes",
        "independientes",
        "diseño",
        "estrategia"
      ]
    },
    {
      "img": "../../../assets/catalogo/c16.jpg",
      "txt": "Desde fotos, animaciones y videos para tus redes sociales, todo el material necesitado para poder mostrar tu servicio o producto.",
      "tipo": "Diseño",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "independientes",
        "diseño",
        "redes"
      ]
    },
    {
      "img": "../../../assets/catalogo/c8.jpg",
      "txt": "Miro es una pizarra digital colaborativa en línea, que puede ser usada para la investigación, la ideación, la creación de lluvias de ideas y una variedad de otras actividades colaborativas, que permiten a tu equipo ser más productivos a la hora de buscar soluciones para el negocio.",
      "tipo": "Capacitación",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "estrategia",
      ]
    },
    {
      "img": "../../../assets/catalogo/c9.jpg",
      "txt": "Jira es una herramienta para la gestión de proyectos y seguimiento de errores, la cual es una de las mejores herramientas para la aplicación de metodologías ágiles. Si buscan implementar una metodología en su organización Jira es la ideal para comenzar.",
      "tipo": "Capacitación",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "estrategia",
      ]
    },
    {
      "img": "../../../assets/catalogo/c10.jpg",
      "txt": "Las oficinas virtuales son el futuro y slack es la mejor opción para comenzar con la implementación de su oficina remota y accesible desde cualquier lugar, cuenta con muchas funcionalidades que permitirán gestionar su equipo de manera eficiente.",
      "tipo": "Capacitación",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "estrategia",
        "independientes"
      ]
    },
    {
      "img": "../../../assets/catalogo/c11.jpg",
      "txt": "Un servicio que proporciona varios productos de Google con un nombre de dominio personalizado. Cuenta con varias aplicaciones web con funciones similares a las suites ofimáticas tradicionales, así como también espacio de almacenamiento en la nube. ",
      "tipo": "Desarrollo",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "estrategia",
        "independientes",
        "desarrollo"
      ]
    },
    {
      "img": "../../../assets/catalogo/c12.jpg",
      "txt": "En un proceso de transición de datos de un emisor a un solicitador existen protocolos y mecanismos que generan que sean más rápido eficiente y seguros. La información que posee una empresa no todo debe de ser emitido para ello existen los apis.  ",
      "tipo": "Desarrollo",
      "contacto": "Cotizar",
      "categoria": [

        "pymes",
        "independientes",
        "desarrollo"
      ]
    },
    {
      "img": "../../../assets/catalogo/c13.jpg",
      "txt": "Saber el estado de tus competidores en redes sociales y cómo te encuentras, mediante este servicio realizaremos un estudio a profundidad de tus redes sociales así como las de tus competidores. ",
      "tipo": "Análisis",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "independientes",
        "estrategia",
        "redes"
      ]
    },
    {
      "img": "../../../assets/catalogo/c14.jpg",
      "txt": "La identidad de tu carta de presentación frente a tus clientes, mediante la plataforma de marca realizaremos el desarrollo de una imagen a medida. ",
      "tipo": "Diseño",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "independientes",
        "diseño",
        "redes"

      ]
    },
    {
      "img": "../../../assets/catalogo/c15.jpg",
      "txt": "LLanza tu próxima campaña en redes sociales, te ayudamos a elaborarla y tener métricas para obtener el impacto que estás buscando.  ",
      "tipo": "Diseño",
      "contacto": "Solicitar",
      "categoria": [

        "pymes",
        "independientes",
        "diseño",
        "redes"

      ]
    },
  ];

  constructor() { }
  getPaquetes() {
    return this.paquete
  }


}
