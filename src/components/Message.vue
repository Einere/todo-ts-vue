<template>
  <div>
    <input type="text" v-model="inputMessage"/>
    <p>{{ message }}</p>
    <button @click="myAlert">alert</button>
    <button @click="childCounter">add</button>

  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Watch, Emit,
} from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  @Prop() public parentMessage!: string;

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
}
</script>

<style scoped></style>
