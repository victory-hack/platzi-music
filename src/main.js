import Vue from 'vue'
// import App from './App.vue'
import Movie from './components/movies/movies.vue'

new Vue({
  el: '#app',
  render: h => h(Movie)
})
