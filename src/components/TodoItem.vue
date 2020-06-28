<template>
    <article>
      <input type="checkbox" :checked="myStatus" @change="toggleStatus">
      <span>{{ title }}</span>
      <button type="button" @click="removeTodoItem">X</button>
    </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ActionEnum } from '@/store/storeTypes';

@Component
export default class TodoItem extends Vue {
  @Prop() private readonly id!: number;

  @Prop() private readonly title!: string;

  @Prop() private readonly status!: boolean ;

  private myStatus = this.status;

  toggleStatus() {
    this.myStatus = !this.myStatus;
    this.$store.dispatch(`todoModule/${ActionEnum.setStatus}`, {
      id: this.id,
      status: this.myStatus,
    });
  }

  removeTodoItem() {
    console.log(`[${this.title}] removed!`);
  }
}
</script>

<style scoped>

</style>
