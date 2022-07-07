<template>
  <div class="container">
    <Form class="form" />
    <Cards :cards="cards" />
  </div>
</template>

<script>
import Form from '@/components/Form'
import Cards from '@/components/Cards';
export default {
  name: "App",
  data() {
    return {
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
          id: 1,
          title: "Title",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 8999,
          picture:
            "https://d28128taegpyri.cloudfront.net/92f8c882-4569-4e77-9bec-27d3ade09f0d_960.jpg"
        },
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
          id: 1,
          title: "Title",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 8999,
          picture:
            "https://d28128taegpyri.cloudfront.net/92f8c882-4569-4e77-9bec-27d3ade09f0d_960.jpg"
        },
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
          id: 1,
          title: "Title",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 8999,
          picture:
            "https://d28128taegpyri.cloudfront.net/92f8c882-4569-4e77-9bec-27d3ade09f0d_960.jpg"
        },
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
</style>
