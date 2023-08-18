export default {
  global: {
    componenteFormativo: 'Atención integral en salud mental',
    descripcionCurso:
      'Este componente formativo orienta al aprendiz a comprender la salud mental desde una perspectiva de participación social en salud que permite entender cómo las comunidades cumplen un papel fundamental en los procesos de aceptación, manejo, reconocimiento, atención primaria y tratamiento de la salud mental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mecanismos de participación en salud mental',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategia Rehabilitación Basada en Comunidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Grupos de apoyo y de ayuda mutua y/o autoayuda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Primeros Auxilios Psicológicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Descripción',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etapas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Rutas Integrales de Atención en Salud - RIAS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Activación de rutas en caso de violencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Procedimiento para denunciar',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Rutas de atención',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Competencias de cada entidad: Comisarias de Familia, Policía Nacional, Fiscalía, ICBF, Salud, Medicina legal, Personerías',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Líneas disponibles para la denuncia y/o acompañamiento',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Estrategia para promoción de la salud mental en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Plan de acción',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Coordinación intersectorial',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Fortalecimiento de entornos protectores',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Inclusión social',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Protocolo de manejo en intento de suicidio en salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Factores de riesgo',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Factores precipitantes',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Fortalecimiento familiar y comunitario',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Prevención de consumo de SPA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Diferencias entre consumo, abuso y dependencia',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Clasificación de sustancias psicoactivas',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Factores de riesgo y factores protectores',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Estrategias',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Acciones',
            hash: 't_9_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
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
  complementario: [
    {
      tema: 'Primeros Auxilios Psicológicos',
      referencia:
        'Amarís, M, Madariaga, C., Valle, M. & Zambrano, J. (2013). Estrategias de afrontamiento individual y familiar frente a situaciones de estrés psicológico. <i>Psicología desde el Caribe</i>, Volumen 30, 1, pp. 123-145.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/213/21328600007.pdf',
    },
    {
      tema: 'Etapas',
      referencia:
        'Chóliz, M. (2017). <i>Técnicas para el control de la activación: relajación y respiración</i>. Universidad de Valencia.',
      tipo: 'Libro',
      link: 'https://www.uv.es/=choliz/RelajacionRespiracion.pdf',
    },
    {
      tema: 'Protocolo de manejo en intento de suicidio en salud pública',
      referencia:
        'Alfonso, C. (2014). <i>Protocolo de vigilancia en salud pública: Intento de suicidio</i>. Instituto Nacional de Salud.',
      tipo: 'Lineamiento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/INS/protocolo-vigilancia-intento-suicidio.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Afrontamiento',
      significado:
        'en psicología, el afrontamiento ha sido definido como un conjunto de estrategias cognitivas y conductuales que la persona utiliza para gestionar demandas internas o externas que sean percibidas como excesivas para los recursos del individuo. Se puede considerar como una respuesta adaptativa de cada uno, para reducir el estrés que deriva de una situación vista como difícil de afrontar.',
    },
    {
      termino: 'Calidad de vida',
      significado:
        'la calidad de vida se define como la percepción del individuo sobre su posición en la vida dentro del contexto cultural y el sistema de valores en el que vive y con respecto a sus metas, expectativas, normas y preocupaciones. Es un concepto extenso y complejo que engloba la salud física, el estado psicológico, el nivel de independencia, las relaciones sociales, las creencias personales y la relación con las características sobresalientes del entorno.',
    },
    {
      termino: 'Autoayuda',
      significado:
        'en el contexto de la promoción de la salud, todas aquellas medidas llevadas a cabo por no profesionales sanitarios, con el fin de movilizar los recursos necesarios para promover, mantener o restaurar la salud de los individuos y de las comunidades.',
    },
    {
      termino: 'Colaboración intersectorial',
      significado:
        'relación reconocida entre parte o partes de distintos sectores de la sociedad que se ha establecido para emprender acciones en un tema con el fin de lograr resultados de salud o resultados intermedios de salud, de manera más eficaz, eficiente o sostenible que aquella que el sector sanitario pueda lograr actuando en solitario.',
    },
    {
      termino: 'Comunidad',
      significado:
        'grupo específico de personas, que a menudo viven en una zona geográfica definida, comparten la misma cultura, valores y normas, y están organizadas en una estructura social conforme al tipo de relaciones que la comunidad ha desarrollado a lo largo del tiempo. Los miembros de una comunidad adquieren su identidad personal y social al compartir creencias, valores y normas comunes que la comunidad ha desarrollado en el pasado y que pueden modificarse en el futuro. ',
    },
    {
      termino: 'Condiciones de vida',
      significado:
        'las condiciones de vida son el entorno cotidiano de las personas, dónde éstas viven, actúan y trabajan. Estas condiciones de vida son producto de las circunstancias sociales y económicas, y del entorno físico, todo lo cual puede ejercer impacto en la salud, estando en gran medida fuera del control inmediato del individuo.',
    },
    {
      termino: 'Empoderamiento para la salud',
      significado:
        'en promoción de la salud, el empoderamiento para la salud es un proceso mediante el cual las personas adquieren un mayor control sobre las decisiones y acciones que afectan a su salud.',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'condiciones sociales, económicas o biológicas, conductas o ambientes que están asociados con o causan un incremento de la susceptibilidad para una enfermedad específica, una salud deficiente o lesiones.',
    },
    {
      termino: 'Prevalencia',
      significado:
        'es el número de casos clínicos o portadores de una enfermedad en un determinado momento dentro de una comunidad.',
    },
    {
      termino: 'Prevención de la enfermedad',
      significado:
        'la prevención de la enfermedad abarca las medidas destinadas no solamente a prevenir la aparición de la enfermedad, tales como la reducción de los factores de riesgo, sino también a detener su avance y atenuar sus consecuencias una vez establecida.',
    },
    {
      termino: 'Promoción de la salud',
      significado:
        'acciones y programas que tienen como objetivo proporcionar a la comunidad los medios necesarios para adoptar las conductas que le permitan proteger y mejorar su estado de salud. Estas acciones suelen tener una impronta educativa, con el objetivo de informar y formar a las personas para que cuiden de su salud de manera autónoma.',
    },
    {
      termino: 'Salud Pública',
      significado:
        'la salud pública es un concepto social y político destinado a mejorar la salud, prolongar la vida y mejorar la calidad de vida de las poblaciones mediante la promoción de la salud, la prevención de la enfermedad y otras formas de intervención sanitaria.',
    },
    {
      termino: 'Violencia intrafamiliar',
      significado:
        'la violencia intrafamiliar es cualquier tipo de abuso de poder cometido por algún miembro de la familia sobre otro para dominar, someter, controlar o agredir física, psíquica, sexual, patrimonial o económicamente. Puede ocurrir fuera o dentro del domicilio familiar naturales y por efectos catastróficos de la acción del hombre en forma accidental, que requiera por ello de la especial atención de los organismos del estado y de otras entidades de carácter humanitario o de servicio social.',
    },
  ],
  referencias: [
    {
      referencia:
        'Becoña, E. (2006). Resiliencia: definición, características y utilidad del concepto. <i>Revista de psicología y psicología clínica</i>, 11, (3), p.p. 125-146. ',
      link: '',
    },
    {
      referencia:
        'Cepal. (2019). <i>Coordinación	intersectorial y entre actores pro igualdad</i>. ',
      link:
        'https://www.cepal.org/sites/default/files/presentations/2019-04-10_s8.1-rh.pdf',
    },
    {
      referencia:
        'Erausquin C., Denegri A. y Michele J. (2014). <i>Estrategias y modalidades de intervención psicoeducativa: historia y perspectivas en el análisis y construcción de prácticas y discursos</i>. Material Didáctico Sistematizado. ',
      link: 'https://www.aacademica.org/cristina.erausquin/195.pdf',
    },
    {
      referencia:
        'Friedli, L. (2009). <i>Mental health, resilience and inequalities</i>. WHO/Europe. ',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/107925/E92227.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2015). Convenio 547. <i>Lineamiento de Participación Social en Salud Mental. Documento Técnico para el desarrollo de capacidades</i>. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Lineamiento-participacion-social-Salud-mental.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <i>Manual de Gestión Integrada para la Atención Integral y Diferenciada de la Salud Mental de la Población Privada de la Libertad</i>. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Gestion-integrada-atencion-salud-mental-ppl.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2012). <i>Guías para la RBC Componente de fortalecimiento</i>. ',
      link:
        'http://apps.who.int/iris/bitstream/handle/10665/44809/9789243548050_Introducc;jsessionid=8D8F6DFA3D7733D2D54E34176671F339?sequence=42',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2013). <i>Plan de acción sobre salud mental 2013-2020</i>. ',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/97488/9789243506029_spa.pdf',
    },
    {
      referencia: 'Prosperidad Social. (2021). <i>Ruta de atención</i>. ',
      link:
        'http://centrodedocumentacion.prosperidadsocial.gov.co/2021/Micrositio/Prevencion-de-la-Violencia/Infografias/Ruta_de_Atencion.pdf',
    },
    {
      referencia:
        'Organización Panamericana de Salud. (2016). <i>Primera Ayuda Psicológica (PAP): en respuesta a emergencias y desastres</i>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Margarita Leal Cruz',
          cargo: 'Experta técnica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Rey',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
