<template>
  <div class="card">
    <div class="imgBlock">
      <img :src="card.picture" alt="s" />
    </div>
    <div class="cardInfo">
      <h4>{{ card.title }}</h4>
      <p class="description">{{ card.description }}</p>
      <p class="price">{{ `${card.price}`.replace(/\B(?=(?:\d{3})*$)/g, ' ')}} <span>руб.</span></p>
    </div>
    <button class="remove" @click="() => onRemove(card.id)">
      <img src="@/assets/delete.png" alt="remove" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Card-ui',
  props: ["card"],
  methods: {
    onRemove(id) {
      this.$emit('onRemove', id)
    }
  }
};
</script>

<style lang='scss' >
.card {
  width: 31%;
  max-width: 332px;
  margin-bottom: 16px;
  position: relative;

  border-radius: 0 0 4px 4px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);

  &:hover .remove {
    opacity: 1;
    visibility: visible;
  }

  &Info {
    padding: 16px 16px 24px;
    background: #FFFEFB;
    text-align: start;

    color: #3F3F3F;
    border-radius: 0 0 4px 4px;

    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
    .description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin: 16px 0 32px;
    }
    .price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
}
.imgBlock {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  img {
    position: absolute;
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.remove {
  position: absolute;
  top: -10px;
  right: -10px;
  border: none;
  background: #FF8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 32px;
  height: 32px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 99;

  img {
    widows: 8px;
  }
}
@media screen and (max-width: 782px) {
  .remove {
    opacity: 1;
    visibility: visible;
  }
}
</style>
