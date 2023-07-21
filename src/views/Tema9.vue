<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Prevención de consumo de SPA
    .row.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema9/img1.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
      .col
        p.mb-0 Toda forma de violencia debe ser denunciada para activar las rutas para el restablecimiento de derechos de las víctimas ya que en muchas ocasiones las personas por miedo o desconocimiento de los procesos a seguir, prefieren proteger a los victimarios con su silencio. A continuación, se detallan los aspectos claves para la activación de las rutas:
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 #[b ¿El principal objetivo de la prevención de consumo de SPA?]
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Identificar las situaciones de riesgo y grupos vulnerables, así como disminuir la incidencia de contacto temprano con las sustancias psicoactivas, y las repercusiones en el bienestar, desarrollo y progresión hacia patrones de consumo de abuso y dependencia.
    p.mb-5 Son pilares fundamentales en la consecución de esta tarea:
    .row.justify-content-center
      .col-md-8.col-lg.bg-c13.m-2
        .p-3.h-100
          .row
            .col-12
              p.text-center.mb-0 Ofrecer el apoyo y seguimiento que requieren estas poblaciones que presenten la problemática.
      .col-md-8.col-lg.bg-c13.m-2
        .p-3.h-100
          .row
            .col-12
              p.text-center.mb-0 Ofrecer entornos solidarios.
      .col-md-8.col-lg.bg-c13.m-2
        .p-3.h-100
          .row
            .col-12
              p.text-center.mb-0 Fomento de oportunidades, educación y ambientes saludables.
    Separador
    #t_9_1
    .titulo-segundo.color-acento-contenido
      h2 9.1 Diferencia entre abuso, consumo y dependencia
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema9/img2.png', style="width: 550px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-7
        p.mb-0 La línea entre los diferentes niveles de tolerancia y manejo de una sustancia psicoactiva es débil y fácilmente una persona puede pasar del uso, al abuso y dependencia a las SPA. Los factores de riesgo que cada persona identifique, tienen un gran peso en el desencadenante más complejo del consumo, que es la dependencia y es un trastorno mental, que debe ser tratado como una enfermedad y no como un problema individual o social.
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 5]. Diferencias conceptuales frente al uso, abuso y dependencia de SPA
    .row.justify-content-center
      .col-11.col-md-8.col-lg.bg-c14.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema9/img3.png', style="width: 70px" ,alt='Texto que describa la imagen')
          p #[b Dependencia]
          p Se refiere al uso constante de drogas o alcohol a pesar de problemas graves ocasionados por el consumo.
          p.mb-0 Las características incluyen tolerancias y necesidades biológicas y psicológicas de consumo, el abandono de todo tipo de actividades para consumir.
      .col-11.col-md-8.col-lg.bg-c14.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema9/img4.png', style="width: 70px" ,alt='Texto que describa la imagen')
          p #[b Clasificación]
          p.mb-0 #[b Física]: implica un cambio permanente en el funcionamiento biológico del cuerpo y cerebro, generando tolerancia y por  ende requerimiento de dosis mas altas cada vez Psicológica.
      .col-11.col-md-8.col-lg.bg-c14.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema9/img5.png', style="width: 70px" ,alt='Texto que describa la imagen')
          p #[b Abuso]
          p.mb-0 Se refiere al uso de sustancias de manera compulsiva, lo que conduce a problemas graves como ausencias escolares , laborales, consumo de drogas en situaciones indebidas, problemas legales, conflictos interpersonales debido a el consumo.
      .col-11.col-md-8.col-lg.bg-c14.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema9/img6.png', style="width: 70px" ,alt='Texto que describa la imagen')
          p #[b Uso]
          p.mb-0 Se refiere a la utilización aislada, episódica y/u ocasional sin generar dependencia  o problemas de salud. Se definen tres tipos:
          p #[b Experimental]: cuando una persona inicia el uso de una o mas sustancias, una o dos veces  y decide no volverlo hacer.
          p #[b Recreativo]: consumo de forma más regular, usualmente en contextos de ocio, generalmente con amistades o sujetos de confianza.
          p.mb-0 #[b Habitual]: consumo de una droga de preferencia frecuentemente por gusto a la sensación que produce.
      .col-11.col-md-8.col-lg-12
        figcaption Nota. SENA (2022).
    Separador
    #t_9_2
    .titulo-segundo.color-acento-contenido
      h2 9.2. Clasificación de sustancias psicoactivas
    p.mb-5 Las SPA se han clasificado de acuerdo al tipo de estimulación que generan al sistema nervioso central, ya sea estimulando, deprimiendo o perturbando los niveles de conciencia y percepción de la realidad; explicado y ejemplificado esto de la siguiente manera:
    .row.justify-content-center
      .col-9.col-md-6.col-lg-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              figure.mb-4
                img(src='@/assets/curso/tema9/img7.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
              p.text-center #[b ESTIMULANTES]
              p.text-center Sustancias que aceleran y alteran la química y el funcionamiento cerebral, provocando estados de activación, mejoría, excitación e hiperactividad.
              p.text-center Ejemplos
              p.text-center 
      .col-9.col-md-6.col-lg-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              figure.mb-4
                img(src='@/assets/curso/tema9/img7.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
              p.text-center #[b DEPRESORAS]
              p.text-center Drogas que generan letargo, enlentecimiento del funcionamiento sistémico, depresión de las funciones sensoriales y vegetativas; yendo desde desinhibición hasta estupor, coma y depresión respiratoria. 
              p.text-center Ejemplos
              p.text-center Opiáceos (morfina, heroína, codeína), solventes (sustancias volátiles), marihuana en dosis bajas o moderadas.
      .col-9.col-md-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema9/img3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              figure.mb-4
                img(src='@/assets/curso/tema9/img7.png', style="width: 70px" ,alt='Texto que describa la imagen').m-auto
              p.text-center #[b ALUCINÓGENOS]
              p.text-center Drogas que alteran la química y funcionamiento cerebral dando lugar a distorsiones sensoriales que alteran la percepción e interpretación de los estímulos.
              p.text-center Ejemplos
              p.text-center Hongos psilocibes, LSD, algunos derivados del cannabis, PCP (Fenciclidina o polvo de ángel).
    Separador
    #t_9_3
    .titulo-segundo.color-acento-contenido
      h2 9.3. Factores de riesgo y factores protectores
    p.mb-5 Identificar factores de riesgo frente al consumo de sustancias psicoactivas es la puerta de entrada para el desarrollo de acciones para la promoción y prevención a nivel individual y colectivo. A continuación, se detallan los factores de riesgos identificados (ver tabla 5):
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Tabla 5]. Factores de riesgo y de protección frente al consumo de SPA
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-secundario
          table
            thead
              tr
                th.text-white Factores de riesgo
                th.text-white Factores protectores
            tbody
              tr
                td
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Baja tolerancia a la frustración.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Conductas agresivas.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Baja autoestima.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Hogares disfuncionales.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Tensiones en relaciones  Interpersonales.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Antecedentes de consumo de sustancias psicoactivas en la familia.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Bajo nivel socioeconómico.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Opresión y abuso.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Exposición a ambientes autoritarias.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Violencia intrafamiliar.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Mayor acceso a sustancias psicoactivas.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Entornos violentos.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Abuso de licor.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Mal rendimiento escolar o laboral.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Conductas suicidas.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Presión social.
                    li.d-flex
                      i.fas.fa-circle(style="color: #006A76")
                      |
                      p.mb-0 Edad.
                td(style="vertical-align: initial")
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Buen trato.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Empatía.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Entornos saludables.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Habilidades sociales.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Adaptación positiva frente a situaciones de adversidad.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Práctica de deportes.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Hábitos saludables.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Redes de apoyo seguras.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Familias donde se practique el buen trato, el respeto, la comunicación, la confianza y las normas.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Oportunidades y acceso a educación de calidad.
                    li.d-flex
                      i.fas.fa-check(style="color: #FF8182")
                      |
                      p.mb-0 Buena calidad de vida.
    Separador
    #t_9_4
    .titulo-segundo.color-acento-contenido
      h2 9.4. Estrategias
    p.mb-5 Al identificar los factores de riesgo y los factores protectores, es posible pensar en las estrategias para la prevención y mitigación de los riesgos y la prevención de los mismos, así:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema9/img8.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Desarrollar programas]
              p.mb-0 Desarrollo de programas desde un enfoque territorial y sociocultural buscando la prevención y reducción del consumo de sustancias psicoactivas además del abuso de alcohol y tabaco.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema9/img9.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Estimular la participación]
              p.mb-0 Estimular la participación de las comunidades y los padres en los programas de contención y apoyo para esta población.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema9/img10.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Promover el trabajo transversal]
              p.mb-0 Promover el trabajo transversal de los sectores, disciplinas y entidades nacionales para trabajar en soluciones integrales y abordajes desde todos los ámbitos.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema9/img11.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Generar oportunidades]
              p.mb-0 Generar más oportunidades de movilización social y acceso a educación de calidad en los grupos más vulnerables.
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema9/img12.png' alt='AvatarTop')
        .row
          .col-12
            .p-4
              p.text-center #[b Gestionar políticas públicas]
              p.mb-0 Buscar la gestión de políticas públicas que creen el fortalecimiento interinstitucional, la promoción, prevención y tratamiento oportunos que reduzcan los daños.
    Separador
    #t_9_5
    .titulo-segundo.color-acento-contenido
      h2 9.5. Acciones
    p.mb-5 Las acciones están relacionadas con la puesta en marcha de las estrategias, las cuáles pueden ser del nivel individual, familiar, educativo y social comunitario. Estas acciones se formulan a través de la implementación del Plan Nacional de Salud Pública en cada uno de los territorios, incluyendo:
    .tarjeta.tarjeta--verde
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b La prevención]
              p.mb-0 Prevención del consumo a través de programas de educación en escuelas, universidades, familias y comunidades, que busquen el cuidado y desarrollo de entornos saludables.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema9/img13.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b El derecho]
              p.mb-0 Garantizar el derecho a tratamientos oportunos y gratuitos con profesionales capacitados buscando disminuir los daños que genera la dependencia y consumo abusivo de sustancias.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema9/img14.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b La identificación]
              p.mb-0 Identificación de las poblaciones que adquieren patologías mentales secundarias al consumo de sustancias psicoactivas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema9/img15.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b El fortalecimiento]
              p.mb-0 Fortalecimiento de los centros que se encargan de la rehabilitación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema9/img16.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Las campañas]
              p.mb-0 Campañas educativas masivas, que promuevan la inclusión social, disminuyan el estigma y favorezcan la recuperación de los grupos afectados.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema9/img17.png', style="width: 500px" ,alt='Texto que describa la imagen').m-auto

</template>

<script>
export default {
  name: 'Tema9',
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
