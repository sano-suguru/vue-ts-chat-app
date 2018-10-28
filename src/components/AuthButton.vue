<template>
  <div v-if="user" key="login">
    [{{ user.name }}]
    <button type="button" @click="doLogout">
      ログアウト
    </button>
  </div>
  <div v-else key="logout">
    <button type="button" @click="doLogin">
      ログイン
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { User } from '../classes';

@Component
export default class AuthButton extends Vue {
  @Prop({ type: User, required: true })
  private user!: User;

  @Prop({ type: Function, required: true })
  private doLogin!: () => void;

  @Prop({ type: Function, required: true })
  private doLogout!: () => void;
}
</script>
