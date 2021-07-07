<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Paradigma orientado a objetos

    p El paradigma orientado a objetos es un concepto que inició en los años 70, pero que se logró estandarizar alrededor de 1997 con la aparición del #[strong Lenguaje Unificado de Modelado UML], teniendo presente que la palabra objetos no hace referencia necesariamente a componentes gráficos de un sistema de información (Rumbaugh et al. 2004).

    .row.mt-5.col-10
      .col-md-5
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h2.mb-5 Según Booch et al. (2007), para que un sistema o modelo sea orientado a objetos debe tener los siguientes elementos:
          span - Booch et al. (2007)
      .col-md-7
        .p-5(style="background-color:#F3F9FF")
          .row
            .col-md-6
              ul.lista-ul
                li 
                  i.fas.fa-check
                  | Abstracción
                li 
                  i.fas.fa-check
                  | Encapsulamiento
                li 
                  i.fas.fa-check
                  | Modularidad
                li 
                  i.fas.fa-check
                  | Jerarquía
                li 
                  i.fas.fa-check
                  | Polimorfismo
            .col-md-6
              figure.p-3
                img(src="@/assets/curso/tema1/1.svg")

    br
    #t_1_1.titulo-segundo.mt-5
      h2 1.1 Abstracción

    p La abstracción es un proceso natural del ser humano y consiste esencialmente en la identificación de características claves según el contexto y conocimiento de las personas. De tal forma se constituye en el medio mediante el cual se enfrentan los problemas complejos para extraer las características esenciales y posteriormente representar dichas características en objetos (Aguilar, 1998).

    p.mt-3 La abstracción se enfoca en la vista externa de los elementos lo cual permite separar su comportamiento esencial de su implementación e ignorar detalles internos. Mediante la abstracción hay un énfasis en el #[strong qué es y qué hace] algo y no en el cómo debe implementarse o cómo funciona algo (Aguilar, 2021).

    p.mt-3 #[strong A continuación, se muestra un ejemplo sobre este proceso de abstracción.]

    figure.mt-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    #t_1_2.titulo-segundo.mt-5
      h2 1.2 Encapsulamiento

    p El encapsulamiento es el proceso que permite agrupar datos y también operaciones que relacionan estos datos bajo una misma unidad lógica, en el ejemplo de la introducción, Representación de identificadores en la memoria, todos los elementos descritos en conjunto representan una única unidad de información que corresponde a un contacto de la agenda electrónica, por lo cual se debería utilizar el encapsulamiento como lo representa la figura que se encuentra a continuación, para agrupar todo y no seguir trabajando los datos como elementos independientes y dispersos.

    .col-md-8.mt-5.m-auto
      p.mb-3(style="border-left:4px #4DD0E1 solid;padding-left:1rem") El encapsulamiento oculta los detalles de la implementación de un objeto
      figure
        img(src="@/assets/curso/tema1/2.svg")
        figcaption  Nota. Booch et al. (2007).

    p.mt-4 La encapsulación además trae consigo algo llamado ocultamiento de datos, que consiste en la posibilidad de separar los elementos esenciales con los que se opera algo (interfaz – externa y pública) de los detalles de su implementación (interna y privada). El encapsulamiento es un proceso que se debe realizar luego del proceso de abstracción (Aguilar, 2021).

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        p Un ejemplo del encapsulamiento es el control remoto de un televisor, al revisar la siguiente infografía se comprende el porqué.

    .titulo-quinto.color-acento-contenido.text-center.mt-5
      h4 Ejemplo de encapsulamiento

    .col-md-7.m-auto.mt-5
      ImagenInfografica.color-secundario

        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/3.svg', alt='Avatar')

        .tarjeta.color-acento-botones.p-3(x="65%" y="3%")
          p Este aparato agrupa varios elementos que tienen funcionamientos particulares pero que en conjunto permiten la manipulación a distancia de un televisor.

        .tarjeta.color-acento-botones.p-3(x="64%" y="42%")
          p Adicionalmente como usuarios de un control remoto interactuamos con él mediante su interfaz externa y pública, es decir, sus botones de colores, cada botón tiene un identificador que es conocido para nosotros y mediante el cual manipulamos el televisor.

        .tarjeta.color-acento-botones.p-3(x="7%" y="65%")
          p Como usuarios de un control remoto no es esencial su implementación (interna y privada), es decir, cómo interactúan las ondas de luz de baja frecuencia o las señales que son decodificadas por los aparatos electrónicos.

    br
    #t_1_3.titulo-segundo.mt-5
      h2 1.3 Modularidad

    .tarjeta.text-white.p-5.mt-4(style="background: linear-gradient(rgb(83 209 226), rgb(17 30 97));")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Modularidad
              p La modularidad es la propiedad que permite dividir una aplicación o sistema en partes más pequeñas, idealmente deben ser muy independientes (bajoa coplamiento) y altamente funcionales (alta cohesión).
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="obtenerLink('downloads/Infografia moduralidad.pdf')" target="_blank")
                span(style="color: initial !important;") Ver infografía
                i.fas.fa-file-download(style="color: initial !important;")

    br
    #t_1_4.titulo-segundo.mt-5
      h2 1.4 Jerarquía

    p Las jerarquías son clasificaciones y ordenaciones de las abstracciones de un problema (Aguilar, 1998), permiten comprender de forma general la estructura de un sistema y favorecen, en algunos casos, la reutilización de características y comportamientos de las abstracciones definidas.

    p.mt-3 Las jerarquías que se producen desde el punto de vista de la estructura de objetos se les conoce como agregación y composición, y las jerarquías que se producen desde las estructuras de clases se les conoce como generalización y especialización.

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        p Un ejemplo de jerarquía a nivel de clases podría representarse como la clasificación de los animales según su alimentación, así como se presenta a continuación.

    figure.mt-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        p Como ejemplo de jerarquía de estructura de objetos se presenta la siguiente figura, en donde se utiliza la jerarquía para representar que varias abstracciones en conjunto forman o conforman una nueva abstracción mucho más completa.

    .titulo-quinto.color-acento-contenido.text-center.mt-5
      h4 Elementos que conforman un computador

    .col-md-9.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema1/5.svg")

    p.mt-5 Dependiendo del nivel de dependencia que existe entre la abstracción que agrupa y las abstracciones que son partes, se definen relaciones de #[strong composición] o #[strong agregación].

    p.mt-3 La representación de las uniones entre las abstracciones de una jerarquía usa símbolos diferentes para diferenciar lo que son jerarquías de clases y jerarquías de objetos. Esto se detalla en el tema de diagrama de clases.

    br
    #t_1_5.titulo-segundo.mt-5
      h2 1.5 Polimorfismo

    p Es la característica que permite que una abstracción tome diferentes formas o diferentes comportamientos según el contexto. Esta característica se potencia en compañía de las jerarquías vistas anteriormente.

    p.mt-3 En la siguiente figura, se muestra un ejemplo de una jerarquía sobre figuras planas y adicionalmente se indica que hay un comportamiento llamado Calcular Área, es decir, todas las figuras planas pueden calcular su área.

    .titulo-quinto.color-acento-contenido.text-center.mt-5
      h4 Ejemplo de polimorfismo en figuras planas

    .col-md-9.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema1/6.svg")

    p.mt-5 En la jerarquía de clases del ejemplo anterior las abstracciones #[strong rectángulo, círculo y triángulo] heredan las características de la #[strong abstracción figura plana] incluyendo el comportamiento de #[strong Calcular Área]. Sin embargo, este comportamiento tiene diferentes formas de calcularse dependiendo qué abstracción de la jerarquía es la que la utilice.

    .p-4.mt-4(style="background-color:#F3F9FF")
      ul.lista-ul
        li 
          i.fas.fa-check
          | Para el caso de la abstracción rectángulo, el cálculo de área se obtiene luego de multiplicar el valor de la base y la altura de la figura.
        li 
          i.fas.fa-check
          | Para la abstracción círculo se debe multiplicar la constante π (Pi) por el valor del radio al cuadrado.
        li 
          i.fas.fa-check
          | Para la abstracción triángulo se calcula diferente, en este caso el cálculo del área se obtiene luego de multiplicar el valor de la base por la altura de la figura y dividir el valor entre dos.

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        p #[strong El Polimorfismo] está presente en el comportamiento #[strong Calcular Área.]

  
</template>

<script>
export default {
  name: 'Tema1',
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
