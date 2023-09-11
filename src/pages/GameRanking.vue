<template>
  <main v-if="loading">
    <article class="inner">
      <div class="coverflow">
        <ul>
          <InterctionObserver
            v-for="(item, i) in content.items"
            :key="i"
            :class="{ on: observer === i }"
            @triggerFadeIn="classOn(i)"
          >
            <h2>
              Rank<b>{{ i + 1 }}</b>
              <p>{{ item.name }}</p>
              <span>총 {{ item.selected }}회 선택</span>
            </h2>
            <div class="img">
              <img :src="`${$store.state.imgHost}/${item.url}`" alt="" />
            </div>
          </InterctionObserver>
        </ul>
      </div>
      <div class="comments">
        <div class="comments-container">
          <h2>Comments</h2>
          <ul>
            <li v-for="(comment, i) in content.comment" :key="i">
              <span>{{ comment.selected }} 선택</span>
              {{ comment.detail }}
            </li>
            <li v-if="content.comment.length === 0">
              <p>작성된 댓글이 없습니다.</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import InterctionObserver from "@/components/InterctionObserver.vue";
export default {
  data() {
    return {
      content: [],
      loading: false,
      observer: 0,
      reverseComment: [],
    };
  },
  mounted() {
    this.getDetail();
  },
  components: {
    InterctionObserver,
  },
  methods: {
    getDetail() {
      this.$axios
        .get(`${this.$store.state.host}/content/detail`, {
          params: {
            id: this.$route.query.id,
          },
        })
        .then((res) => {
          this.content = res.data;
          this.content.items.sort((a, b) => b.selected - a.selected);
          this.recerseComment = this.content.comment.reverse();
          this.loading = true;
        });
    },

    classOn(num) {
      this.observer = num;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
main {
  background: $gray;
  height: 100vh;
}
article {
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
}
.coverflow {
  position: relative;
  z-index: 10;
  width: 50%;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50%;
    padding-bottom: 50%;
    > li {
      width: 60%;
      height: 40vh;
      position: relative;
      margin-bottom: 20px;
      opacity: 0.2;
      transition: 0.5s;

      &.on {
        z-index: 1;
        opacity: 1;
        h2 {
          opacity: 1;
        }
        .img {
          background: $black;
          img {
            transform: scale(1.6);
          }
        }
      }
      h2 {
        position: absolute;
        text-align: left;
        z-index: 20;
        width: 100%;
        left: 0%;
        top: 100%;
        color: $white;
        opacity: 0;
        font-size: rem(40);
        transition: 0.5s;
        text-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 1);
        b {
          font-size: rem(80);
          color: $red;
          margin-left: 10px;
        }
        span {
          display: block;
          font-size: rem(16);
          color: #ccc;
        }
        p {
          font-family: "comic";
          margin-bottom: 10px;
          font-size: rem(60);
        }
      }
      .img {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 20px;
        background: none;

        border-radius: 20px;
        img {
          transition: 0.5s;
          transform: scale(1);
          width: auto;
          height: auto;
          max-height: 100%;
          max-width: 100%;
        }
      }
    }
  }
}
.comments {
  width: 50%;
  .comments-container {
    position: fixed;
    top: 10%;
    width: 50%;
    height: 90%;
    overflow-y: scroll;
    padding: 20px 0;
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
    h2 {
      position: fixed;
      color: $white;
      opacity: 0.6;
      font-size: rem(50);
    }
    > ul {
      margin: 120px auto 0;
      width: 60%;
      > li {
        position: relative;
        font-family: "comic";
        font-size: rem(26);
        background: $black;
        padding: 10px;
        margin-bottom: 40px;
        transform: skewX(20deg);
        border: 5px solid $white;
        color: $white;
        span {
          position: absolute;
          top: -30px;
          left: -10px;
          color: $black;
          padding: 5px 20px;
          background: $white;
        }
      }
    }
  }
}
</style>
