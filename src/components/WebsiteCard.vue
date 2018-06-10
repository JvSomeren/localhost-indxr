<template>
  <div>
    <div class="card" @click.stop="onClick(dir)">
      <div class="card-image">
        <img src="https://placehold.it/1280x960" alt="tmp">
      </div>
      <div class="card-header">
        <div class="card-header-title">{{ dir }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ['dir'],
  computed: {

  },
  methods: {
    onClick(dir) {
      const storage = localStorage.getItem("recents");
      let recents;

      if(storage) {
        recents = storage.split(',');

        if(recents.indexOf(dir) >= 0)
          recents.splice(recents.indexOf(dir),1);
        else if(recents.length >= 4)
          recents.pop();

        recents.unshift(dir);
        recents.join(',');
      } else {
        recents = dir;
      }

      localStorage.setItem("recents", recents);

      window.location.href = './' + dir;
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
.card {
  cursor: pointer;
}
</style>