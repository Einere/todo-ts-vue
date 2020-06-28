<template>
  <form @submit.prevent="handleSubmit">
    <label for="todo-title">title</label>
    <input type="text" id="todo-title" v-model="todoTitle"/>
    <button type="submit">+</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ActionEnum } from '@/store/storeTypes';

@Component
export default class TodoInput extends Vue {
    private readonly todoTitle: string | null = null;

    handleSubmit() {
      this.$store.dispatch(`todoModule/${ActionEnum.addTodo}`, {
        title: this.todoTitle,
      });
    }
}
</script>

<style scoped>

</style>
