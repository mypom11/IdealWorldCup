<template>
  <section>
    <div class="slide-component">
      <agile
        class="main-slide"
        :dots="true"
        :infinite="true"
        :autoplay="false"
        :pauseOnHover="true"
      >
        <div
          class="slide"
          v-for="(game, i) in $store.state.editorList"
          :key="i"
        >
          <div
            class="background"
            :style="{
              'background-image': `url(${$store.state.host}/${game.bg})`,
            }"
          ></div>
          <div class="text-container">
            <h3>Editor's Choice</h3>
            <h2>{{ game.title }}</h2>
            <p>{{ game.desc }}</p>

            <div class="button-container">
              <button
                class="custom"
                @click="
                  $router.push({ name: 'Game', query: { id: `${game._id}` } })
                "
              >
                <font-awesome-icon
                  :icon="['fas', 'play']"
                  class="mr-10"
                />플레이
              </button>
              <button
                class="custom"
                @click="
                  $router.push({
                    name: 'GameRanking',
                    query: { id: `${game._id}` },
                  })
                "
              >
                <font-awesome-icon
                  :icon="['fas', 'ranking-star']"
                  class="mr-10"
                />랭킹
              </button>
              <button class="custom" @click="this.$emit('share', game._id)">
                <font-awesome-icon
                  :icon="['fas', 'share-from-square']"
                  class="mr-10"
                />공유
              </button>
            </div>
          </div>
        </div>
      </agile>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
section {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.slide-component {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  > ul {
    position: relative;
    transition: 0.2s;
    left: -100vw;
    width: fit-content;
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    > li {
      position: relative;
      width: 100vw;
    }
  }
}
.background {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: $black, $alpha: 0.4);
  }
}
.text-container {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  color: $white;
  h3 {
    margin-bottom: rem(10);
    color: $yellow;
  }
  h2 {
    margin-bottom: rem(40);
  }
  p {
    font-size: rem(26);
    color: rgba($color: $white, $alpha: 0.8);
    margin-bottom: rem(50);
  }
}
.editor-list {
  position: absolute;
  right: 10%;
  bottom: 10%;
  width: 50%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  .editor-title {
    @include flex;
    h3 {
      color: $white;
      margin-bottom: rem(20);
      opacity: 0.8;
    }
    span {
      color: $white;
      margin-right: 20px;
      font-size: rem(20);
      font-weight: 600;
      opacity: 0.8;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
}

::v-deep {
  .main-slide {
    &.agile {
      height: 100vh;
      .slide {
        position: relative;
        height: 100vh;
      }
      .agile__dots {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 20px;
        .agile__dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba($color: $white, $alpha: 0.4);
          &.agile__dot--current {
            background: rgba($color: $white, $alpha: 0.8);
          }
        }
      }
      .agile__nav-button {
        all: unset;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: rem(40);
        color: rgba($color: $white, $alpha: 0.4);
        cursor: pointer;
        &:hover {
          color: $white;
        }

        &.agile__nav-button--prev {
          left: 5%;
        }
        &.agile__nav-button--next {
          right: 5%;
        }
      }
    }
  }
}
</style>
