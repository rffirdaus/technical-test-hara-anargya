<template>
  <div class="w-full">
    <div class="h-12 w-full shadow-lg rounded-md flex justify-between items-center cursor-pointer p-2" @click="toggleCollapse">
      <p>{{ provinceName }}</p>
      <Icon icon="bxs:up-arrow" class="text-[#817F7F]" :class="collapsed ? 'rotate-180' : ''" />
    </div>
    <transition name="fade">
      <div v-if="!collapsed" class="shadow-lg rounded-md p-2">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true
    };
  },
  props: {
    provinceName: {
      type: String
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>