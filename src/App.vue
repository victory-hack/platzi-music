<template lang="pug">
  #app
    pm-header

    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
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

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="p in pokemons")
            pm-track(
              :class="{'is-active': p.name === pokemonSelected.name}"
              :track="p"
              @select="setSeleted"
            )

    pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import VcLifeCycle from '@/components/Lessons/LifeCycle.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader,
    VcLifeCycle,
    PmTrack,
    PmLoader
  },
  data () {
    return {
      searchQuery: '',
      pokemons: [],
      person: {
        name: 'victor'
      },
      isLoading: false,
      pokemonSelected: {}
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
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.pokemons = res
          this.isLoading = false
        })
    },
    addProp () {
      // this.person.lastName = 'Canete'
      // this.$set(this.person, 'lastName', 'Canete')
      this.person = Object.assign({}, this.person, { a: 1, b: 2 })
    },
    setSeleted (pokemonSelected) {
      this.pokemonSelected = pokemonSelected
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
