<template>
  <div class="formBlock">
    <button class="modal" @click="closeModal">x</button>
    <h1>Добавление товара</h1>
    <div class="formContainer">
      <form @submit.prevent="logg">
        <Input class="form-input" v-model:name="product" name="product" title="Наименование товара"
          placeholder="Введите наименование товара" required :error="errors.price" />
        <Input class="form-input" v-model:name="description" name="description" title="Описание товара"
          placeholder="Введите описание товара" textarea="{{true}}" />
        <Input class="form-input" v-model:name="link" name="link" title="Ссылка на изображение товара"
          placeholder="Введите ссылку" required :error="errors.price" />
        <Input class="form-input" v-model:name="price" name="price" title="Цена товара" placeholder="Введите цену"
          required :error="errors.price" />
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
      errors: {
        price: false,
        product: false,
        link: false
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    logg() {
      const { price, product, description, link, errors } = this;
      if (!product.trim()) {
        errors.price = true
      }
      if (!price.trim()) {
        errors.price = true
      }
      if (!link.trim()) {
        errors.price = true
      }
      if (price.trim() && link.trim() && product.trim()) {
        const newCard = {
          id: Date.now(),
          title: product,
          description, price,
          picture: link,
        }
        this.$emit('addCard', newCard);
        this.product = '';
        this.description = '';
        this.link = '';
        this.price = '';
        this.errors = {
          price: false,
          product: false,
          link: false
        }
      }
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

  button {
    margin-top: 12px;
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

.modal {
  right: 30px;
  left: auto;
  z-index: 999;
}
</style>