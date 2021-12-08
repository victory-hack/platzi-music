<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")
    h1 {{ fullName }}
    button(v-on:click="format") Format

    h1 {{ formatName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      formatName: ''
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    format () {
      this.formatName = this.name.split(' ').join('-').toUpperCase()
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
