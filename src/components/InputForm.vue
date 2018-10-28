<template>
  <form action="" @submit.prevent="doSend" class="form">
    <textarea
      :disabled="disabled"
      v-model="input"
      @keydown.enter.exact.prevent="doSend">
    </textarea>
    <button type="submit" :disabled="disabled" class="send-button">
      Send
    </button>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component
export default class InputForm extends Vue {
  private input = '';

  @Prop({ type: Boolean, required: true, default: false })
  private disabled!: boolean;

  @Prop(Function)
  private doSend!: () => void;

  @Watch('input')
  private  handleTextChanged(text: string) {
    this.textChanged();
  }

  @Emit()
  private textChanged(): string {
    return this.input;
  }
}
</script>
