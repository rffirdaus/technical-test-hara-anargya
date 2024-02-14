<template>
  <div class="p-8">
    <Card />
    <List :users="usersData" />
  </div>
</template>

<script>
import axios from 'axios'; 
import Card from '../../components/dashboard/card.vue'
import List from '../../components/dashboard/list.vue'
export default {
  name: 'Dashboard',
  components: {
    Card,
    List
  },
  data () {
    return {
      usersData: []
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    // Metode untuk melakukan permintaan GET ke API dan menyimpan data pengguna dalam variabel users
    async fetchUsers() {
      this.usersData = []
      try {
        await axios.get('https://api.slingacademy.com/v1/sample-data/users').then((res) => {
          this.usersData = res.data.users
        })
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    }
  }
}
</script>