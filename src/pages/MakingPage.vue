<template>
  <main class="inner">
    <section>
      <div class="card">
        <h5>기본 정보 입력</h5>
        <hr />
        <div class="input-container">
          <InputComponent
            class="mb-20"
            label="게임 제목 입력"
            place="이상형 월드컵 이름을 입력하세요. ex)아이돌 이상형 월드컵, 남자 연예인 이상형 월드컵 "
          />
          <InputComponent
            class="mb-20"
            label="게임 설명 입력"
            place="이 게임에 대한 설명을 입력하세요 50자 이하가 메인화면에서 보기 좋게 표현됩니다. "
          />
          <p>
            게임 메인 배경
            <em
              >(메인페이지에 제일 먼저 보일 이미지를 설정합니다. 16:9 비율의
              이미지가 가장 보기 좋습니다.)</em
            >
          </p>
          <FileComponent />
        </div>
      </div>
      <div class="card">
        <h5>아이템 정보 입력</h5>
        <div class="select">
          <input type="radio" id="select" name="shop" /><label for="select"
            >이미지</label
          >
          <input type="radio" id="select2" name="shop" /><label for="select2"
            >영상</label
          >
        </div>
        <ul class="item-list">
          <li>
            <FileComponent class="sm mb-10" />
            <InputComponent
              label="아이템 이름"
              place="10자 이하가 보기 좋게 표현됩니다."
            />
          </li>
          <li class="add-item">
            <div><font-awesome-icon :icon="['fas', 'square-plus']" /></div>
          </li>
        </ul>
      </div>
    </section>
    <button class="finish">저장</button>
  </main>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import FileComponent from "@/components/FileComponent.vue";
export default {
  components: { InputComponent, FileComponent },
  data() {
    return {
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
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

main {
  padding-top: 100px;
  padding-bottom: 100px;
}
h5 {
  font-size: rem(22);
  font-weight: 600;
  margin-bottom: 20px;
}
.input-container {
  p {
    font-weight: 500;
    font-size: rem(18);
    margin-bottom: 10px;
    em {
      font-size: rem(16);
      color: rgba($color: $black, $alpha: 0.6);
    }
  }
}
.select {
  margin-bottom: 20px;
  input[type="radio"] {
    display: none;
    & + label {
      display: inline-block;
      cursor: pointer;
      width: 100px;
      padding: 5px 20px;
      border: 1px solid $black;
      text-align: center;
      font-weight: bold;
      font-size: 13px;
      background-color: #fff;
      color: $black;
    }
    &:checked + label {
      background-color: $black;
      color: $white;
    }
  }
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  > li {
    width: 19%;
    margin-bottom: 1%;
  }
  .add-item {
    cursor: pointer;
    > div {
      width: 100%;
      height: 200px;
      background: #ccc;
      border-radius: 4px;
      text-align: center;
      line-height: 200px;
      font-size: rem(80);
      font-weight: 600;
      color: $white;
      &:hover {
        color: $black;
      }
    }
  }
}

.finish {
  margin-top: 50px;
  height: 80px;
  width: 100%;
  border-radius: 10px;
  font-size: rem(40);
  font-weight: 700;
  box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.25);
  background: $green;
  color: $white;
  &:hover {
    color: $yellow;
  }
}
</style>
