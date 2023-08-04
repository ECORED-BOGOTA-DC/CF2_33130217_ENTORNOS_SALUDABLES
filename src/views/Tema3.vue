<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Grupos de apoyo y de ayuda mutua o autoayuda
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-7
        p Los grupos de apoyo y de ayuda mutua han sido, en el ámbito de la salud mental, espacios significativos para quienes los conforman, lugares de encuentro, que por un lado propenden por los procesos de psicoeducación y por otro lado, estos grupos permiten la generación de conversaciones que se convierten en alternativas terapéuticas sin apoyo profesional, pero que representan grandes beneficios.
        p.mb-0 A continuación, se exponen los conceptos de Grupos de apoyo y Grupos de ayuda mutua, con el propósito de que se conozca su finalidad y diferencias:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Grupos de apoyo" :icono="require('@/assets/curso/tema3/img1.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Son espacios de encuentro donde las personas con trastornos o problemas mentales o psicológicos, asisten para entender su enfermedad mental a través de procesos psicoeducativos que permiten resolver inquietudes, entender el manejo y forma de abordar sus necesidades. Estos grupos son dirigidos por talento humano en salud, profesional en temas de salud mental, sin embargo los encuentros permiten la construcción de aprendizajes mutuos a partir de la experiencias de las personas que asisten.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img2.png', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
      .py-4.py-md-5(titulo="Grupos de ayuda mutua o autoayuda" :icono="require('@/assets/curso/tema3/img2.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Son espacios donde confluyen personas que comparten experiencias de vida, diagnósticos y objetivos comunes frente a la salud mental, para buscar apoyo, conversar y entender desde la humanidad compartida que su sufrimiento, también es el sufrimiento de otros. Estos grupos no tienen la orientación de un profesional en salud mental.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img3.png', style="width: 450px" ,alt='Texto que describa la imagen').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 #[b Tanto los grupos de apoyo como los de ayuda mutua y autoayuda tienen como objetivo:]
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Ayudar a que las personas con problemas o trastornos en salud mental puedan romper con el estigma de la enfermedad mental, fomentando un estado positivo de su salud, permitir que las personas tengan conversaciones difíciles acerca de sus miedos, emociones y sentimientos y de esta forma logren encontrar caminos para gestionarlos. De igual forma, los grupos de apoyo brindan la posibilidad de tener el apoyo de un profesional dispuesto a brindar psicoeducación, orientación y seguimiento de casos.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img4.png', style="width: 280px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        p Los grupos de apoyo hacen parte de las actividades de promoción y prevención dispuestas a través del Plan Obligatorio de Salud - POS y del Plan de Intervenciones Colectivas PIC, los pacientes tienen la libertad de elegir de hacer parte de los grupos de ayuda y las intervenciones se basan en procesos psicoeducativos dirigidos a las personas diagnosticadas, las familias y cuidadores.
        p.mb-0 Los grupos de ayuda mutua y/o autoayuda, son liderados por personas de los grupos y pueden solicitar apoyo de profesionales de la salud para resolver situaciones particulares, su estructura y funcionamiento es menos formal que los grupos de ayuda, en términos de los tiempos de las reuniones, temas a tratar y la forma de abordarlos, que por lo general se realiza a través de la narrativa oral de los participantes, quienes hablan de sus intereses, necesidades, dolores, miedos y manejo de la enfermedad en general.
      

</template>

<script>
export default {
  name: 'Tema3',
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
