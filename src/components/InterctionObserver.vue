<template>
  <li ref="triggerDiv"><slot></slot></li>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      option: {
        root: null,
        threshold: 1,
      },
    };
  },
  methods: {
    handleIntersect: function (target) {
      if (target.isIntersecting) {
        this.$emit(`triggerFadeIn`);
      }
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
    }, this.option);
    this.observer.observe(this.$refs.triggerDiv);
  },
};
</script>
