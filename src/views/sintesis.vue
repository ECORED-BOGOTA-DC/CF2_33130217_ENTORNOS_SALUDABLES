<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El mejoramiento continuo en salud mental involucra no solo políticas gubernamentales, sino también la participación de la comunidad en todos los procesos de atención integral en salud que se establezcan; por lo que es necesario conocer las estrategias de promoción en salud que se estén aplicando en la actualidad, al igual que los protocolos de manejo, las rutas de atención, las actividades que se deben establecer para la prevención de eventos que afecten la salud y estabilidad mental de la comunidad. Por esto el presente componente, abordó temas significativos y de mucha importancia que se esquematizan a continuación:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
