<template>
  <div>
    {{ receivedMessage }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bus from '@/components/Bus.ts';

@Component
export default class BusB extends Vue {
  private bus: Vue = Bus;

  private receivedMessage = '';

  created() {
    this.bus.$on('sendMessage', (message: string) => { this.receivedMessage = message; });
  }
}
</script>

<style scoped>

</style>
