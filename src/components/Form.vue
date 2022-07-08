<template>
  <div class="formBlock">
    <h1>Добавление товара</h1>
    <div class="formContainer">
      <form @submit.prevent="logg">
        <Input class="form-input" :value="product" v-model="product" name="product" title="Наименование товара" placeholder="Введите наименование товара" required />
        <Input class="form-input" :value="description" v-model="description" name="description" title="Описание товара" placeholder="Введите описание товара" textarea />
        <Input class="form-input" :value="link" v-model="link" name="link" title="Ссылка на изображение товара" placeholder="Введите ссылку" required />
        <Input class="form-input" :value="price" v-model="price" name="price" title="Цена товара" placeholder="Введите цену" required />
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
  data() {
    return {
      product: '',
      description: '',
      link: '',
      price: '',
    }
  },
  methods: {
    logg() {
      const {price, product, description, link} = this;
      const newCard = {
          id: Date.now(),
          title: product,
          description,price,
          picture: link,
        }
      this.$emit('addCard', newCard)
    },
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
  position: sticky;
  top: 24px;
}

.form-input {
  margin-bottom: 16px;
}
</style>