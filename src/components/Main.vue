<template>
  <main>
    <div class="section">
      <div class="container">
        <h3 class="title">Recently</h3>

        <div class="columns">
          <website-card
            class="column is-one-quarter"
            v-for="(dir, index) in recent"
            :dir="dir"
            :key="index"></website-card>
        </div>

        <div class="columns">

        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h3 class="title">Alphabeticly</h3>
        
        <div class="columns is-multiline">
          <website-card
            class="column is-one-third"
            v-for="(dir, index) in alphabetical"
            :dir="dir"
            :key="index"></website-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ['dirs'],
  computed: {
    recent: function() {
      let recents = localStorage.getItem("recents");

      if(recents) {
        recents = recents.split(',');
      }

      return recents;
    },

    alphabetical: function() {
      return this.dirs.sort(this.sort);
    }
  },
  methods: {
    sort(a, b) {
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    }
  },
  created() {

  }
}
</script>

<style lang="scss">

</style>