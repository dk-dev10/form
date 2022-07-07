<template>
  <div class="formBlock">
    <h1>Добавление товара</h1>
    <div class="formContainer">
      <form @submit.prevent="logg">
        <Input class="form-input" name="Наименование товара" placeholder="Введите наименование товара" required />
        <Input class="form-input" name="Описание товара" placeholder="Введите описание товара" textarea />
        <Input class="form-input" name="Ссылка на изображение товара" placeholder="Введите ссылку" required />
        <Input class="form-input" name="Цена товара" placeholder="Введите цену" required />
        <Button text="Добавить товар" />
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
export default {
  name: 'form-block',
  components: {
    Input,
    Button,
  },
  methods: {
    logg(e) {
      e.preventDefault();
      console.log('ss');
    }
  }
};
</script>

<style lang="scss" scoped>
.formBlock {
  text-align: start;

  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
    margin-bottom: 16px;
  }
}

.formContainer {
  max-width: 332px;
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.form-input {
  margin-bottom: 16px;
}
</style>