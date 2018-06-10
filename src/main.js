import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false;

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import WebsiteCard from './components/WebsiteCard';

Vue.component('header-comp', Header);
Vue.component('main-comp', Main);
Vue.component('footer-comp', Footer);
Vue.component('website-card', WebsiteCard);

let Base = Vue.component('app', App);

Base = new Base({
  el: '#app'
});
