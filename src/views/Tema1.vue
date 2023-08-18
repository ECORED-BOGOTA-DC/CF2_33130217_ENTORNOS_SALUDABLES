<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mecanismos de participación en salud mental
    .row.bg-c1
      .col-12
        .p-5
          .row.align-items-center.mb-5(data-aos="fade-right")
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img1.png', style="width: 70px" ,alt='').m-auto
            .col
              p.mb-0 Con la finalidad de comprender el significado de los mecanismos de participación en salud mental, es importante definir qué es la participación social en salud y comprender específicamente qué pasa con la participación a nivel de la salud mental y los mecanismos para su puesta en práctica; es así como en el siguiente video se explicará esta definición:
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/c3tlmvG1nwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 66px" ,alt='')
      .col-auto.bg-c2(style="z-index:1")
        .py-3.px-4
          h3.mb-0.ms-0.ms-lg-2 La garantía de los derechos en salud es una responsabilidad del Estado
    p.mb-5(data-aos="fade-right") Para ello, se han construido mecanismos de participación, a los cuáles se puede acudir en caso de que sean vulnerados los derechos en salud, algunos de ellos son:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Derecho de Petición" :icono="require('@/assets/curso/tema1/img2.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Representa la facultad que se otorga constitucionalmente a todos los ciudadanos para realizar solicitudes basadas en el respeto, ante funcionarios, entidades u organismos del sector salud, ya sea a nivel individual o colectivo.  A través de este mecanismo es posible solicitar información, pedir la prestación de un servicio, realizar quejas y reclamaciones, establecer sugerencias.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img2.png', style="width: 450px" ,alt='').m-auto
      .py-4.py-md-5(titulo="Acción de Tutela" :icono="require('@/assets/curso/tema1/img3.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Es una excelente herramienta para la protección de los derechos fundamentales, que se establece ante los organismos judiciales. En el sector salud ha representado la oportunidad de lograr la atención, servicios y beneficios que están contemplados en el Plan de beneficios en Salud, pero que no se garantizan sino a través de este mecanismo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width: 450px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Ahora bien, los procesos participativos en salud mental buscan fortalecer a las comunidades y los individuos para fomentar el desarrollo social a través de la garantía de los derechos en materia de salud mental, los cuales en Colombia están especificados en la Ley 1616 de 2013.
    .row.mb-5(data-aos="fade-down")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img5.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p Para conocer más a fondo sobre el tema, este enlace le permitirá consultar la Ley, expedida por el Congreso de la República.
              p.mb-4 #[b Ley 1616 de 2013]
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1616-del-21-de-enero-2013.pdf " target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Cabe anotar que la salud mental es entendida como un estado de bienestar que permite que las personas puedan tener interacciones positivas y efectivas, para aportar y participar en escenarios sociales como la familia, la escuela, el trabajo y la comunidad.
        p.mb-0 En materia de mecanismo de participación social en salud, se contemplan los siguientes escenarios, ilustrados en la siguiente figura:
      .col-lg-5(data-aos="fade-left")
        figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 500px" ,alt='').m-auto
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Figura 1]. Mecanismos de participación social en salud
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img6.svg', style="width: 1000px" ,alt='Muestra, mecanismos de participación social, participación ciudadana y participación comunitaria.').m-auto
          figcaption.mt-3 Nota. Ministerio de Salud (2016).
    p.mb-5(data-aos="fade-left") Así mismo, dentro de los escenarios de participación ciudadana y participación comunitaria se ha reglamentado diversos escenarios de participación, como son:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img5.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Servicio de atención a usuarios]
              p.mb-0 Todas las instituciones prestadoras de servicios de salud están obligadas a implementar estos servicios tanto para afiliados como para personas vinculadas al sistema.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img6.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Servicio de Atención a la Comunidad - SAC]
              p.mb-0 Canal destinado a resolver peticiones e inquietudes de la comunidad.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img7.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Sistema de atención e información de usuarios]
              p.mb-0 Todas las instituciones prestadoras de servicios de salud deben garantizar este sistema y velar por la calidad y operatividad del mismo.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/img8.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Atención de las sugerencias de los afiliados]
              p.mb-0 Todas las instituciones prestadoras de servicios de salud, deben garantizar la oportuna canalización de inquietudes, así como la gestión de las mismas.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 También se puede decir que los mecanismos de participación comunitaria son comités de participación comunitaria en salud, COPACOS que se constituyen como espacios de encuentro y concertación entre el estado y las diferentes formas de organización social, estas pueden ser:
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check(style="color: #FF8182")
                    |
                    p.mb-0 #[b Alianza de asociaciones de usuarios.]
                  li.d-flex
                    i.fas.fa-check(style="color: #FF8182")
                    |
                    p.mb-0 #[b Comités de ética hospitalaria.]
                  li.d-flex
                    i.fas.fa-check(style="color: #FF8182")
                    |
                    p.mb-0 #[b Asociaciones de pacientes.]
                  li.d-flex
                    i.fas.fa-check(style="color: #FF8182")
                    |
                    p.mb-0 #[b Veedurías ciudadanas.]
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 66px" ,alt='')
      .col-auto.bg-c2(style="z-index:1")
        .py-3.px-3
          h3.mb-0.ms-0.ms-lg-2 Instancias de participación de las organizaciones de personas con problemas y trastornos mentales, familias y cuidadores
    p(data-aos="fade-right") A nivel nacional, departamental y municipal el Consejo Nacional de Discapacidad, es la instancia de participación por excelencia de las personas con problemas o trastornos mentales. Este consejo fue creado a través de la Política Nacional de Discapacidad y es presidido por el Ministerio de Salud. Este comité permite coordinar acciones de los diferentes sectores que favorezcan los planes de acción en salud mental en los diferentes niveles.
    p.mb-5(data-aos="fade-right") A continuación, se exponen los objetivos, alcances y procesos de participación:
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c4
        .py-3.pe-3
          h4.mb-0 Objetivos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img9.png', style="width: 300px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Para entender los mecanismos de participación en salud mental es importante hacer referencia a cómo las estrategias deben promover los derechos, el liderazgo y la movilización social.
        p Por medio de estas estrategias se abren posibilidades para fortalecer procesos participativos en salud, comprendiendo que el #[b.txt-c1 "fortalecimiento es un proceso que incluye cosas como la toma de conciencia y desarrollo de capacidades que llevan a una participación mayor, a un mayor poder y control de la toma de decisiones y acciones para el cambio"] (Organización Mundial de la Salud, 2012).
        p.mb-0 En la siguiente figura se puede apreciar los objetivos de los procesos de participación social en salud mental:
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Figura 2]. Objetivos de los Procesos de Participación Social en Salud Mental
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img7.svg', style="width: 900px" ,alt='Muestra que los objetivos se enmarcan en la Promoción de La Salud para el desarrollo de habilidades y capacidades a través de la educación a las comunidades que permiten: Generar factores protectores para la salud mental. La eliminación de las barreras de acceso y la  descentralización del poder. La garantía del derecho a la salud.').m-auto
          figcaption.mt-3 Nota. Organización Mundial de la Salud, (2012).
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c4
        .py-3.pe-3
          h4.mb-0 Alcance
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La participación social y sobre todo la participación en temas de salud mental, debe ser incentivada a través de herramientas prácticas que permitan la movilización de las comunidades, de las familias, de los cuidadores y los diferentes sectores que tienen afectación en las políticas y decisiones en temas de salud mental.
        p Para ello, se deben promover estrategias de participación a nivel individual y comunitario que generen empoderamiento personal para tener criterio, capacidad de reflexión y de acción en los temas de salud mental en los territorios.
        p.mb-0 Los niveles de participación individual y comunitaria gestan procesos organizativos que visibilizan los intereses y las necesidades comunes para trabajar conjuntamente en alcanzar un mismo objetivo.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img10.png', style="width: 500px" ,alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c4
        .py-3.pe-3
          h4.mb-0 Procesos de participación social individual y comunitaria
    p(data-aos="fade-right") Los procesos de participación social desde lo individual son retadores y a la vez constituyen la base para actuar en lo colectivo y comunitario; sin embargo, incentivar esta participación requiere de unas habilidades e insumos que tanto el estado, como la sociedad y cada individuo debería fortalecer a lo largo de la vida.
    p.mb-5(data-aos="fade-right") A continuación, se detallan algunos aspectos que se deben trabajar para fortalecer los procesos de participación social individual y comunitaria de acuerdo al lineamiento de participación social en salud mental (ver tabla 1).
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Tabla 1]. Requerimientos para incentivar la participación social en salud
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .tabla-a.color-secundario
          table
            caption Nota. Ministerio de Salud (2015).
            thead
              tr
                th.text-white Factor de riesgo
                th.text-white Factor protector
            tbody
              tr
                td
                  .row
                    .col-12
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Tener seguridad de manifestar intereses y necesidades.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Conocer capacidades y habilidades personales.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Reconocer contexto y cómo influye en la vida de la persona.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Tomar la decisión personal de opinar y ser escuchado(a) en las decisiones que afectan su vida y la de su contexto.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Informarse, capacitarse sobre sus derechos, la participación social y sus diferentes mecanismos entre otros, buscando visibilizar necesidades e intereses e influyendo en la toma de decisiones.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Tener sentido de pertenencia por el entorno que lo(a) rodea, identificando problemas y posibles soluciones.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Influenciar a otras personas para que promuevan procesos participativos en pro de los mismos objetivos y resultados.
                td
                  .row
                    .col-12
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Identificar personas con problemas, necesidades e intereses comunes.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Respetar la libre expresión.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Identificar y promover liderazgos.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Promover alianzas y acuerdos para organizarse en pro de la defensa de sus derechos, a través de la movilización social y la incidencia en la toma de decisiones a nivel comunitario y territorial.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Coordinación entre las instituciones locales, organizaciones y sectores involucrados.
                        li.d-flex
                          i.fas.fa-check(style="color: #FF8182")
                          |
                          p.mb-0 Participar activamente en la definición de problemas, necesidades en salud, específicamente en salud mental, proponiendo soluciones y haciendo veeduría a las acciones desarrolladas a nivel territorial por los diferentes actores e instituciones.
    .row(data-aos="fade-right")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img8.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p Para conocer más a fondo sobre el tema, se puede consultar el siguiente documento para el desarrollo de capacidades dispuesto por el Ministerio de Salud, denominado:
              p.mb-4 #[b Lineamiento de Participación Social en Salud Mental]
              a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Lineamiento-participacion-social-Salud-mental.pdf" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
