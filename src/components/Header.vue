<template>
  <header>
    <h1>Todo Ts Vue</h1>
    <nav>
      <router-link to="/">All</router-link>
       |
      <router-link to="/progress">Progress</router-link>
       |
      <router-link to="/done">Done</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style scoped>

</style>
