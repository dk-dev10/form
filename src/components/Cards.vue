<template>
  <div>Cards</div>
  <hr />
  <Card v-for="card of cards" v-bind:key="card.id" v-bind:card="card" />
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Cards",
  props: ["cards"],
  components: {
    Card
  }
};
</script>

