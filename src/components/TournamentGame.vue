<template>
  <section>
    <h2 class="round" v-html="roundName"></h2>
    <ul class="game-items">
      <li>
        <div class="img-wrap" @click="winnerSelect(gameArr[2 * currentRound])">
          <div
            class="img"
            :style="{
              'background-image': `url(http://localhost:3000/${
                gameArr[2 * currentRound].url
              })`,
            }"
          ></div>
          <h2>{{ gameArr[2 * currentRound].name }}</h2>
        </div>
      </li>
      <li>
        <div
          class="img-wrap"
          @click="winnerSelect(gameArr[2 * currentRound + 1])"
        >
          <div
            class="img"
            :style="{
              'background-image': `url(http://localhost:3000/${
                gameArr[2 * currentRound + 1].url
              })`,
            }"
          ></div>
          <h2>{{ gameArr[2 * currentRound + 1].name }}</h2>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    selectedItem: Array,
  },
  data() {
    return {
      currentRound: 0,
      gameArr: this.selectedItem,
      winnerArr: [],
    };
  },
  methods: {
    winnerSelect(item) {
      this.winnerArr.push(item);
      if (this.gameArr.length === 2) {
        return;
      }
      if (this.winnerArr.length === this.gameArr.length / 2) {
        this.gameArr = this.winnerArr;
        this.winnerArr = [];
        this.currentRound = 0;
      } else {
        this.currentRound++;
      }
    },
  },

  computed: {
    roundName() {
      let name;
      if (this.gameArr.length === 4) {
        name = `<b>준결승<b/><br/>${this.currentRound + 1}경기`;
      } else if (this.gameArr.length === 2) {
        name = `<b>결승전<b/><br/>${this.currentRound + 1}경기`;
      } else {
        name = `${this.gameArr.length}강전<br/>${this.currentRound + 1}경기`;
      }
      return name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/images/gameBg.jpg") center center no-repeat;
  background-size: cover;
}
.round {
  position: absolute;
  font-family: "comic";
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) skewX(20deg);
  z-index: 50;
  background: $white;
  border: 10px solid $black;
  padding: 10px 60px;
  text-align: center;
  line-height: 1.2;
}
</style>
