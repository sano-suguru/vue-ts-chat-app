import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyCzO8O9VO0NB0JMaCWS9exjuUi63iYhYAM',
  authDomain: 'vue-ts-chat-app.firebaseapp.com',
  databaseURL: 'https://vue-ts-chat-app.firebaseio.com',
  projectId: 'vue-ts-chat-app',
  storageBucket: 'vue-ts-chat-app.appspot.com',
  messagingSenderId: '410550602386',
};
firebase.initializeApp(config);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
