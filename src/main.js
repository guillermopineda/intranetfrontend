import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook, faBars, faDonate, faGlobeAmericas, faSearch, faSitemap, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
library.add(faAddressBook)
library.add(faBars)
library.add(faTimes)
library.add(faSearch)
library.add(faSitemap)
library.add(faDonate)
library.add(faGlobeAmericas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
