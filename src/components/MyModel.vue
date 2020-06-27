<template>
  <input type="checkbox" v-model="isChecked" @change="handleClick"/>
</template>

<script lang="ts">
// @Model 대상 상태는 props로 취급된다.
// 즉, MyModel의 isChecked 상태는 부모로부터 받은 prop이다.
// 부모의 리렌더링때 마다 값이 변경될 수 있기 때문에 props를 직접적으로 변경하는 것은 권장되지 않는다.
// 따라서 @Model 대신 @Emit을 이용해 부모의 상태를 조작하는 것이 더 나은 방법이다.

/* export default {
  name: 'MyModel',
  model: {
    prop: 'isChecked',
    event: 'change',
  },
  props: {
    isChecked: Boolean,
  },
}; */

import {
  Vue, Component, Model, Emit,
} from 'vue-property-decorator';

@Component
export default class MyModel extends Vue {
  @Model('change', { type: Boolean }) readonly isChecked!: boolean;

  @Emit('checkboxChanged')
  // eslint-disable-next-line class-methods-use-this
  handleClick(e: MouseEvent) {
    return (e.target as HTMLInputElement).checked;
  }
}
</script>

<style scoped>

</style>
