<template lang="pug">
  #app
    child
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
      .container
        div
          small {{ searchMessage }}

      .container
        .rows
          .row(v-for="p in pokemons")
            | {{ `${p.name}` }}
</template>

<script>
import trackService from './services/track'
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      pokemons: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.pokemons.length}`
    }
  },
  watch: {
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.pokemons = res
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
