<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Rutas Integrales de Atención en Salud - RIAS
    .row.align-items-center.mb-3
      .col-auto
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
      .col
        p.mb-0 El objetivo de las RIAS es regular las condiciones necesarias para asegurar la integralidad en la atención en Salud para las personas, familias y comunidades por parte de los diferentes integrantes del SGSSS y demás entidades que tengan a su cargo acciones en salud a efectos de contribuir al mejoramiento de los resultados en salud y reducir la carga de la enfermedad. (Ministerio de Salud, 2016).
    p.mb-5 Las rutas que se han establecido son de tres tipos:
    .row.justify-content-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          figure.mb-4
            img(src='@/assets/curso/tema5/img2.png', style="width: 60px" ,alt='Texto que describa la imagen')
          p #[b Ruta de promoción y mantenimiento de la salud]
          p.mb-0 Enfocada al manejo y mitigación del riesgo colectivo y la protección de la salud en general.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          figure.mb-4
            img(src='@/assets/curso/tema5/img3.png', style="width: 60px" ,alt='Texto que describa la imagen')
          p #[b Rutas de grupo de riesgo]
          p.mb-0 Buscan identificar oportunamente factores de riesgo para generar una intervención más rápida.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          figure.mb-4
            img(src='@/assets/curso/tema5/img4.png', style="width: 60px" ,alt='Texto que describa la imagen')
          p #[b Rutas específicas de atención]
          p.mb-0 Estas rutas se enfocan en el abordaje integral de condiciones específicas de salud.
    p.mb-5 El Ministerio de Salud adoptó diversas Rutas Integrales de Atención, entre las que se encuentra la ruta para la población con riesgo o presencia de trastornos mentales y del comportamiento manifiesto debido a uso de sustancias psicoactivas y adicciones.
    .row.mb-5
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img1.svg', style="width: 220px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              p En el siguiente video, se contextualiza un poco sobre las generalidades y principios de las RIAS:
              p.mb-4 #[b Rutas Integrales de Atención en Salud]
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=OQ8PuL4ft1U" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Pensar las RIAS desde la conformación de los grupos de riesgo, permite orientar decisiones a nivel local para dar pertinencia y coherencia a las intervenciones en salud pública. Para cada grupo de riesgo que se ha conformado se definen procesos de atención integral en donde se delimitan las acciones de los diversos sectores que hacen parte de la gestión en la Salud Pública y se focalizan intervenciones a nivel individual y colectivo, con la premisa de que estos grupos de riesgo comparten características.
        p.mb-0 Los dieciséis (16) grupos de riesgo priorizados por el Ministerio de Salud para la elaboración de Rutas Integrales de Atención en Salud son los siguientes (ver tabla 2):
      .col-lg-5
        figure
          img(src='@/assets/curso/tema5/img5.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Tabla 1]. Grupos de riesgo
    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-a.color-secundario
          table
            caption Nota. SENA (2022).
            thead
              tr
                th(width="15%").text-white Número
                th.text-white Nombre del grupo de riesgo
            tbody
              tr
                th 1
                td RIAS para población con riesgo o alteraciones cardio - cerebro - vascular - metabólicas manifiestas.
              tr
                th 2
                td RIAS para población con riesgo o enfermedades respiratorias crónicas.
              tr
                th 3
                td RIAS para población con riesgo o presencia de alteraciones nutricionales.
              tr(style="background-color: #CBE0E3")
                th 4
                td RIAS para población con riesgo o trastornos mentales y del comportamiento manifiestos debido a uso de sustancias psicoactivas y adicciones.
              tr(style="background-color: #CBE0E3")
                th 5
                td RIAS para población con riesgo o trastornos psicosociales y del comportamiento.
              tr
                th 6
                td RIAS para población con riesgo o alteraciones en la salud bucal.
              tr
                th 7
                td RIAS para población con riesgo o presencia de cáncer.
              tr
                th 8
                td RIAS para población materno-perinatal.
              tr
                th 9
                td RIAS para población con riesgo o presencia de enfermedades infecciosas.
              tr
                th 10
                td RIAS para población con riesgo o presencia de zoonosis y agresiones por animales.
              tr
                th 11
                td RIAS para población con riesgo o enfermedad y accidentes laborales.
              tr
                th 12
                td RIAS para población con riesgo o sujeto de agresiones, accidentes y traumas.
              tr
                th 13
                td RIAS para población con riesgo o enfermedades y accidentes relacionados con el ambiente.
              tr
                th 14
                td RIAS para población con riesgo o enfermedades huérfanas.
              tr
                th 15
                td RIAS para población con riesgo o trastornos visuales y auditivos.
              tr
                th 16
                td RIAS para población con riesgo o trastornos degenerativos, neuropatías y auto-inmunes.
    p.mb-5 En el marco de esta clasificación de rutas por grupos de riesgo, se encuentran dos que hacen referencia a salud mental, RIAS para población con riesgo o trastornos mentales y del comportamiento manifiestos debido a uso de sustancias psicoactivas y adicciones y RIAS para población con riesgo o trastornos psicosociales y del comportamiento.
    .row.align-items-center.mb-4
      .col-auto.d-none.d-lg-block.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 66px" ,alt='Texto que describa la imagen')
      .col-auto.bg-c2(style="z-index:1")
        .py-3.px-3
          h3.mb-0.ms-0.ms-lg-2 Problemas y trastornos mentales
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Los problemas mentales inciden en la forma como una persona organiza la información, en cómo piensa, siente y actúa en relación con el mismo, los otros y su entorno, de igual forma el trastorno mental suele ser más común pero de menor prevalencia en el tiempo, el deterioro que producen no es tan significativo para la vida social y personal.
        p Por otro lado, los trastornos mentales producen una alteración leve, moderada o severa en el pensamiento, la percepción de la realidad, las emociones y las relaciones de las personas, su prevalencia en el tiempo es más alta y pueden afectar de forma significativa la funcionalidad de una persona en todas las esferas de su vida. Pueden coexistir varios trastornos de forma simultánea en un mismo paciente.
        p.mb-0 Las RIAS en salud mental están centradas para su orientación operativa en:
      .col-lg-4
        figure
          img(src='@/assets/curso/tema5/img6.png', style="width: 300px" ,alt='Texto que describa la imagen').m-auto
    .row.align-items-end.justify-content-center.mb-5
      .col-auto.m-2
        figure.fig-p1
          img(src='@/assets/curso/tema5/img3.svg', style="width: 90px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.bg-c6
            .px-4.py-3
              p.text-center.mb-0 #[b Personas]
      .col-auto.m-2
        figure.fig-p1
          img(src='@/assets/curso/tema5/img4.svg', style="width: 90px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.bg-c7
            .px-4.py-3
              p.text-center.mb-0 #[b Familias]
      .col-auto.m-2
        figure.fig-p1
          img(src='@/assets/curso/tema5/img5.svg', style="width: 90px" ,alt='Texto que describa la imagen').m-auto
        .row
          .col-12.bg-c8
            .px-4.py-3
              p.text-center.mb-0 #[b Comunidades]
      .col.m-2
        .row
          .col-12.bg-c9
            .px-4.py-3
              p.mb-0 #[b Por momentos del curso de vida de las personas en los diferentes entornos de desarrollo y transformación.]
    p.mb-5 Las RIAS, definen atenciones para población de tipo:
    .row.justify-content-center.mb-5
      .col-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img10.png', style="width: 320px" ,alt='Individuales').m-auto
      .col-auto
        figure
          img(src='@/assets/curso/tema5/img11.png', style="width: 320px" ,alt='Colectivas').m-auto
    p Las RIAS en salud mental deben ser aplicadas de forma obligatoria por todas las entidades territoriales, las EPS, IPS y todas las entidades sectoriales que tengan un papel activo en las actividades de prevención, promoción, mantenimiento de la salud. diagnóstico, tratamiento, rehabilitación y paliación.
    p.mb-5 Dentro de las actividades que contempla la ruta se encuentran:
    .tarjeta.tarjeta--verde.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Población]
              p.mb-0 Caracterización de la población afiliada a los diferentes regímenes identificando: riesgos, ubicación geográfica, oferta de servicios disponibles, características y circunstancias poblacionales de las personas con trastornos mentales, consumo de sustancias psicoactivas y epilepsia en cada uno de los ciclos de vida.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img12.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b ASIS]
              p.mb-0 Participación en el ASIS - Análisis de Situación Actual de Salud convocados los territorios donde se encuentre la población afiliada.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img13.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Redes integrales]
              p.mb-0 Incluir redes integrales de prestadores para la atención de personas con problemas mentales, trastornos mentales, consumo de sustancias psicoactivas y epilepsia, incluyendo cuidadores y familiares.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img14.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Modelos de atención]
              p.mb-0 Inclusión de modelos de atención, estrategias de promoción, prevención y gestión del riesgo, teniendo en cuenta la individualidad de las personas y las características  del entorno, los ciclos de vida, el género y las características de su cultura.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img15.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Riesgo individual]
              p.mb-0 El riesgo individual a través de la articulación de las acciones de los prestadores de servicios en salud y los planes de intervenciones colectivas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img16.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Beneficios]
              p.mb-0 Garantizar acceso a todos los beneficios en salud para las personas con problemas mentales, trastornos mentales, consumo de sustancias psicoactivas y epilepsia: procedimientos, medicamentos, consultas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img17.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b RIA]
              p.mb-0 Todas las personas atendidas en la RIA para personas con problemas mentales, trastornos mentales, consumo de sustancias psicoactivas y epilepsia, en el marco de su evaluación psicosocial, deberán ser valoradas para situaciones de violencia; de igual manera, toda persona en quien se documente violencia interpersonal, basada en género y/o en el marco del conflicto armado, deberá ser tamizada para identificar problemas mentales, trastornos mentales, consumo de sustancias psicoactivas y epilepsia.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema5/img18.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 #[b Para el consumo de sustancias psicoactivas:]
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Las Rutas Integrales de Atención en Salud dentro de las priorización por grupos de riesgo, incluyen #[b.txt-c1 #[i RIAS para población con riesgo o trastornos mentales y del comportamiento manifiestos debido a uso de sustancias psicoactivas y adicciones]], y a los lineamientos establecidos frente a la atención son los especificados en el grupo de problemas y trastornos mentales.

</template>

<script>
export default {
  name: 'Tema5',
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
