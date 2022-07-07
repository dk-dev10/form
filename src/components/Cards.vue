<template>
  <div class="cardsContainer">
    <Dropwdown class="drop" />
    <div class="cards">
      <Card v-for="card of cards" :key="card.id" :card="card" class="card" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Dropwdown from "@/components/Dropwdown";
export default {
  name: "Cards-ui",
  props: ["cards"],
  components: {
    Card,
    Dropwdown
  }
};
</script>

<style lang="scss" scoped>
.cardsContainer {
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .drop {
    margin-bottom: 16px;
  }
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .card {
    margin: 0 8px 16px;
  }
}
</style>

