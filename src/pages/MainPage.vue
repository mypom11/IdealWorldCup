<template>
  <main v-if="loading">
    <EditorChoice @share="getShare" />
    <GameList @share="getShare" />
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
      this.$axios.get(`${this.$store.state.host}/content`).then((res) => {
        console.log(res);
        this.$store.commit("getContents", [...res.data.list]);
        this.loading = true;
      });
    },

    getShare(id) {
      let textArea = document.createElement("textarea");
      textArea.value = `${this.$store.state.host}/game?id=${id}`;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand("copy")
          ? res(this.$toast.info("게임 주소가 복사되었습니다."))
          : rej();
        textArea.remove();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
