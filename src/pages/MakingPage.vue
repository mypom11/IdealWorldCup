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
            v-model="content.title"
          />
          <InputComponent
            class="mb-20"
            label="게임 설명 입력"
            place="이 게임에 대한 설명을 입력하세요 50자 이하가 메인화면에서 보기 좋게 표현됩니다. "
            v-model="content.desc"
          />
          <p>
            게임 메인 배경
            <em
              >(메인페이지에 제일 먼저 보일 이미지를 설정합니다. 16:9 비율의
              이미지가 가장 보기 좋습니다.)</em
            >
          </p>
          <FileComponent v-model="content.bgUrl" id="bgUrl" />
        </div>
      </div>
      <div class="card">
        <h5>아이템 정보 입력</h5>
        <div class="select">
          <input
            type="radio"
            id="select"
            name="type"
            v-model="content.video"
            :value="false"
          /><label for="select">이미지</label>
          <input
            type="radio"
            id="select2"
            name="type"
            v-model="content.video"
            :value="true"
            disabled
          /><label for="select2">영상</label>
        </div>
        <ul class="item-list">
          <li v-for="(list, i) in items" :key="i">
            <FileComponent
              class="sm mb-10"
              v-model="list.url"
              :id="`item${i}`"
            />
            <InputComponent
              label="아이템 이름"
              place="10자 이하가 보기 좋게 표현됩니다."
              v-model="list.name"
            />
            <span class="delete-button" @click="deleteItem(i)">
              <font-awesome-icon :icon="['fas', 'square-minus']" />
            </span>
          </li>
          <li class="add-item" @click="addItem">
            <div><font-awesome-icon :icon="['fas', 'square-plus']" /></div>
          </li>
        </ul>
      </div>
    </section>
    <button class="finish" @click="uploadContent">저장</button>
  </main>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import FileComponent from "@/components/FileComponent.vue";
export default {
  components: { InputComponent, FileComponent },
  data() {
    return {
      content: {
        title: "",
        desc: "",
        // eidtor: false,
        public: true,
        bgUrl: null,
        maker_id: 1,
        // item_count: 0,
        // popular_count: 0,
        video: false,
      },
      items: [
        {
          url: null,
          name: "",
        },
      ],
    };
  },
  methods: {
    uploadContent() {
      if (this.items.length < 8) {
        this.$toast.error("최소 8개 이상의 아이템이 필요합니다.");
        return;
      }
      if (this.content.title === "") {
        this.$toast.error("게임의 이름을 입력해주세요.");
        return;
      }
      if (this.content.desc === "") {
        this.$toast.error("게임의 설명을 입력해주세요.");
        return;
      }
      if (this.content.url === null) {
        this.$toast.error("게임의 기본 배경을 입력해주세요.");
        return;
      }

      const data = this.content;
      const formData = new FormData();
      Object.entries(data).forEach((item) => formData.append(item[0], item[1]));
      this.items.forEach((item, i) => {
        if (item.name === "") {
          this.$toast.error(`${i + 1}번째 아이템의 이름이 누락되었습니다.`);
          return;
        } else if (item.url === null) {
          this.$toast.error(`${i + 1}번째 아이템의 이미지가 누락되었습니다.`);
          return;
        }
        formData.append("item", item.name);
        formData.append("itemImg", item.url);
      });

      //   formdata 확인
      let entries = formData.entries();
      for (const pair of entries) {
        console.log(pair[0] + ", " + pair[1]);
      }

      this.$axios
        .post(`${this.$store.state.host}/content/upload`, formData)
        .then((res) => {
          if (res.data.result) {
            this.$toast.info("게임이 업로드 되었습니다.");
            this.$router.push({ name: "Main" });
          }
        })
        .catch((error) => {
          console.error("Error saving content:", error);
          // Handle any error actions here
        });
    },
    addItem() {
      const obj = {
        file: null,
        name: "",
      };
      this.items.push(obj);
    },
    deleteItem(i) {
      this.items.splice(i, 1);
    },
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
      font-size: 14px;
      background-color: #fff;
      color: $black;
    }
    &:checked + label {
      background-color: $black;
      color: $white;
    }
    &:disabled + label {
      background: #ccc;
    }
  }
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  > li {
    position: relative;
    width: 19%;
    margin-bottom: 1%;
    &:hover {
      .delete-button {
        opacity: 1;
      }
    }
  }
  .delete-button {
    position: absolute;
    right: 0px;
    top: -5px;
    opacity: 0;
    font-size: 30px;
    color: $red;
    cursor: pointer;
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
