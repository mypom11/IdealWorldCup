<template>
  <section>
    <div class="search-container">
      <ul class="tab">
        <li>인기순</li>
        <li>최신순</li>
      </ul>
      <div>
        <input type="text" placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>
    </div>

    <ul class="game-list">
      <li>
        <img src="" alt="" />
        <h4>
          dasdfasdf이상형월드컵aaaaaaaaaaaaaaasdasadfsadfsadfsadfsadasfdsdf
        </h4>
        <p>
          ㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴ
          ㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴ
          ㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㅁㄴㄹㅁㄴㅇㄹㅁㄴ
        </p>
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
      </li>
      <li>
        <img src="" alt="" />
        <h4></h4>
        <p></p>
        <div class="button-container">
          <button></button>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <h4></h4>
        <p></p>
        <div class="button-container">
          <button></button>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <h4></h4>
        <p></p>
        <div class="button-container">
          <button></button>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <h4></h4>
        <p></p>
        <div class="button-container">
          <button></button>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <h4></h4>
        <p></p>
        <div class="button-container">
          <button></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
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
      &:hover {
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
    img {
      width: 100%;
      height: 20vh;
      margin-bottom: 20px;
    }
    h4 {
      font-family: "nexon";
      font-size: rem(20);
      height: 42px;
      margin-bottom: 20px;
      overflow: hidden;
      word-break: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
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
      margin-right: 0;
    }
  }
}
</style>
