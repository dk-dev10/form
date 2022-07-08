<template>
  <div class="container">
    <button class="modal" @click="handleModal">+</button>
    <Form class="form" :class="{ active: form }" @addCard="addCard" @closeModal="closeModal" />
    <Cards :products="cards" @onRemove="onRemove" @handleFilter="handleFilter" />
  </div>
</template>

<script>
import Form from '@/components/Form'
import Cards from '@/components/Cards';
export default {
  name: "App",
  data() {
    return {
      form: false,
      cards: [
        {
          id: 1,
          title: "Title",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 8999,
          picture:
            "https://d28128taegpyri.cloudfront.net/92f8c882-4569-4e77-9bec-27d3ade09f0d_960.jpg"
        },
        {
          id: 2,
          title: "Title 2",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк 2",
          price: 11999,
          picture:
            "https://d28128taegpyri.cloudfront.net/92f8c882-4569-4e77-9bec-27d3ade09f0d_960.jpg"
        }
      ]
    };
  },
  components: {
    Form,
    Cards,
  },
  methods: {
    handleModal() {
      this.form = true
    },
    closeModal() {
      this.form = false
    },
    addCard(item) {
      this.cards = [...this.cards, item];
      this.form = false
    },
    onRemove(i) {
      this.cards = this.cards.filter(({ id }) => id !== i)
    },
    handleFilter(key) {
      if (key === "По цене min") {
        this.cards = this.cards.sort((prev, curr) => prev.price - curr.price)
      }
      if (key === "По цене max") {
        this.cards = this.cards.sort((prev, curr) => curr.price - prev.price)
      }
      if (key === "По наименованию") {
        this.cards = this.cards.sort((prev, curr) => prev.title.localeCompare(curr.title))
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  width: 100%;
  height: 100%;
  background-color: #FFFEFB;
}

.container {
  width: 100%;
  padding: 32px;
  display: flex;
}

.container .form {
  width: 25%;
}

.empty {
  text-align: center;
  margin: 5% auto;
  font-size: 25px;
  font-weight: 800;
  color: #b5b5b5;
}

.modal {
  position: absolute;
  top: 30px;
  left: 30px;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  padding: 10px;
}

@media screen and (max-width: 1080px) {
  .container .form {
    width: 40%;
  }
}

@media screen and (max-width: 782px) {
  .container {
    padding: 20px;
  }

  .container .form {
    width: 50%;
  }
}

@media screen and (max-width: 782px) {
  .container .form {
    width: 100vw;
    position: absolute;
    margin: 0 auto;
    z-index: 100;
    background: #fff;
    left: 0;
    top: 0;
    height: 99vh;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
  }

  .container .form.active {
    visibility: visible;
    opacity: 1;
  }

  .container .form .formContainer {
    max-width: 100%;
  }

  .modal {
    opacity: 1;
    visibility: visible;
  }
}
</style>
