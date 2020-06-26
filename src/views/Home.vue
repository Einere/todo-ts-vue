<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Message :parent-message="parentMessage" @counter="counter"/>
    <p>count : {{ count }}</p>
    <MyModel v-model="isChecked" @checkboxChanged="handleCheckboxChange" />
    <p v-if="isChecked">checked!</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import Message from '@/components/Message.vue';
import MyModel from '@/components/MyModel.vue';

@Component({
  components: { Message, MyModel },
})
export default class Home extends Vue {
  private parentMessage = 'hello';

  private count = 0;

  private isChecked = false;

  // eslint-disable-next-line class-methods-use-this
  counter(n: number) {
    console.log('parent counter call!', n);
    this.count += n;
  }

  @Provide() provided = 'provided';

  handleCheckboxChange(isChecked: boolean) {
    this.isChecked = isChecked;
  }
}
</script>
