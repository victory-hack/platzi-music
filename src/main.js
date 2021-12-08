import Vue from 'vue'
import App from './App.vue'
import ChildComponent from './components/childComponent.vue'
// import Movie from './components/movies/movies.vue'

Vue.component('child', ChildComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
