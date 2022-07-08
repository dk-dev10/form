<template>
  <div class="inputContainer">
    <span class="label" :class="{ required }">
      {{ title }}
    </span>
    <!-- eslint-disable-next-line -->
    <input v-if="!textarea" :value="name" @input="$emit('update:name', $event.target.value)" :name="name" type="text"
      :placeholder="placeholder" class="input" :class="{ inputError: error }"
      @change="validateNumber($event.target.value)" />
    <textarea v-if="textarea" :value="value" :name="name" type="text" class="input textarea" :placeholder="placeholder"
      :class="{ inputError: error }"></textarea>
    <span v-if="error" class="error">{{ error && 'Обязательное поля' }}</span>
  </div>
</template>

<script>
export default {
  name: "input-ui",
  props: {
    title: String,
    name: String,
    placeholder: String,
    required: Boolean,
    error: String,
    textarea: Boolean
    //   [
    //   'title',
    //   'name',
    //   'placeholder',
    //   'required',
    //   'error',
    //   'textarea',
    // ]
  },
  methods: {
    validateNumber(value) {
      if (this.name === 'price') {
        console.log(value);
      }
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
  width: 100%;
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
    left: 102%;
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

.textarea {
  resize: none;
  height: 110px;
}

::placeholder {
  color: #B4B4B4;
}
</style>