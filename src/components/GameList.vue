<template>
  <section>
    <div class="search-container">
      <ul class="tab">
        <li :class="{ on: tab === 0 }" @click="tab = 0">인기순</li>
        <li :class="{ on: tab === 1 }" @click="tab = 1">최신순</li>
      </ul>
      <div>
        <input type="text" placeholder="검색어를 입력하세요" v-model="query" />
        <button>검색</button>
      </div>
    </div>

    <ul class="game-list">
      <li v-for="(game, i) in resultList" :key="i">
        <div class="img-wrap">
          <img :src="`http://localhost:3000/${game.bg}`" alt="" />
        </div>
        <h4>
          {{ game.title }}
        </h4>
        <p>
          {{ game.desc }}
        </p>
        <div class="button-container">
          <button
            class="custom"
            @click="
              $router.push({ name: 'Game', query: { id: `${game._id}` } })
            "
          >
            <font-awesome-icon :icon="['fas', 'play']" class="mr-10" />플레이
          </button>
          <button class="custom">
            <font-awesome-icon
              :icon="['fas', 'ranking-star']"
              class="mr-10"
            />랭킹
          </button>
          <button class="custom">
            <font-awesome-icon
              :icon="['fas', 'share-from-square']"
              class="mr-10"
            />공유
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchList: "",
      tab: 0,
      query: "",
    };
  },
  computed: {
    resultList() {
      let arr = this.$store.state.contents;
      if (this.tab === 0) {
        arr.sort((a, b) => {
          return b.popular_count - a.popular_count - b.popular_count;
        });
      } else if (this.tab === 1) {
        arr.sort((a, b) => {
          return new Date(b.upload_date) - new Date(a.upload_date);
        });
      }
      if (this.query.trim() !== "") {
        arr = arr.filter((item) => {
          return item.title.toLowerCase().includes(this.query.toLowerCase());
        });
      }

      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

section {
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
}
.search-container {
  position: sticky;
  top: 100px;
  margin: 0 10%;
  @include flex;
  input {
    text-align: right;
    width: 200px;
    border: 1px solid $black;
    border-radius: 20px;
    padding: 10px 20px;
    margin-right: 10px;
    text-align: right;
    color: $black;
  }
  button {
    all: unset;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid $black;
    cursor: pointer;
    &:hover {
      background: $black;
      color: $white;
    }
  }
  .tab {
    display: flex;
    gap: 20px;
    > li {
      font-size: rem(20);
      font-weight: 600;
      color: rgba($color: $black, $alpha: 0.6);
      position: relative;

      padding: 0 10px;
      cursor: pointer;
      &:hover,
      &.on {
        color: $black;
        &:after {
          width: 100%;
        }
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 0%;
        transition: 0.2s;
        height: 2px;
        background: $black;
      }
    }
  }
}

.game-list {
  position: relative;
  width: 80%;
  margin: rem(100) 10%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1%;

  > li {
    position: relative;
    width: 19%;
    margin-bottom: 1%;
    &:hover {
      .button-container {
        display: flex;
      }
    }
    .img-wrap {
      position: relative;
      display: block;
      margin-bottom: 20px;
      width: 100%;
      height: 20vh;
      @include flex(center, center);
      border-radius: 10px;
      overflow: hidden;
      border: 10px solid $black;
      box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.6);
      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    img {
      width: 100%;
      height: 20vh;
    }
    h4 {
      font-family: "nexon";
      font-size: rem(20);
      margin-bottom: 10px;
      overflow: hidden;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: rem(18);
      color: rgba($color: #000000, $alpha: 0.6);
      height: 52px;
      overflow: hidden;
      word-break: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      font-size: 15px;
    }
  }
  .button-container {
    display: none;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    height: 20vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .custom {
      color: $white;
      margin-right: 0;
      background: rgba($color: #000000, $alpha: 0.4);
      &:hover {
        color: $black;
        background: $white;
      }
    }
  }
}
</style>
