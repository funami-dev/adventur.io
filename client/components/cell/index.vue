<template>
  <div class="cell" @click="toggleSelector()">
    <img class="terrain" :src="terrainImage" alt="" />
    <div class="selector" v-show="showSelector">
      <SelectorCell :setItem="setItem" :item="{ terrainId: '1' }" />
      <SelectorCell :setItem="setItem" :item="{ terrainId: '2' }" />
    </div>
  </div>
</template>
<script>
import SelectorCell from './selector.vue';

export default {
  components: {
    SelectorCell,
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        terrainId: '1',
      }),
    },
  },
  data() {
    return {
      showSelector: false,
    };
  },
  methods: {
    toggleSelector() {
      this.showSelector = !this.showSelector;
    },
    setItem(value) {
      this.currentItem = value;
    },
  },
  computed: {
    currentItem: {
      set(value) {
        this.currentItem.terrainId = value.terrainId;
      },
      get: function() {
        return this.item;
      },
    },
    terrainImage() {
      return require(`../../assets/terrain/${this.currentItem.terrainId}.svg`); // the module request
    },
  },
};
</script>
<style scoped>
/* TODO das muss eine style components werden damit auch der selector die nutzzen kann */
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
.selector {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(64px);
}
</style>
