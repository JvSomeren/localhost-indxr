<template>
  <div id="app">
    <!-- <header-comp></header-comp> -->

    <main-comp :dirs=dirs></main-comp>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dirs: []
    }
  },
  created() {
    const location = 'http://localhost:8080/indxr.php';

    fetch(location)
      .then(data => data.json())
      .then(res => {
        this.dirs = res;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
</script>

<style lang="scss">
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
