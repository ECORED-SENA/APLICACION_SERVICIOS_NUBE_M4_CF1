<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Algunos de los elementos fundamentales que se usan para la descripción de un algoritmo en un lenguaje de programación son los identificadores, los cuales pueden ser variables o constantes, dependiendo del comportamiento de los valores que registramos en ellos.

    p.mt-3 Estos identificadores se componen principalmente de tres elementos: nombre del identificador, valor almacenado y posición física de la memoria donde se encuentra. Para poder utilizar identificadores, se debe realizar el proceso de declaración del identificador donde se define el tipo de dato asociado, el cual indica el tamaño a reservar en la memoria y el nombre de dicho identificador. Dependiendo del lenguaje de programación utilizado, existen diferentes tipos de datos, entre los más comunes encontramos los int, string y char.

    p.mt-3 Sin embargo, los identificadores tienen restricciones, ya que por la estructura de su construcción, sólo pueden almacenar un valor a la vez, el cual debe coincidir con el tipo de dato definido (Aguilar, 2021).

    p.mt-3 Cuando el problema a desarrollar requiere gran cantidad de información y adicionalmente la información se compone de diversos tipos de datos, el mecanismo de identificadores se vuelve obsoleto, no solo por la gran cantidad de estructuras de memoria que se deberán construir, sino que su gestión también será más compleja.

    p.mt-3 Por ejemplo, si se necesita gestionar la información de una agenda de contactos electrónica, donde por cada contacto se desea almacenar el nombre, apellidos, alias, teléfono, correo, dirección, notas y número de acceso rápido para llamadas, al seguir el modelo de almacenamiento temporal de datos con identificadores, deberá crear una variable por cada uno de los datos de contacto, teniendo cuidado de asignar el tipo de dato correcto, algo similar se presenta en la siguiente tabla al utilizar el lenguaje de programación Java:

    .titulo-quinto.color-acento-contenido.text-center.mt-5
      h4 Declaración de identificadores en Java

    .col-md-6.m-auto
      .p-4(style="background-color:#F3F9FF")
        .col-md-6.m-auto
          ul
            li ...
            li String nombre;
            li String apellido;
            li String alias;
            li String telefono;
            li String correo;
            li String direccion;
            li String notas;
            li int numeroAccesoRapido;
            li ...

    .col-md-9.m-auto.mt-4
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        p Proyectando gráficamente lo que pasa en la memoria del computador, donde se está realizando el proceso de declaración de variables, se podría ver algo similar a lo que representa la siguiente figura.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:1rem") Representación de identificadores en la memoria

    figure.mt-4
      img(src="@/assets/curso/introduccion/1.svg")

    p.mt-5 Cada identificador definido es como una caja donde se pueden almacenar datos, cada caja se reconoce fácilmente por medio del nombre del identificador asignado, el tamaño de cada caja puede ser diferente y estará determinado por el tipo de dato asociado en la construcción del identificador. Adicionalmente, cada caja tiene asociada una dirección de memoria dentro del equipo donde se ejecuta, estas son posiciones temporales y cada vez que se ejecute este proceso las cajas asumirán posiciones de memoria diferentes.

    p.mt-3 Como se puede observar en la figura anterior, cada identificador tendrá una posición de memoria y dependiendo del espacio disponible en la memoria podrían quedar o no en posiciones consecutivas, adicionalmente todos estos elementos que parecen dispersos, en conjunto representan una única información: un contacto en la agenda electrónica. El panorama se vuelve un poco más complejo en la memoria del equipo si el proyecto tuviera que administrar 5.000 contactos y se siguiera utilizando identificadores.

    p.mt-3 Al tener problemas cada vez más complejos y grandes cantidades de datos, se requieren mejores mecanismos para gestionar los datos y es a partir de este escenario que surge la programación orientada a objetos, como un paradigma que busca aproximar el manejo de la información, desde la forma como es procesada internamente en los programas a como realmente se representa en la vida cotidiana.

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4(style="background-color: #FFE7C4;")
        p En los siguientes apartados se profundizará sobre los conceptos en los que se fundamenta el paradigma y luego se examinarán en detalle algunos de los elementos centrales que se utilizan para implementar el paradigma.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.cajon.color-acento-botones:before
  background-color: #FFA726
</style>
