<template>
  <main>
    <article>
      <div class="img-wrap">
        <div
          class="img"
          :style="{
            'background-image': `url(${$store.state.imgHost}/${item.url})`,
          }"
        ></div>
      </div>
      <div class="text-wrap">
        <div class="text">
          <div class="label">Rank <span>1</span></div>
          <h2>{{ item.name }}</h2>
          <div class="textarea">
            <textarea
              placeholder="댓글을 입력해주세요"
              v-model="comment"
            ></textarea>
            <button @click="setComment">Comment</button>
          </div>
        </div>
        <div class="button-wrap">
          <button @click="$router.push({ name: 'Main' })">메인 페이지</button>
          <button
            @click="
              $router.push({
                name: 'GameRanking',
                query: { id: `${$route.query.id}` },
              })
            "
          >
            랭킹 보기
          </button>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    setComment() {
      if (this.comment === "") {
        this.$toast.error("댓글을 작성해주세요.");
        return;
      } else {
        const id = this.$route.query.id;
        this.$axios
          .post(`${this.$store.state.host}/content/comment`, {
            id,
            comment: {
              id: "test",
              detail: this.comment,
              selected: this.item.name,
            },
          })
          .then(() => {
            this.$router.push({ name: "GameRanking", query: { id } });
          });
      }
    },
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/variables.scss";

main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  background: url("~@/assets/images/pop.jpg") center center no-repeat;
  background-size: cover;
  article {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: center;
    perspective: 500px;
  }
}
.img-wrap {
  cursor: pointer;
  position: relative;
  height: 65vh;
  width: 25vw;
  text-align: center;
  margin-bottom: 50px;
  transform: rotateY(20deg);
  .img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: content-box;
    z-index: 3;
    width: 100%;
    height: 100%;
    border: 20px solid $white;
    background-color: $black;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 6px 6px 6px rgba($color: #000000, $alpha: 0.5);
  }
}
.text-wrap {
  position: relative;
  transform: rotateY(-30deg);
  width: 20%;
  margin-left: 20px;
  font-family: "comic";
  .text {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%) skewY(-20deg);
    .label {
      -webkit-text-stroke: 1px $white;
      color: $black;

      position: absolute;
      font-size: rem(60);
      bottom: 100%;
      span {
        position: absolute;
        bottom: -30px;
        color: $red;
        font-size: rem(150);
      }
    }
  }
  h2 {
    font-size: rem(36);
    max-width: rem(400);
    text-align: center;
    background: $black;
    padding: 20px 0;
    border: 10px solid $white;
    margin-bottom: 20px;
    color: $white;
  }
  .textarea {
    position: relative;
    transform-origin: top left;
    transform: rotateZ(5deg);

    textarea {
      width: 100%;
      height: rem(200);
      border: 10px solid $black;
      resize: none;
      padding: 20px;
      font-size: rem(36);
      &::placeholder {
        color: #ccc;
        font-size: rem(26);
      }
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 10px;
      background: $red;
      color: $white;
      font-size: rem(20);
      transform: translate(20%, 20%);
      &:hover {
        color: $black;
      }
    }
  }
  .button-wrap {
    position: absolute;
    bottom: 10%;
    transform: rotateZ(-10deg);
    display: flex;
    gap: 20px;
    button {
      padding: 16px;
      font-size: rem(30);
      background: $gray;
      color: $white;
      &:last-child {
        background: $red;
      }
    }
  }
}
</style>
