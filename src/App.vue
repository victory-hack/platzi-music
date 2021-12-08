<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          div
            small {{ searchMessage }}

      .container
        .columns
          .column(v-for="t in tracks") {{ `${t.name} - ${t.artista}` }}
</template>

<script>
const tracks = [
  { name: 'Muchacha', artista: 'Luis Alberto Spinetta' },
  { name: 'Hoy aca en el baile', artista: 'El pepo' },
  { name: 'I was made for loving you', artista: 'Kiss' }
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
