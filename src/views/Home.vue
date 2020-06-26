<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Message :parent-message="parentMessage" @counter="counter"/>
    <p>count : {{count}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import Message from '@/components/Message.vue';

@Component({
  components: { Message },
})
export default class Home extends Vue {
  private parentMessage = 'hello';

  private count = 0;

  // eslint-disable-next-line class-methods-use-this
  counter(n: number) {
    console.log('parent counter call!', n);
    this.count += n;
  }

  @Provide() provided = 'provided';
}
</script>
