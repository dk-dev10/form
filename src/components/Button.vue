<template>
  <button class="button" :class="disabled" :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  name: 'button-ui',
  props: ["text", "disabled"],
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  padding: 10px 0 11px;
  width: 100%;
  background: #7BAE73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  max-width: 300px;

  &.disabled {
    color: #B4B4B4;
    background: #EEEEEE;
  }
}
</style>