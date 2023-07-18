<template>
  <section>
    <div class="slide-component"></div>
    <div class="background"></div>
    <div class="text-container">
      <h3>Editor's Choice</h3>
      <h2>마블 히어로 월드컵</h2>
      <p>마블 영화(MCU) 중 가장 좋아하는 캐릭터는?</p>

      <div class="button-container">
        <button class="custom">
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
section {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/sample/bg.png");
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
</style>
