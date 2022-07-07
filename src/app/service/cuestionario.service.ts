import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  private cuestionario: any[]=[
    {
      "_id":"001",
      "pregunta": "¿La empresa cuenta con directrices estrategias claramente definidas y  comprendidas en toda la organización (Modelo de Negocio definido, visión, misión, público objetivo, personalidad de marca definidos, ....)? ",
      "importancia": 1,
      "tipo": "planificacion",
      "area": "Estrategia",
      "respuestas": [
        {
          "id_resp": "0001",
          "respuesta": "La empresa no ha llevado a cabo un análisis estratégico que le permita conocer claramente el modelo de negocio en el que se desenvuelve actualmente.",
          "puntuacion": 25
        },
        {
          "id_resp": "0002",
          "respuesta": "La empresa ha definido su misión, pero no tiene una definición formal de su público objetivo.",
          "puntuacion": 50
        },
        {
          "id_resp": "0003",
          "respuesta": "La empresa conoce su misión, definió su público objetivo, personalidad de marca,  pero no ha desarrollado su propuesta de valor diferenciada",
          "puntuacion": 75
        },
        {
          "id_resp": "0004",
          "respuesta": "La empresa y sus empleados entienden claramente todos los aspectos estratégicos del negocio",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"002",
      "pregunta": "¿La empresa tiene el objetivo de explorar otros mercados?",
      "importancia": 1,
      "tipo": "planificacion",
      "area": "Estrategia",
      "respuestas": [
        {
          "id_resp": "0005",
          "respuesta": "No, la empresa no logra descubrir como explorar nuevos mercados.",
          "puntuacion": 25
        },
        {
          "id_resp": "0006",
          "respuesta": "A pesar de saber cómo satisfacer nuevos mercados, optó por no explotarlos.",
          "puntuacion": 50
        },
        {
          "id_resp": "0007",
          "respuesta": "Sí, sin embargo, la empresa está centrada en ganar espacio en el mercado actual, para después pensar en la exploración de otros mercados.",
          "puntuacion": 75
        },
        {
          "id_resp": "0008",
          "respuesta": "Sí, e incluso la empresa ya está tomando medidas para iniciar la exploración.",
          "puntuacion": 100
        },
      ]
    },

    {
      "_id":"003",
      "pregunta": " ¿La empresa invierte en la marca? Es decir, para que su marca sea recordada por sus clientes",
      "importancia": 1,
      "tipo": "planificacion",
      "area": "Estrategia",
      "respuestas": [
        {
          "id_resp": "0009",
          "respuesta": "No, la empresa no invierte en la divulgación de su imagen institucional.",
          "puntuacion": 25
        },
        {
          "id_resp": "0010",
          "respuesta": "La empresa invierte sólo en marketing y ventas.",
          "puntuacion": 50
        },
        {
          "id_resp": "0011",
          "respuesta": "Consideramos que es importante, sin embargo, no es la prioridad.",
          "puntuacion": 75
        },
        {
          "id_resp": "0012",
          "respuesta": "Sí, crear una buena imagen corporativa para su cliente es esencial para aquellos que quieren obtener resultados a mediano y largo plazo.",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"004",
      "pregunta": " ¿La empresa utiliza métodos de análisis de información para formular sus estrategias?",
      "importancia": 1,
      "tipo": "control",
      "area": "Estrategia",
      "respuestas": [
        {
          "id_resp": "0013",
          "respuesta": "La empresa no utiliza ni analiza información para la formulación de sus estrategias. Desconoce la atractividad del mercado (análisis externo) y su competitvidad (análisis interno)",
          "puntuacion": 25
        },
        {
          "id_resp": "0014",
          "respuesta": "La empresa analiza variables tanto internas como externas de manera informal basada en su experiencia del día a día.",
          "puntuacion": 50
        },
        {
          "id_resp": "0015",
          "respuesta": "La empresa analiza variables internas y externas para apoyar la formulación de la estrategia.",
          "puntuacion": 75
        },
        {
          "id_resp": "0016",
          "respuesta": "La empresa tiene en cuenta todos los factores que intervienen en la elaboración de su estrategia, incorporando la colaboración y trabajo conjunto y coordinado con sus colaboradores.",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"005",
      "pregunta": "¿La empresa tiene la capacidad de retener a los clientes antiguos y mantener a los nuevos clientes?",
      "importancia": 1,
      "tipo": "control",
      "area": "Estrategia",
      "respuestas": [
        {
          "id_resp": "0017",
          "respuesta": "No, la empresa no logra retener a los clientes antiguos, y mucho menos mantener los nuevos.",
          "puntuacion": 25
        },
        {
          "id_resp": "0018",
          "respuesta": "Sí, la empresa logra retener a los clientes antiguos, pero no puede mantener a los nuevos.",
          "puntuacion": 50
        },
        {
          "id_resp": "0019",
          "respuesta": "Sí, la empresa logra retener los  nuevos clientes, pero, después de un tiempo, los clientes antiguos se van perdiendo.",
          "puntuacion": 75
        },
        {
          "id_resp": "0020",
          "respuesta": "Sí, la empresa logra mantener tanto a los nuevos clientes como retener a los antiguos.",
          "puntuacion": 100
        },
      ]
    },


    {
      "_id":"006",
      "pregunta": "¿La empresa realiza inversiones a largo plazo? ",
      "importancia": 1,
      "tipo": "planificacion",
      "area": "finanzas",
      "respuestas": [
        {
          "id_resp": "0021",
          "respuesta": "No, la empresa no posee ningún tipo de inversión, ya sea corto, mediano o largo plazo.",
          "puntuacion": 25
        },
        {
          "id_resp": "0022",
          "respuesta": "No, la empresa no posee inversiones a largo plazo, solamente inversiones a corto y mediano plazo.",
          "puntuacion": 50
        },
        {
          "id_resp": "0023",
          "respuesta": "Sí, la empresa posee una inversión financiera a largo plazo, pero no hace contribuciones regulares.",
          "puntuacion": 75
        },
        {
          "id_resp": "0024",
          "respuesta": "Sí, la empresa posee una inversión financiera a largo plazo y hace contribuciones regulares.",
          "puntuacion": 100
        },
      ]
    },


    {
      "_id":"007",
      "pregunta": "¿La empresa cuenta con la planificación y control del presupuesto? ",
      "importancia": 1,
      "tipo": "Planificacion",
      "area": "Finanzas",
      "respuestas": [
        {
          "id_resp": "0025",
          "respuesta": "La empresa no tiene ninguna planificación o control presupuestario.",
          "puntuacion": 25
        },
        {
          "id_resp": "0026",
          "respuesta": "La empresa planea el presupuesto al comienzo del año, pero no lo revisa o le da seguimiento durante el año.",
          "puntuacion": 50
        },
        {
          "id_resp": "0027",
          "respuesta": "La empresa planea el presupuesto y lo sigue a lo largo del año.",
          "puntuacion": 75
        },
        {
          "id_resp": "0028",
          "respuesta": "La empresa utiliza el plan de presupuesto como un medio para reducir costos y aumentar la rentabilidad.",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"008",
      "pregunta": "¿La empresa tiene previsto solicitar o ya adquirió un préstamo? ",
      "importancia": 1,
      "tipo": "Planificacion",
      "area": "Finanzas",
      "respuestas": [
        {
          "id_resp": "0029",
          "respuesta": "Sí, la empresa tiene más de un préstamo, no ha pagado todas sus deudas y está a punto de conseguir otro.",
          "puntuacion": 25
        },
        {
          "id_resp": "0030",
          "respuesta": "Sí, la empresa ha solicitado un solo préstamo y aún lo está pagando.",
          "puntuacion": 50
        },
        {
          "id_resp": "0031",
          "respuesta": "Sí la empresa adquiere préstamos con regularidad, pero paga todas sus obligaciones sin problemas.",
          "puntuacion": 75
        },
        {
          "id_resp": "0032",
          "respuesta": "No, la empresa nunca necesitó solicitar préstamos y siempre se mantuvo con sus propios recursos.",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"009",
      "pregunta": "¿La empresa lleva a cabo una gestión en su flujo de caja?",
      "importancia": 1,
      "tipo": "control",
      "area": "Finanzas",
      "respuestas": [
        {
          "id_resp": "0033",
          "respuesta": "La empresa no tiene control de su cuenta bancaria.",
          "puntuacion": 25
        },
        {
          "id_resp": "0034",
          "respuesta": "La empresa controla sus cuentas por pagar, cuentas por cobrar, acompañan a los saldos bancarios y facturación.",
          "puntuacion": 50
        },
        {
          "id_resp": "0035",
          "respuesta": "La empresa cuenta con un flujo de caja.",
          "puntuacion": 75
        },
        {
          "id_resp": "0036",
          "respuesta": "La empresa cuenta con el flujo de caja capaz de calcular los indicadores financieros con proyecciones futuras.",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"010",
      "pregunta": "¿La empresa tiene el control de su capital de trabajo?",
      "importancia": 1,
      "tipo": "control",
      "area": "finanzas",
      "respuestas": [
        {
          "id_resp": "0037",
          "respuesta": "La compañía no posee ninguna información sobre su capital de trabajo.",
          "puntuacion": 25
        },
        {
          "id_resp": "0038",
          "respuesta": "La empresa intuitivamente sabe que hay un nivel mínimo de dinero en caja para las compras del próximo mes.",
          "puntuacion": 50
        },
        {
          "id_resp": "0039",
          "respuesta": "La empresa sabe cuánto necesita tener de capital de trabajo, pero no logra garantizar su nivel ideal.",
          "puntuacion": 75
        },
        {
          "id_resp": "0040",
          "respuesta": "La empresa conoce su capital de trabajo necesario y se proyecta para mantener el nivel adecuado.",
          "puntuacion": 100
        },
      ]
    },
    {
      "_id":"011",
      "pregunta": "¿La empresa tiene su segmento definido y es divulgada de manera enfocada? ",
      "importancia": 1,
      "tipo": "Planificacion",
      "area": "Marketing",
      "respuestas": [
        {
          "id_resp": "0041",
          "respuesta": "La empresa no tiene el foco, simplemente vende lo que se le requiere o lo que ya está funcionando.",
          "puntuacion": 25
        },
        {
          "id_resp": "0042",
          "respuesta": "La empresa cuenta con un segmento, pero no lleva a cabo acciones relacionadas a su enfoque.",
          "puntuacion": 50
        },
        {
          "id_resp": "0043",
          "respuesta": "Hay enfoque planificado, acciones dirigidas a los clientes y creación de nuevas ofertas para cada cliente.",
          "puntuacion": 75
        },
        {
          "id_resp": "0044",
          "respuesta": "La empresa se centra en la divulgación para su público y monitorea los resultados.",
          "puntuacion": 100
        },
      ]
    },

  ];


  constructor() { }

  getCuestionario(){
    return this.cuestionario
  }
}
