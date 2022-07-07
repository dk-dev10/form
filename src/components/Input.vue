<template>
  <div class="inputContainer">
    <span class="label" :class="{ required }">
      {{ name }}
    </span>
    <input
      type="text"
      :id="name"
      class="input"
      :placeholder="placeholder"
      :class="{ inputError: error }"
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
  <Button v-on:click="logg" text="Добавить товар" />
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Input",
  components: {
    Button
  },
  props: {
    name: String,
    placeholder: String,
    required: Boolean,
    error: String
  },
  methods: {
    logg() {
      console.log(this.required);
    }
  }
};
</script>

<style lang="scss" scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  width: 90%;
  margin: 0 auto;

  position: relative;
}
.label {
  position: relative;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
  margin-bottom: 4px;

  &.required:before {
    display: block;
    content: "";
    width: 4px;
    height: 4px;
    background-color: #FF8484;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    left: 110%;
  }
}
.error {
  position: absolute;
  top: 110%;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
}
.input {
  border: none;
  background: #FFFEFB;
  color: #3F3F3F;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 0 11px 16px;
  border: 2px solid transparent;
  width: 100%;

  &:focus {
    border-color: #7BAE73;
  }

  &Error {
    border-color: #FF8484;

    &:focus {
      border-color: #FF8484;
    }
  }
}
</style>