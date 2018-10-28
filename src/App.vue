<template>
  <div id="app">
    <header>
      <AuthButton :user="user" :doLogin= "doLogin" :doLogout="doLogout" />
    </header>
    <ContentList :contents="contents" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import AuthButton from './components/AuthButton.vue';
import ContentList from './components/ContentList.vue';
import { User, Content } from './classes';

@Component({
  components: {
    HelloWorld,
    AuthButton,
    ContentList,
  },
})
export default class App extends Vue {
  private user = new User('testuser');
  private contents: Content[] = [
    // ダミーコンテンツ
    new Content('1', 'testuser1', 'https://avatars3.githubusercontent.com/u/43309177?s=400&v=4', 'Hello!\nnewline'),
    new Content('2', 'testuser2', 'https://avatars3.githubusercontent.com/u/25644?s=400&v=4', 'Nice!\nnewline'),
  ];

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
