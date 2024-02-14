<template>
  <div class="card-dashboard rounded-[10px]">
    <h1 class="mt-5 ml-5 mb-8 text-[17px] font-semibold text-[#080808]">User List</h1>
    <div>
      <table class="w-full">
        <thead>
          <tr class="list-table text-[#7C7C7C] text-xs font-semibold text-left">
            <th class="text-center w-[5%]">ID</th>
            <th class="w-[15%]">User</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Job</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, i) in users" :key="data.id" class="table-tr">
            <th class="text-[#686868]">{{ i + 1 }}</th>
            <td class="text-left font-medium text-xs">
              <div class="flex items-center">
                <img :src="data.profile_picture" class="w-[10%] rounded-full mr-2" alt="">
                <p class="text-[#080808]">{{ data.last_name }}</p>
              </div>
            </td>
            <td class="text-left font-medium text-xs text-[#686868]">{{ formattedDate(data.date_of_birth) }}</td>
            <td class="text-left font-medium text-xs text-[#080808]">{{ data.email }}</td>
            <td class="text-left font-medium text-xs text-[#686868]">{{ data.job }}</td>
            <td class="text-left font-medium text-xs text-[#080808]">{{ data.country }}</td>
            <td class="text-left font-medium text-xs">
              <div class="flex justify-start">
                <button class="button-list rounded-[4px] w-20 mr-2 p-1 text-[#080808]">Select</button>
                <button class="button-list rounded-[4px] w-24 p-1 text-[#080808]" @click="showDialog(data)">View Detail</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <div class="flex justify-end">
        <p class="text-xl font-medium text-[#FA1212] cursor-pointer" @click="showModal = false">X</p>
      </div>
      <div class="flex items-center mb-4">
        <img :src="modalData.profile_picture" class="w-[20%] rounded-full mr-4" alt="">
        <div>
          <h2 class="text-[40px] font-medium text-[#080808]">{{ modalData.last_name }}</h2>
          <h4 class="text-[20px] font-medium text-[#080808]">{{ modalData.email }}</h4>
          <h3 class="text-[20px] font-medium text-[#080808]">{{ modalData.phone }}</h3>
        </div>
      </div>
      <div class="flex">
        <div class="w-2/5">
          <p>Date of Birth</p>
          <p>Job</p>
          <p>City</p>
          <p>Country</p>
        </div>
        <div class="w-3/5">
          <p>: {{ formattedDate(modalData.date_of_birth) }}</p>
          <p>: {{ modalData.job }}</p>
          <p>: {{ modalData.city }}</p>
          <p>: {{ modalData.country }}</p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './dialog.vue';
export default {
  name: "ListUser",
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      modalData: ''
    };
  },
  methods: {
    formattedDate(value) {
      const date = new Date(value);
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return date.toLocaleDateString('en-US', options).replace(/\//g, ' / ')
    },
    showDialog(data) {
      this.modalData = ''
      this.modalData = data
      this.showModal = true
    }
  }
};
</script>
