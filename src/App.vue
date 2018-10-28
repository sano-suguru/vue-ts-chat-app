<template>
  <div id="app">
    <header>
      <AuthButton :user="user" :doLogin= "doLogin" :doLogout="doLogout" />
    </header>
    <ContentList :contents="contents" />
    <InputForm :disabled="false" @text-changed="textChanged" :doSend="doSend" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import AuthButton from './components/AuthButton.vue';
import ContentList from './components/ContentList.vue';
import InputForm from './components/InputForm.vue';
import { User, Content } from './classes';

@Component({
  components: {
    HelloWorld,
    AuthButton,
    ContentList,
    InputForm,
  },
})
export default class App extends Vue {
  private user = new User('testuser');
  private contents: Content[] = [
    // ダミーコンテンツ
    new Content('1', 'testuser1', 'https://avatars3.githubusercontent.com/u/43309177?s=400&v=4', 'Hello!\nnewline'),
    new Content('2', 'testuser2', 'https://avatars1.githubusercontent.com/u/774501?s=200&v=4', 'Nice!\nnewline'),
  ];
  private input = '';

  private doLogin() {
    // ログアウト処理を実装する
    alert('Login!');
  }

  private doLogout(): void {
    // ログイン処理を実装する
    alert('logout');
  }

  private textChanged(text: string): void {
    this.input = text;
  }

  private doSend(): void {
    // 送信機能を実装する
    alert(JSON.stringify({
      user: this.user,
      input: this.input,
    }));
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
.header {
  background: #3ab383;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  color: #fff;
}
.content {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 600px;
}
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 80px;
  width: 100%;
  background: #f5f5f5;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  width: calc(100% - 6em);
  resize: none;
}
.list {
  margin-bottom: 100px;
}
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}
.item-image img {
  border-radius: 20px;
  vertical-align: top;
}
.item-detail {
  margin: 0 0 0 1.4em;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-right: 12px solid #deefe8;
}
.send-button {
  height: 4em;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}
</style>
