export default {
  global: {
    componenteFormativo: 'Conceptos básicos programación orientada a objetos',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave del paradigma orientado a objetos, entre los que se encuentran la abstracción, encapsulamiento, modularidad, jerarquía y polimorfismo. Adicionalmente se introducen los conceptos de clases y objetos desde la perspectiva de este paradigma.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'fas fa-play-circle',
        numero: '1',
        titulo: 'Paradigma orientado a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'fas fa-play-circle',
            numero: '1.1',
            titulo: 'Abstracción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Encapsulamiento',
            hash: 't_1_2',
          },
          {
            icono: 'fas fa-play-circle',
            numero: '1.3',
            titulo: 'Modularidad',
            hash: 't_1_3',
          },
          {
            icono: 'fas fa-play-circle',
            numero: '1.4',
            titulo: 'Jerarquía',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Polimorfismo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clases y objetos',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, J. L. (2021). Fundamentos de programación. McGraw Hill Education.',
      link: '',
    },
    {
      referencia:
        'Aguilar, L. J. (1998). Programación orientada a objetos. McGraw Hill Education.',
      link: '',
    },
    {
      referencia:
        'Booch, G., Maksimchuk, R. A., Engle, M. W., Conallen, J., Young, B. J., & Houston, K. A. (2007). Object-oriented Analysis and Design with Applications. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Samuel. (2020, Febrero 28). ¿Qué es la POO?. [Web log post] Fundamentos de las POO.',
      link: 'http://micanalsamuelc.blogspot.com/2017/03',
    },
    {
      referencia:
        'Rumbaugh, J., Jacobson, I., & Booch, G. (2004). El lenguaje unificado de modelado. Addison-Wesley.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Secuencia de pasos ordenados y finitos que describen un conjunto de acciones para resolver un problema.',
    },
    {
      termino: 'Paradigma',
      significado:
        'ejemplo o modelo de algo. En el caso del paradigma orientado a objetos corresponde a un conjunto de características y formas en la que se representa la información.',
    },
  ],
  complementario: [
    {
      texto: 'EDteam. (2019) ¿Qué es la programación orientada a objetos?',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/DlphYPc_HKk',
    },
    {
      texto:
        'Dalto, L. (2019). Programación orientada a objetos explicada en 10 minutos.',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/uNlB7141umY',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'Zulema León Escobar',
        cargo: 'Instructora',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Carlos Julián Ramírez Benítez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Maria Carolina Tamayo',
          'Jose Jaime Tang',
          'Oleg Litvin',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
