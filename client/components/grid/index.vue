<template>
  <div class="grid">
    <Cell v-for="n in 9" :key="n" :item="{ terrainId: '1' }" />
  </div>
</template>
<script>
import Cell from '../cell/index.vue';

export default {
  components: { Cell },
  props: {
    height: {
      type: Number,
      default: 2,
    },
    width: {
      type: Number,
      default: 2,
    },
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-rows: repeat(3, 64px);
  grid-template-columns: repeat(3, 64px);
}
</style>
