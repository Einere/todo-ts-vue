<template>
  <div>
    <section class="props-data-watch-computed">
      <input type="text" v-model="inputMessage"/>
      <p>{{ message }}</p>
      <button @click="myAlert">alert</button>
    </section>
    <section class="emit">
      <button @click="childCounter">add</button>
    </section>
    <section class="provide-injected">
      <p>{{ injected }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Watch, Emit, Inject,
} from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  @Prop() public parentMessage?: string;

  private inputMessage: string | null = null;

  get message(): string {
    return `${this.parentMessage}, ${this.inputMessage ? this.inputMessage : ''}`;
  }

  myAlert() {
    alert(this.message);
  }

  @Watch('message')
  watchMessage(value: string, oldValue: string) {
    console.log(`this.message : ${this.message}`);
    console.log(`value : ${value}`);
    console.log(`old value : ${oldValue}`);
  }

  @Emit('counter')
  // eslint-disable-next-line class-methods-use-this
  childCounter() {
    return 1;
  }

  @Inject('provided') readonly injected!: string;
}
</script>

<style scoped></style>
