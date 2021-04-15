// JS
import './js/';

// CSS (example)
import './assets/css/main.css'

// SCSS
import './assets/scss/main.scss';


// Vue
import Vue from 'vue';
// window.Vue = require('vue');
// // import store from './store/store';

// Vue components global register
Vue.component('appmenu', require('./components/menu/Menu.vue').default);
Vue.component('App-MenuLevel', require('./components/menu/MenuLevel.vue').default);
Vue.component('App-MenuSubLevel', require('./components/menu/MenuSubLevel.vue').default);


// // Vue.config.devtools = false;
// Vue init
const app = new Vue({
	el: '#app',

});

// CSS - libPlugins
// import '../node_modules/swiper/css/swiper.min.css';
// import '../node_modules/magnific-popup/dist/magnific-popup.css';