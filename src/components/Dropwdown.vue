<template>
  <div class="drop" :class="{ active }" @click="isActive">
    <span>{{ text }}</span>
    <img src="@/assets/arrow.png" alt="" />
    <ul class="dropList" :class="{ dropListActive: active }">
      <li v-for="sel of data" :key="sel" @click="handleSelect(sel)">
        {{ sel }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdown-ui',
  data() {
    return {
      active: false,
      text: "По умолчанию",
      data: ["По цене min", "По цене max", "По наименованию"]
    };
  },
  methods: {
    isActive() {
      this.active = !this.active;
    },
    handleSelect(item) {
      this.text = item;
      this.$emit('handleFilter', this.text)
      // this.active = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.drop {
  padding: 10px 16px 11px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-width: 250px;
  width: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    margin-left: 5px;
    transition: transform 0.2s ease;
  }

  &.active {
    img {
      transform: rotate(-180deg);
    }
  }

  &List {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 999;
    margin-top: 10px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    list-style: none;
    max-width: 300px;
    text-align: start;

    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;

    &Active {
      opacity: 1;
      visibility: visible;
    }

    li {
      padding: 10px 16px 11px;
      border-bottom: 1px solid #eee;
      cursor: pointer;

      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>