import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook, faBars, faBullhorn, faDonate, faExclamationTriangle, faFileAlt, faFileDownload, faFilePdf, faGlobeAmericas, faSearch, faSitemap, faTimes, faUserSlash, faUsersSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router"
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import VueGtag from "vue-gtag";

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
library.add(faBullhorn)
library.add(faExclamationTriangle)
library.add(faFilePdf)
library.add(faFileDownload)
library.add(faFileAlt)
library.add(faUsersSlash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMoment, {
  moment,
}) 
Vue.use(VueGtag, {
  config: { id: "196006653" },
  appName: 'INTRAGN10',
  pageTrackerScreenviewEnabled: true
},router);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
