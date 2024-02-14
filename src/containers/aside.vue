<template>
  <aside class="site-sidebar">
    <div class="text-center mb-8">
      <router-link to="/">
        <h3 class="text-3xl font-extrabold text-[#152544]">heylink.</h3>
      </router-link>
    </div>
    <div class="site-navigation">
      <nav vertical>
        <template v-for="nav in navsAdmin" :key="nav.id">
          <router-link
            :to="nav.url"
            class="flex items-center text-base font-medium text-[#424242] hover:text-[#424242] w-40 p-1 pt-2 pb-2 rounded-md mb-2"
            :class="nav.name === $route.name ? 'bg-[#E3F2FD]' : ''"
          >
            <!-- <Icon icon="solar:square-transfer-horizontal-broken" class="text-[#424242] mr-2" /> -->
            <img
              v-if="nav.name === 'Dashboard'"
              src="../assets/icon/solar_home-smile-linear.svg"
              alt="Deskripsi Gambar"
              class="mr-2"
            />
            <img
              v-else
              src="../assets/icon/Group.svg"
              alt="Deskripsi Gambar"
              class="mr-2"
            />
            {{ nav.name }}
          </router-link>
        </template>
      </nav>
    </div>
  </aside>
</template>

<script>
import navs from "../navs.js";
export default {
  name: "Aside",
  data() {
    return {
      navsAdmin: navs.items,
    };
  },
};
</script>
