<template lang="pug">
  #app
    pm-header
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
        button(@click='addProp') Add prop

        p {{ person }}

      .container
        .rows
          .row(v-for="p in pokemons")
            | {{ `${p.name}` }}

    pm-footer
</template>

<script>
import trackService from './services/track'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'
export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader
  },
  data () {
    return {
      searchQuery: '',
      pokemons: [],
      person: {
        name: 'victor'
      }
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
    },
    addProp () {
      // this.person.lastName = 'Canete'
      // this.$set(this.person, 'lastName', 'Canete')
      this.person = Object.assign({}, this.person, { a: 1, b: 2 })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
