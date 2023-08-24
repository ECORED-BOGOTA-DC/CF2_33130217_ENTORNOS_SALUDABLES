<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Primeros Auxilios Psicológicos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: 280px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p La Red Nacional para el Estrés Traumático Infantil y el Centro Nacional de Trastorno de Estrés Postraumático (2006), plantean que los Primeros Auxilios Psicológicos (PAP) están diseñados para reducir a corto y largo plazo la angustia inicial producida por eventos traumáticos y para promover el funcionamiento adaptativo y las habilidades de afrontamiento. Los principios y las técnicas de los PAP son cumplir con cuatro requisitos básicos:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Se aplican en el marco de la evidencia resultante de la investigación científica sobre el riesgo y la capacidad de recuperación después de un trauma.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Son aplicables y prácticos en el ambiente real.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Son apropiados para todas las etapas de desarrollo a través de la vida.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Permiten adaptaciones frente a las particularidades culturales.
    .row(data-aos="fade-down")
      .col-12.bg-c3
        .px-4.pt-4.pb-4.pb-lg-0
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img1.svg', style="width: 220px" ,alt='').m-auto
            .col-lg-8
              p En el siguiente documento la Organización Panamericana de la Salud, dispuso información relacionada con la presente temática; en respuesta a emergencias y desastres, apoyando a las personas tras un incidente crítico.
              p.mb-4 #[b Primera Ayuda Psicológica (PAP)]
              a.boton.color-acento-botones.texto-blanco(href="https://www.colombiaaprende.edu.co/sites/default/files/files_public/2021-05/Juntos%20m%C3%A1s%20fuertes_.pdf" target="_blank")
                span(style="color: #12263F !important") Enlace
                i.fas.fa-file-download(style="color: #12263F !important")
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1. Descripción
    p(data-aos="fade-right") Los Primeros Auxilios Psicológicos, al igual que los primeros auxilios en una emergencia médica, se aplican a personas que han sufrido o están pasando por una crisis emocional o psicológica y son tan importantes en su aplicación para lograr la regulación en el momento, pero también para prevenir condiciones psicológicas posteriores, derivadas del trauma que la experiencia pueda generar.
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La crisis es una condición psicológica que se deriva del desborde emocional que una persona puede presentar ante una situación particular.
        p.mb-0 Es importante tener presente que no todas las personas manejan sus recursos emocionales y psicológicos de la misma forma; por tanto, los desencadenantes son diversos como la misma diversidad humana. Aquí lo importante es entender que a pesar de la desregulación, todas las personas cuentan con insumos propios, experiencia y aprendizaje, que pueden ayudar a superar la crisis. Cuando esto no sucede de forma natural, la aplicación de los PAP son necesarios y constituyen un factor protector frente a la aparición de traumas posteriores, que pueden incluso hacerse visibles a mediano y largo plazo. Los PAP representan una ayuda in situ altamente efectiva.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img2.png', style="width: 500px" ,alt='').m-auto
    .row.align-items-center
      .col-lg-7.bg-c5.mb-4.mb-lg-0(data-aos="fade-right")
        .row.align-items-center
          .col-lg-8.p-4.p-lg-0
            p.mb-0.ms-0.ms-lg-4 Cabe resaltar que los PAP pueden ser aplicados por cualquier persona con formación para ello, sin requerir de una experticia profesional. Su uso está recomendado para situaciones de:
          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/img2.svg', style="width: 170px" ,alt='').m-auto
      .col-lg-5(data-aos="fade-left")
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Duelo.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Violencia intrafamiliar.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Violencia urbana.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Emergencia.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Desastres naturales.
          li.d-flex
            i.fas.fa-check(style="color: #FF8182")
            |
            p.mb-0 Impactos por exposición a situaciones de dolor extremo.
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2. Etapas
    p.mb-5(data-aos="fade-right") El proceso inicia con la activación de una ruta en casos de crisis, que siempre conecta con tres momentos:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="Observar")
        .col-12
          .p-4
            p Clave para determinar las condiciones del entorno y debe garantizar que la persona identifique:
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Condiciones de seguridad del entorno]: identificar peligros o riesgos que la situación haya desencadenado o que hagan parte del entorno y puedan poner en peligro la vida de la persona afectada.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Determinar necesidades básicas urgentes para ser atendidas]: sangrados, convulsiones, la persona sin ropa o expuesta de alguna manera que pueda generar discriminación por parte de observadores, si existe alguna discapacidad física o mental, si pertenece a algun grupos étnico o religioso que requerirá una atención especial de acuerdo a sus creencias.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Gravedad de la crisis]: determinar cuál es el nivel de gravedad de una crisis y esta abre el camino hacia el tipo de intervención para saber si se requiere aplicar los PAP o si es necesario activar una ruta distinta de atención.
      .row(titulo="Escuchar")
        .col-12
          .p-4
            p A través de la escucha activa se logra conectar con los sentidos, con las emociones. Escuchar es la mejor forma de generar empatía.
            p #[b Acercamiento: ]
            ul.lista-ul
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Preséntese con su nombre y el de la organización que representa (solo en caso de que así sea).
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Exprese su intención de ayuda y escuche si la persona quiere recibirla.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Busque un lugar tranquilo y seguro para la conversación.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Haga todo lo posible para que la persona se sienta cómoda, sin saturar de información o exceso de confianza.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Ofrézcale agua, ayúdele a acomodarse.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Proteja a la persona de cualquier peligro.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Proteja la privacidad de la persona.
            p #[b Pregunte por la necesidad de la persona afectada:]
            ul.lista-ul
              li.d-flex
                i.fas.fa-circle(style="color: #006A76")
                |
                p.mb-0 Usted puede estar pensando que la persona requiere cierto apoyo, pero la persona puede expresar algo totalmente distinto y se debe conectar con eso. Llamar a un familiar, ir al baño, estar sola, un abrazo, comer.
              li.d-flex
                i.fas.fa-circle(style="color: #006A76")
                |
                p.mb-0 Ayúdele a establecer prioridades ya que la persona afectada puede no ver muchas cosas que el otro si ve.
            p #[b Permita generar tranquilidad:]
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Permanezca cerca.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 No presione ninguna situación.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Permita que la persona hable a su ritmo y de lo que quiera hablar, no la presione con preguntas.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Escuche y guarde silencio si la persona decide hablar.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Utilice un tono de voz suave, lento y respire de forma equilibrada para que la persona siga el patrón de conducta.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 Mostrarle a la persona afectada que se encuentra a salvo, que usted está allí para ayudar.
      .row(titulo="Conectar")
        .col-12
          .p-4
            p La conexión se establece desde la necesidad y se debe contemplar:
            ul.lista-ul
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Necesidades básicas]: como refugio, alimentos, agua, higiene personal.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Necesidades de salud]: si requiere servicios de salud prioritarios debe comunicarse con las líneas de emergencia de cada ciudad y solicitar el apoyo.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Información veraz]: entregar información clara de lo ocurrido, de sus derechos, del contexto y de lo que puede esperar.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Gestión con las redes de apoyo]: facilitar medios para conectar con su familia o redes cercanas.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Apoyar según su cultura y particularidad]: contactar con su comunidad, respetar sus creencias, tratar de apoyar en el marco de lo que el otro necesita desde su espiritualidad.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Autonomía]: hacer partícipes a las personas de las decisiones, de las ayudas teniendo en cuenta que cada crisis es distinta y que no se debe violentar a la persona afectada tomando decisiones que puedan desregular más.
              li.d-flex
                i.fas.fa-check(style="color: #FF8182")
                |
                p.mb-0 #[b Recuperar el control en el momento y hacia delante]: el objetivo principal es entregar herramientas para que las persona logren adaptarse y regulen sus emociones, poniendo en práctica herramientas de afrontamiento.
            p En la siguiente figura, se visualiza algunas herramientas de afrontamiento:
            .row
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Afrontamiento
                  .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          figure
            img(src='@/assets/curso/tema4/img4.svg', style="width: 480px" ,alt='Comprender que todos necesitan ayudan.').m-auto

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    modal1: false,
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
