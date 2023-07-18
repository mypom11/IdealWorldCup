<template>
  <div class="input-box" :style="{ width: width }">
    <p v-if="label !== null">{{ label }}</p>
    <input
      class="custom"
      :type="type"
      :placeholder="place"
      :readonly="read"
      :value="value"
      @input="update"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    modelValue: null,
    width: String,
    label: {
      type: String,
      default: null,
    },
    read: {
      default: false,
      type: Boolean,
    },
    place: String,
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    update($e) {
      this.$emit("update:modelValue", $e.target.value);
    },
  },
  computed: {
    value: function () {
      return this.modelValue;
    },
  },
};
</script>
<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.input-box {
  p {
    font-weight: 500;
    font-size: rem(18);
    margin-bottom: 10px;
  }
  input.custom {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid rgba($color: $gray, $alpha: 0.3);
    font-size: rem(16);
    color: $black;
    &::placeholder {
      color: rgba($color: $black, $alpha: 0.5);
    }
    &:focus {
      border: 1px solid $black;
    }
    &:read-only {
      background: rgba($color: $gray, $alpha: 0.1);
      border: 1px solid transparent;
      &:focus {
        border: 1px solid transparent;
      }
    }
  }
  span {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
