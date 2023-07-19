<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estrategia Rehabilitación Basada en Comunidad
    p.mb-5 La RBC o Rehabilitación Basada en la Comunidad, es una estrategia intersectorial que surge en el marco de los procesos de planeación territorial que hacen parte del lineamiento de participación social en salud y que se define en la Resolución 518 de 2015.
    .row.mb-5
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', style="width: 220px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              p #[b Resolución 518 de 2015]
              p.mb-4 Por la cual se dictan disposiciones en relación con la gestión pública.
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=3_Dq5SHwZ0I" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 #[b Descripción de la RBC:]
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Permite la expresión libre de intereses y necesidades, la identificación de factores de riesgo y generación de factores protectores para implementar acciones conjuntas que propendan por el mejoramiento de la salud y la calidad de vida. De igual forma, estos procesos organizativos sociales trabajan por la defensa y la garantía de los derechos en salud mental, la eliminación de barreras de acceso a los servicios y la confrontación y eliminación de paradigmas frente a los temas de salud social.
    p.mb-5 En los territorios la estrategia se define a partir de los siguientes pasos o procedimientos:
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.align-items-center(titulo="1")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 130px" ,alt='Texto que describa la imagen').m-auto
          .col-lg-8
            p.mb-0 #[b.fs-5 Identificar las personas que dentro de la comunidad estén diagnosticadas con problemas o trastornos mentales o aquellas que tengan un alto riesgo de poder desarrollarlas:]
            p.mb-0 Esta acción es desarrollada por Talento Humano con conocimiento del tema de salud mental y que tenga acceso y manejo a los sistemas de información en salud en el territorio especificado. La información se consulta en las historias clínicas y en las caracterizaciones de población que permiten identificar riesgos.
        .row.align-items-center(titulo="2")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img3.svg', style="width: 280px" ,alt='Texto que describa la imagen').m-auto
          .col-lg-8
            p.mb-0 #[b.fs-5 Acercamiento a la población a través de visitas domiciliarias:]
            p.mb-0 El objetivo es que por lo menos se realicen tres visitas por parte del personas de Talento Humano en salud, en donde se busca identificar la conformación del grupo familiar, redes de apoyo, la o las personas con problemas o trastornos mentales o psicológicos, necesidades, diagnósticos, intereses y factores de riesgo asociados a que la condición, canalización de servicios de atención.
        .row.align-items-center(titulo="3")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', style="width: 280px" ,alt='Texto que describa la imagen').m-auto
          .col-lg-8
            p.mb-0 #[b.fs-5 Formar a las comunidades y entrenarlas en RBC y temas de salud mental:]
            p.mb-0 Se convoca a los equipos básicos de salud de los territorios, líderes, cuidadores y familias para realizar procesos de entrenamiento y sensibilización sobre la estrategia RBC, salud mental, derechos en salud, planes de beneficios en salud y entrenarlos para la identificación temprana de signos, síntomas y factores de riesgo en salud mental.
        .row.align-items-center(titulo="4")
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img5.svg', style="width: 280px" ,alt='Texto que describa la imagen').m-auto
          .col-lg-8
            p.mb-0 #[b.fs-5 Organizar, conformar y/o fortalecer los grupos de apoyo y ayuda mutua:]
            p.mb-0 Estas organizaciones son fundamentales y las comunidades deben conocer la finalidad, funcionamiento y objetivos de estos grupos.
    .row
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img7.svg', style="width: 220px" ,alt='Texto que describa la imagen').m-auto
            .col-lg-8
              p En el siguiente video, se describe la importancia de la RBC en Colombia, según el Ministerio de Salud y Protección Social:
              p.mb-4 #[b Lineamiento de RBC]
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=3_Dq5SHwZ0I" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")

</template>

<script>
export default {
  name: 'Tema2',
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
