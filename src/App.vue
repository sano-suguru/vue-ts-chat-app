<template>
  <div id="app">
    <header>
      <AuthButton :user="user" :doLogin= "doLogin" :doLogout="doLogout" />
    </header>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import AuthButton from './components/AuthButton.vue';
import { User } from './classes';

@Component({
  components: {
    HelloWorld,
    AuthButton,
  },
})
export default class App extends Vue {
  private user = new User('testuser');

  private doLogin() {
    // ログアウト処理を実装する
    alert('Login!');
  }

  private doLogout(): void {
    // ログイン処理を実装する
    alert('logout');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
