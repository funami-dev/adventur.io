import Grid from './index.vue';

export default { title: 'Grid' };

export const noProps = () => ({
  components: { Grid },
  template: `<Grid />`,
});

export const fixedGrid = () => ({
  components: { Grid },
  template: `<Grid width="12" height="12" />`,
});
