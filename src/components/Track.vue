<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="'https://cdn.traction.one/pokedex/pokemon/' + pokemon.id +'.png'")
    .card-content
      .media
        .media-content
          p.title.is-6.is-clickable(@click="selectPokemon(pokemon)")
            strong {{ pokemon.name }}
          p.subtitle.is-6
            strong # {{ pokemon.id }}
          p.subtitle.is-6(v-for="t in pokemon.types")
            | *  {{ t.type.name }}
</template>

<script>
import trackService from '@/services/track'
export default {
  props: {
    track: { type: Object, requiered: true }
  },
  data () {
    return {
      pokemon: { }
    }
  },
  mounted () {
    this.getPokemonDetail()
  },
  watch: {
    pokemon: function (val) {
      console.log('Watcher: ', val)
      this.pokemon = val
    }
  },
  methods: {
    getPokemonDetail () {
      trackService.findById(this.track.url)
        .then(res => {
          this.pokemon = res
        })
    },
    selectPokemon (pokemonSelected) {
      this.$emit('select', pokemonSelected)
    }
  }
}
</script>