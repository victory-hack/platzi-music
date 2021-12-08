<template lang="pug">
  #app
    body
      .container
          .container-img
              img(src="./assets/img.jpg" class="container-img--responsive")
          h2(class="title") Registro estación Platzi

          .container-element
              label(for="name" class="container-label") Nombre
              input(type="text" id="name" name="name" class="container-input")
          .container-element
              label(for="lastname" class="container-label") Apellido
              input(type="text" id="lastname" name="lastname" class="container-input")
          .container-element
              label(for="role" class="container-label") Cargo
              input(type="text" id="role" name="role" class="container-input")
              
          .container-submit
              button(class="container-btn") Enviar
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
