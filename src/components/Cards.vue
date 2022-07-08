<template>
  <div class="cardsContainer">
    <Dropwdown v-if="!!cards.length" class="drop" @handleFilter="handleFilter" />
    <p v-if="!cards.length" class="empty">Пусто нет товаров</p>

    <TransitionGroup name="cards" tag="div" class="cards">
      <Card v-for="card of products" :key="card.id" :card="card" class="card" @onRemove="onRemove" />
    </TransitionGroup>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Dropwdown from "@/components/Dropwdown";
export default {
  name: "Cards-ui",
  props: ["cards"],
  data() {
    return {
      products: this.cards,
    }
  },
  components: {
    Card,
    Dropwdown
  },
  methods: {
    onRemove(id) {
      this.$emit('onRemove', id)
    },
    handleFilter(key) {
      if (key === "По цене min") {
        this.products = this.products.sort((prev, curr) => prev.price - curr.price)
      }
      if (key === "По цене max") {
        this.products = this.products.sort((prev, curr) => curr.price - prev.price)
      }
      if (key === "По наименованию") {
        this.products = this.products.sort((prev, curr) => prev.title.localeCompare(curr.title))
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cardsContainer {
  width: 75%;
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
    margin: 0 1% 2%;
  }
}

.cards-enter-active,
.cards-leave-active {
  transition: all .5s ease;
}

.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>

