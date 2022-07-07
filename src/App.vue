<template>
  <div>App</div>
  <hr />
  <br />
</template>

<script>
import Cards from "@/components/Cards";
import Dropwdown from "@/components/Dropwdown";
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
    Cards,
    Dropwdown
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
.container {
  width: 90%;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
