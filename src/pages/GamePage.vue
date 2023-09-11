<template>
  <main>
    <span class="back-button" @click="$router.go(-1)"
      ><font-awesome-icon :icon="['fas', 'chevron-left']"
    /></span>
    <div v-if="loading">
      <h2>{{ content.title }}</h2>
      <section>
        <!-- <div class="type-choice" v-if="section === 0">
          <h3>게임 방식 선택</h3>
          <button @click="typeSelct(0)">토너먼트</button>
          <button @click="typeSelct(1)">조별리그</button>
        </div> -->
        <div class="type-choice" v-if="section === 0">
          <h3>게임 라운드 선택</h3>
          <button @click="numSelect(7)" v-if="content.items.length >= 8">
            8강
          </button>
          <button @click="numSelect(15)" v-if="content.items.length >= 16">
            16강
          </button>
          <button @click="numSelect(31)" v-if="content.items.length >= 32">
            32강
          </button>
          <button @click="numSelect(63)" v-if="content.items.length >= 64">
            64강
          </button>
          <button @click="numSelect(127)" v-if="content.items.length >= 128">
            128강
          </button>
        </div>
      </section>
      <TournamentGame v-if="section === 2" :selectedItem="selectContent" />
    </div>
  </main>
</template>
<script>
import TournamentGame from "@/components/TournamentGame.vue";
export default {
  data() {
    return {
      select: { type: 0, num: 0 },
      section: 0,
      content: {},
      loading: false,
      selectContent: [],
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    typeSelct(type) {
      this.select.type = type;
      this.section = 1;
    },
    numSelect(num) {
      this.select.type = num;
      this.section = 2;
      const arr = this.shuffleArray(this.content.items);
      this.selectContent = arr.slice(0, num + 1);
      console.log(this.selectContent);
    },

    getDetail() {
      console.log(this.$route.query.id);
      this.$axios
        .get(`${this.$store.state.host}/content/detail`, {
          params: {
            id: this.$route.query.id,
          },
        })
        .then((res) => {
          this.content = res.data;
          this.loading = true;
        });
    },
    shuffleArray(sourceArr) {
      // 기존 배열의 복제 생성
      const array = sourceArr.concat();
      // 피셔 예이츠 알고리즘
      const arrayLength = array.length;
      for (let i = arrayLength - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      }

      return array;
    },
  },

  components: {
    TournamentGame,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  background: #000;
}
h2 {
  position: absolute;
  z-index: 50;
  font-family: "comic";
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: $white;
  text-shadow: 0px 0px 20px rgba($color: $black, $alpha: 1);
}
@keyframes fadeUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
.type-choice {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: fit-content;
  h3 {
    color: $yellow;
    margin-bottom: 50px;
    font-size: rem(40);
    animation: fadeUp 1s forwards;
  }
  button {
    all: unset;
    font-family: "nanum";
    display: block;
    margin: 0 auto 50px;
    font-size: rem(50);
    border-radius: 20px;
    background: $white;
    padding: rem(20) rem(100);
    font-weight: 900;
    transform: translateY(10px);
    opacity: 0;
    cursor: pointer;
    box-shadow: 4px 4px 10px rgba($color: $white, $alpha: 0.6);
    &:hover {
      background: $yellow;
    }
    &:last-child {
      margin-bottom: 0;
    }
    @for $i from 1 to 6 {
      &:nth-child(#{$i}) {
        animation: fadeUp 1s #{$i * 0.5}s forwards;
      }
    }
  }
}
.back-button {
  position: absolute;
  left: 5%;
  top: 5%;
  color: $white;
  font-size: rem(50);
  cursor: pointer;
  z-index: 50;
}
</style>
