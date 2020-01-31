import Cell from './index.vue';

export default { title: 'Cell' };

export const noTerrain = () => ({
  components: { Cell },
  template: `<Cell />`,
});

export const asAComponent = () => ({
  components: { Cell },
  template: `<Cell :item="{ terrainId: '1' }" />`,
});
