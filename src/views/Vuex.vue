<template>
    <div>
      <h1>vuex practice</h1>
      <section>
        <h2>myCount</h2>
        <p>{{ myCount }}</p>
        <label for="unit">단위</label>
        <input type="number" id="unit" v-model.number="unit"/>
        <button @click="increaseCount">+</button>
        <button @click="decreaseCount">-</button>
      </section>

      <section>
        <h2>foo</h2>
        <label for="foo">foo</label>
        <input type="text" id="foo" @input="changeFoo">
        <p>{{ $store.getters['moduleA/foo'] }}</p>
      </section>

      <section>
        <h2>bar</h2>
        <label for="bar">bar</label>
        <input type="text" id="bar" @input="changeBar">
        <p>{{ $store.getters['moduleB/bar'] }}</p>
      </section>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Vuex extends Vue {
  private unit = 1;

  get myCount() {
    return this.$store.getters.count;
  }

  increaseCount() {
    this.$store.dispatch('addCount', this.unit);
  }

  decreaseCount() {
    this.$store.dispatch('addCount', -this.unit);
  }

  changeFoo(e: Event) {
    if (e.target) this.$store.dispatch('moduleA/changeFoo', (e.target as HTMLInputElement).value);
  }

  changeBar(e: Event) {
    if (e.target) this.$store.dispatch('moduleB/changeBar', (e.target as HTMLInputElement).value);
  }
}
</script>

<style scoped>

</style>
