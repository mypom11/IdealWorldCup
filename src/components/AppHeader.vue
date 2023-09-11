<template>
  <header>
    <div class="logo"><h1>이상형 월드컵</h1></div>
    <ul class="nav">
      <li @click="$router.push({ name: 'Main' })">게임 목록</li>
      <li @click="$router.push({ name: 'Making' })">게임 만들기</li>
      <!-- <li>나의 게임</li> -->
    </ul>
    <div class="user-menu">
      <!-- <span>로그인</span> -->
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

header {
  position: fixed;
  z-index: 100;
  width: calc(100vw - 20%);
  margin: rem(20) auto;
  left: 50%;
  transform: translateX(-50%);
  background: $black;
  color: $white;
  padding: 0 rem(60);
  border-radius: 20px;
  height: 50px;
  opacity: 0.8;
  box-shadow: 3px 3px 6px rgba($color: $black, $alpha: 0.8);
  @include flex;
  h1 {
    font-size: rem(26);
    font-family: nexon;
  }
  .nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    @include flex;
    gap: rem(40);
    > li {
      cursor: pointer;
      font-size: rem(20);
    }
  }
}
</style>
