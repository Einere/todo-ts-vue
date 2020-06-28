<template>
  <div>
    <input type="text" v-model="busMessage">
    <button @click="clickHandle">send message</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bus from '@/components/Bus/Bus.ts';

@Component
export default class BusA extends Vue {
  private bus: Vue = Bus;

  private busMessage = '';

  clickHandle() {
    console.log('BusA', this.busMessage);
    this.bus.$emit('sendMessage', this.busMessage);
  }
}
</script>

<style scoped>

</style>
