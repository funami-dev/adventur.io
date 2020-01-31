<template>
  <div class="cell" @click.once="_setItem(item)">
    <img class="terrain" :src="terrainImage" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    setItem: { type: Function },
    item: {
      type: Object,
      default: () => ({
        terrainId: '1',
      }),
    },
  },
  methods: {
    _setItem(value) {
      console.log({ value });
      this.setItem(value);
    },
  },
  computed: {
    terrainImage() {
      return require(`../../assets/terrain/${this.item.terrainId}.svg`); // the module request
    },
  },
};
</script>
<style scoped>
.cell {
  position: relative;
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}
.cell:hover {
  border: 1px solid green;
}
img.terrain {
  width: 70%;
}
</style>
