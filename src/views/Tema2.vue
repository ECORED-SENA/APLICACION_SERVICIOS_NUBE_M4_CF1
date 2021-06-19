<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Clases y objetos

    p Las clases y objetos son el corazón de la programación orientada a objetos y en la construcción de estos elementos se refleja cada una de las características del paradigma orientado a objetos revisado en el apartado anterior. Algunas veces parece que ambos elementos se traslapan y algunas otras veces se suele hablar de forma indiscriminada de estos dos elementos, por lo cual a continuación se ampliará la revisión para comprender sus características y diferencias.

    p.mt-3 Un objeto en el paradigma orientado a objetos representa un objeto del mundo real, el objeto debe ser especializado y solo se encarga de una tarea. Un objeto puede ser:

    .p-5.mt-5.col-md-11(style="background-color:#F3F9FF")
      .row
        .col-md-9
          ul.lista-ul
            li 
              i.fas.fa-check
              | #[strong Cosas tangibles como un avión, un auto o un televisor.]
            li 
              i.fas.fa-check
              | #[strong Roles o papeles como un gerente, un cliente o un vendedor.]
            li 
              i.fas.fa-check
              | #[strong Organizaciones como una empresa o un departamento.]
            li 
              i.fas.fa-check
              | #[strong Interacciones como transacciones o contratos.]
            li 
              i.fas.fa-check
              | #[strong Incidentes como vuelos, sucesos o accidentes.#[br] Lugares como muelles, carreteras, etc.]

        .col-md-3
          figure.p-3
            img(src="@/assets/curso/tema2/1.svg")

    p.mt-5 Los objetos se comunican con otros objetos por medio de mensajes y su estructura se describe en la siguiente tabla.

    .col-md-10.mt-5
      p.mb-3(style="border-left:4px #4DD0E1 solid;padding-left:1rem") Estructura de un objeto

      .tabla-a.color-secundario
        table
          caption Nota: Aguilar (1998)
          thead
            tr
              th Elemento
              th Descripción
          tbody
            tr
              td Identidad (nombre)
              td Permite distinguir un objeto de otro.
            tr
              td Atributos y propiedades (estado)
              td Representa las características del objeto. #[br] Son los parámetros que lo definen y lo diferencian de objetos del mismo tipo.
            tr
              td Métodos
              td Representan el comportamiento del objeto. Acciones que realizan o manejan los datos. #[br] Cada método consta de un nombre de método y el cuerpo donde se implementan las acciones.

    p.mt-5 Una clase es una abstracción o visión generalizada de un conjunto de objetos que tienen características (atributos y propiedades) y métodos iguales o similares. Es decir, una clase representa las características comunes de un conjunto de objetos, como se muestra en la figura que se encuentra a continuación.

    .mt-5
      p.mb-4(style="border-left:4px #4DD0E1 solid;padding-left:1rem") Clases y objetos ejemplo
      figure
        img(src="@/assets/curso/tema2/2.svg")

    p.mt-5 Una clase es un tipo de dato definido por el usuario, no existe en forma concreta ya que es solo una abstracción. A partir de la definición de una clase se pueden construir objetos. Regresando al ejemplo de la introducción, las clases son equivalentes a los tipos de datos y los objetos son los identificadores que se crean a partir de este tipo particular de dato.

    p.mt-3 Así, una clase puede servir para definir (instanciar) objetos. Un objeto es una instancia de una clase totalmente independiente de otros objetos de la misma clase. La estructura de los objetos corresponderá a la estructura definida por la clase desde la cual se crean, así como se observa en la siguiente figura.

    .mt-5
      p.mb-4(style="border-left:4px #4DD0E1 solid;padding-left:1rem") Clase y objetos
      figure
        img(src="@/assets/curso/tema2/3.svg")


    br
    h5.mt-5 Atributos:

    p.mt-3 los atributos de los objetos que se definen en las clases cuando se describen en lenguaje de modelado formal o en un lenguaje de programación, se estructuran de forma similar a como se definen los identificadores, es decir, cada atributo se expresa con un tipo de dato y nombre del identificador.

    p.mt-3 Adicionalmente tanto los atributos como los métodos tendrán una especificación, en la que se indica si corresponden a elementos públicos (interfaces visibles) o elementos privados (implementación interna) lo que representa una aplicación de la propiedad del encapsulamiento.

    .col-md-9.mt-5
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        .h5 Revisar el siguiente ejemplo:
        p Supongamos que se debe crear un sistema de información que permita el registro de matrícula de estudiantes en una institución educativa.

    .p-4(style="background-color:#F3F9FF")
      ul.lista-ul
        li 
          i.fas.fa-check
          | #[strong Lo primero por hacer, es por medio de la abstracción, identificar de la información existente, cuáles son los posibles objetos y las posibles características claves para tener en cuenta al realizar un registro de matrícula y la información esencial relacionada con los estudiantes.]
        li 
          i.fas.fa-check
          | #[strong Puede ser útil también verificar de estudiantes reales el tipo de información que requiere la institución.] 
        li 
          i.fas.fa-check
          | #[strong Luego de esto se empieza a construir las plantillas (clases) con la estructura de los elementos identificados. Posteriormente estas clases definidas permitirán instanciar objetos que corresponden a la información concreta con la que se manipulará el sistema.]


</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>
<style lang="sass">
.bloque-texto-c.color-secundario
  background-color: #A9EBF4 !important
.lista-ul li > i:first-of-type, .lista-ul--separador li > i:first-of-type, .lista-ul--color li > i:first-of-type
    color: #4DD0E1 !important
.titulo-segundo:after
  border-left: solid 50px #FFCA28 !important
.cajon.color-acento-botones:before
  background-color: #FFA726
.img-infografica__item
  width: 5.5% !important
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after
    background-color: #4DD0E1 !important
    border: 5px #3BB9C9 solid !important
.tarjeta.color-acento-botones
  background-color: #CDF6FC !important
  border: 1px #039BE5 solid !important
</style>
