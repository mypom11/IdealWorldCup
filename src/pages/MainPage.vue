<template>
  <main>
    <EditorChoice />
    <GameList />
  </main>
</template>

<script>
import EditorChoice from "@/components/EditorChoice.vue";
import GameList from "@/components/GameList.vue";
export default {
  components: { EditorChoice, GameList },
  contents: [
    {
      id: "1",
      title: "~~이상형 월드컵",
      desc: "......",
      bg: ".",
      eidtor: false,
      public: true,
      pw: "",
      maker_id: "",
      item_count: 1,
      popular_count: 2,
      video: false,
      items: [
        {
          name: "",
          url: "",
          selected: 0,
        },
      ],
    },
  ],
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
</style>
