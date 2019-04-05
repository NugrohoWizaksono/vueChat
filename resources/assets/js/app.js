
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue').default);

Vue.component('chat-box', require('./components/chat/Chatbox.vue').default);
Vue.component('chat-message', require('./components/chat/Chatmessage.vue').default);
Vue.component('chat-form', require('./components/chat/Chatform.vue').default);

Vue.component('chat-userlist', require('./components/chat/user.vue').default);


const app = new Vue({
    el: '#app'
});
