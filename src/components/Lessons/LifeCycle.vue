<template lang="pug">
  .container
    img(src="./../../assets/logo.png")
    h1 Ciclo de Vida
</template>

<script>

export default {
  name: 'life-cycle',
  created () {
    console.log('INFO: Created...')
    // interactuar con una API
    // aun no puedo acceder al html (no esta montado)
  },
  mounted () {
    console.log('INFO: Mounted...')
    // ya puedo acceder a componentes html
  }
}
</script>