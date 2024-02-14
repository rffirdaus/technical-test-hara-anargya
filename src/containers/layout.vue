<template>
  <div class="flex flex-grow w-screen">
    <Aside />
    <main class="site-main">
      <Header />
      <div class="site-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Aside from './aside.vue'
import Header from './header.vue'
export default {
  name: 'Layout',
  components: {
    Aside,
    Header
  }
}
</script>
