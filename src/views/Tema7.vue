<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Estrategia para promoción de la salud mental en Colombia
    .row.bg-c1
      .col-12
        .px-5.pt-5
          p.mb-5(data-aos="fade-right") Como principal objetivo en la promoción de la salud mental está conseguir que la mayoría de la población tenga un desarrollo pleno de sus capacidades y por ello, en el siguiente video se explica la importancia de las estrategias para la promoción en Colombia:
          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/hWObLL3J6Vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_7_1
    .titulo-segundo.color-acento-contenido
      h2 7.1. Plan de acción
    p(data-aos="fade-right") El plan de acción busca identificar factores promotores de resiliencia, para fomentarlos y así fortalecer el desarrollo de esta, proteger la salud mental e impulsar el liderazgo de la comunidad, para la promoción de actividades que permitan el desarrollo pleno de las capacidades de los sujetos, así como también busca identificar aquellos sujetos o comunidades que están en riesgo para prevenir el desarrollo de patologías mentales e intervenir de manera oportuna, para lograr buena salud mental y una participación activa en la comunidad.
    p.mb-5(data-aos="fade-right") Por lo anterior, se recomienda el siguiente plan de acción:
    .tarjeta.tarjeta--verde(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Buenos hábitos de vida]
              p Fomentar el cuidado y enseñar el impacto positivo de la práctica de hábitos  saludables en el desarrollo del potencial pleno de los sujetos; como ejemplo:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check(style="color: #FF8182")
                  |
                  p.mb-0 La promoción de la actividad física y deportes en las comunidades.
                li.d-flex
                  i.fas.fa-check(style="color: #FF8182")
                  |
                  p.mb-0 Prácticas de esparcimiento, espacios de ocio, práctica de relaciones sociales positivas.
                li.d-flex
                  i.fas.fa-check(style="color: #FF8182")
                  |
                  p.mb-0 Garantía de la seguridad alimentaria con dietas balanceadas,  buenos hábitos de sueño.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img1.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Espacios seguros]
              p.mb-0 Crear contextos y espacios  seguros que ofrezcan formación, brinden comprensión y cultiven herramientas necesarias para conservar una estructura mental saludable.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img2.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Hogares saludables]
              p.mb-0 Promoción de redes de educación y apoyo en las comunidades para las madres y padres en la formación de la primera infancia y adolescencia, buscando generar herramientas para generar hogares saludables, donde se  practique el buen trato, la comunicación asertiva y se cultive la resiliencia.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img3.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b La autoestima]
              p.mb-0 Fortalecimiento de autoestima, en espacios que  permitan la expresión, el auto reconocimiento, la identificación de  los intereses propios del sujeto, para así librar  prototipos y expectativas impuestas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img4.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Redes de apoyo]
              p.mb-0 Garantizar buenas redes de apoyo para las comunidades (querer y ser querido).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img5.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Educación en inteligencia emocional]
              p.mb-0 Promover la educación en inteligencia emocional, que  permita desarrollar tolerancia a la frustración y situaciones estresantes, procurando el reconocimiento de los sentimientos y emociones,  sin rotularlos y expresarlos de una forma acertada.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img6.png', style="width: 500px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Liderazgo]
              p.mb-0 Impulsar el liderazgo y la gobernanza de las comunidades para generar mesas de participación donde se tengan en cuenta las necesidades según el ciclo vital de los sujetos y promover la creación de políticas públicas que tengan en cuenta esto.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema7/img7.png', style="width: 500px" ,alt='').m-auto
    Separador
    #t_7_2
    .titulo-segundo.color-acento-contenido
      h2 7.2. Coordinación intersectorial
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img8.png', style="width: 300px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p La coordinación intersectorial según la OPS, #[b.txt-c1 #[i “se expresa en acciones dirigidas al involucramiento paulatino de diferentes actores en el proceso de toma de decisiones, apuntando a la solución efectiva de problemas, para lo cual, es necesario generar espacios adecuados para compartir liderazgos, recursos, líneas estratégicas, oportunidades y realizar una planificación conjunta”]] (2014).
        p La respuesta integral y coordinada de los sectores que determinan en cierta medida la buena salud mental es fundamental, al buscar coaliciones y trabajar en equipo de manera transversal es el mayor objetivo desde el hacer de la promoción y prevención en la salud mental. Abordar las problemáticas desde la intersectorialidad promete entornos y políticas más efectivas pues como ya se mencionó son muchos los factores que influyen en una buena salud mental (desde un entorno familiar y escolar saludable, hasta la vivienda justa, empleo, seguridad alimentaria, cultura, y otros múltiples sectores públicos) (ver figura 3).
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Figura 3]. Coordinación intersectorial
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema7/img1.svg', style="width: 1000px" ,alt='Muestra un puzle entre Gobierno, sociedad civil, sector privado y academia, también el Gobierno de proximidad que tiene protección y participación, participación comunitaria y de actores locales, coordinación entre actores y voluntad política.').m-auto
          figcaption.mt-3 Nota. CEPAL (2019).
    Separador
    #t_7_3
    .titulo-segundo.color-acento-contenido
      h2 7.3. Fortalecimiento de entornos protectores
    .row.mb-5(data-aos="fade-right")
      .col-auto
        figure
          img(src='@/assets/curso/tema7/img7.svg', style="width: 70px" ,alt='').m-auto
      .col
        p.mb-0 Los entornos protectores son ámbitos en los que se cuidan de los niños, niñas y las personas o comunidades en situación de vulnerabilidad, promoviendo la cultura del buen trato, y la tolerancia independientemente de las características o condiciones de cada sujeto. Uno de los objetivos principales de los entornos protectores es asegurar el derecho intrínseco de todos a crecer y desarrollarse plenamente.
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-md-4.pe-0.bg-c10.mb-4.mb-md-0
            .p-4
              h3.mb-0 ¿Cómo fortalecer y gestar entornos protectores?
          .col-md-8
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Reforzar la creación y desarrollo de espacios en los que las personas y comunidades puedan participar y desenvolverse en ecosistemas libres de violencia y enmarcados en la cultura del cuidado y buen trato.
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Promover espacios que acojan e integren la diversidad en todo el sentido, para así atender, las necesidades reales de las personas y comunidades.
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Buscar ámbitos donde se trabaje en la promoción de los derechos humanos y el respeto de estos, sensibilizando a las comunidades en la identificación de situaciones potenciales que representen un riesgo para la integridad emocional, psíquica y física de los sujetos.
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Trabajar en el empoderamiento de comunidades y capacitarlas en cuidado, buen trato, buenos hábitos y en brindar atención adecuada a personas, niños y niñas en situaciones que amenacen su integridad.
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Apostar a programas intersectoriales y  transdisciplinares que fortalezcan estrategias de promoción de la salud y prevención de enfermedades.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img3.svg', style="width: 280px" ,alt='').m-auto
    Separador
    #t_7_4
    .titulo-segundo.color-acento-contenido
      h2 7.4. Inclusión social
    .row.align-items-center.mb-3
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img10.png', style="width: 480px" ,alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        p.mb-0 Se trata de un enfoque donde se promueven las habilidades y la dignidad de las personas que por su identidad y características como el género, edad, ocupación, etnia, religión, nacionalidad, discapacidad y orientación sexual son rechazadas y estigmatizadas. Un gran porcentaje de la recuperación del individuo con problemas de salud mental está determinado por la forma en la que el entorno los acoge; la estigmatización genera exclusión lo cual lleva a una limitación en el sujeto que termina en la desadaptación social. El estigma rotula, es totalizante pues define a la persona bajo un todo. Uno de los principales prejuicios asumido en el imaginario colectivo es la asociación de las personas con problemas mentales y consumo de sustancias a la peligrosidad, homogenizando independientemente de la realidad que hay detrás de ello; no se desconoce la presentación de esta conducta en los sujetos con estos trastornos; sin embargo, la agresividad se da en un porcentaje mínimo, no significativo si se compara con el resto de población general.
    p(data-aos="fade-right") La doble discapacidad que sufren las personas con problemas de salud mental y consumo de sustancias se refiere a la discapacidad que representa la condición, pero además a la inhabilitación que proviene de la sociedad, y de la auto estigmatización de los sujetos debido a esto.
    p.mb-5(data-aos="fade-right") La buena salud mental implica la capacidad de tener un trabajo fructífero, productivo y que permita aportar a la comunidad; por tanto, no puede haber salud mental si no se insertan los estos grupos a la comunidad, si no se promueve el ejercicio de sus habilidades sociales.
    .row.mb-5(data-aos="fade-down")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img4.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p En el siguiente video, se comparte un ejemplo de inclusión social, desde el Servicio Nacional de Aprendizaje:
              p.mb-4 #[b Generalidades de inclusión social SENA]
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=4folbQz5sh8" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-md-4.pe-0.bg-c10.mb-4.mb-md-0
            .p-4
              h3.mb-0 ¿Cómo hacer para promover la inclusión social sin promover el paternalismo?
          .col-md-8
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Promover  empleos remunerados que permitan independencia económica (ya que se ha visto en estudios que esta independencia se asocia en gran medida al desarrollo de un plan de vida).
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Educar a las comunidades en todos los niveles, para generar la resignificación y comprensión de lo que es padecer una enfermedad mental o consumo de sustancias.
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Crear espacios donde se puedan compartir las experiencias personales, donde se pueda hablar libremente sin temor al estigma o rechazo (el hablar no solo es terapéutico para el que habla sino que ayuda a la sensibilización).
              li.d-flex
                i.fas.fa-circle(style="color: #FF8182")
                |
                p.mb-0 Buscar apoyo en los medios de comunicación para sensibilizar  y difundir información, historias, experiencias de recuperación, de convivencia sana en las personas con trastornos de la salud mental o consumo de sustancias  siempre desde una visión en positivo.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img5.svg', style="width: 280px" ,alt='').m-auto
    .row
      .col-12.bg-c3(data-aos="fade-left")
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/img6.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p Con el siguiente video, se explica el concepto de la Inclusión Social como estrategia de la República:
              p.mb-4 #[b ¿Qué es la inclusión social?]
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=seOpvrzBsms" target="_blank" type="application/pdf")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")

</template>

<script>
export default {
  name: 'Tema7',
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
