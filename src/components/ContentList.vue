<template>
  <transition-group name="chat" tag="div" class="list content">
    <section v-for="{ key, name, image, message } in contents" :key="key" class="item">
      <div class="item-image">
        <img :src="image" width="40" height="40">
      </div>
      <div class="item-detail">
        <div class="item-name">{{ name }}</div>
        <div class="item-message">
          <nl2br tag="div" :text="message"/>
        </div>
      </div>
    </section>
  </transition-group>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Content } from '../classes';
import { VueConstructor } from 'vue';
import Nl2br from 'vue-nl2br';

@Component({components: { Nl2br }})
export default class ContentList extends Vue {
  @Prop({ type: Array, required: true, default: () => [] })
  private contents!: Content[];
}
</script>
