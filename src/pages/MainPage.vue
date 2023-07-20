<template>
  <main v-if="loading">
    <EditorChoice />
    <GameList />
  </main>
</template>

<script>
import EditorChoice from "@/components/EditorChoice.vue";
import GameList from "@/components/GameList.vue";
export default {
  components: { EditorChoice, GameList },
  mounted() {
    this.getContents();
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    getContents() {
      this.$axios.get("http://localhost:3000/api/content").then((res) => {
        this.$store.commit("getContents", [...res.data.list]);
        console.log(res);
        this.loading = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
