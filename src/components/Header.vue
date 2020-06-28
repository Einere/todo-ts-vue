<template>
  <header>
    <h1>Todo Ts Vue</h1>
    <nav>
      <router-link :to="{params: {filter: undefined}}">All</router-link>
       |
      <router-link :to="{params: {filter: 'progress'}}">Progress</router-link>
       |
      <router-link :to="{params: {filter: 'done'}}">Done</router-link>
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
