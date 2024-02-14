<template>
  <div class="grid grid-cols-3 gap-4 mb-8">
    <div class="card-dashboard rounded-[10px] p-4">
      <div class="flex justify-between items-center mb-4">
        <p class="text-sm font-semibold text-[#727272]">Pending</p>
        <div class="bg-[#F2F4F7] p-2">
          <Icon icon="solar:square-transfer-horizontal-broken" class="text-[#817F7F]" />
        </div>
      </div>
      <h1 class="text-xl font-semibold text-[#080808] mb-8">2.480,<span class="text-[#9A9A9A]">30</span></h1>
      <div class="flex justify-between items-center">
        <div class="flex">
          <div class="flex mr-2">
            <Icon icon="ph:arrow-up-bold" class="text-[#4CBF93] rotate-45 mr-2" />
            <p class="text-[10px] text-[#4CBF93] font-semibold">2,15%</p>
          </div>
          <p class="text-[10px] font-medium text-[#AAAAAA]">Last Month</p>
        </div>
        <p class="text-[10px] font-semibold text-[#6E6E6E] cursor-pointer">View More</p>
      </div>
    </div>
    <div class="card-dashboard rounded-[10px] p-4">
      <div class="flex justify-between items-center mb-4">
        <p class="text-sm font-semibold text-[#727272]">Paid</p>
        <div class="bg-[#F2F4F7] p-2">
          <Icon icon="solar:square-transfer-horizontal-broken" class="text-[#817F7F]" />
        </div>
      </div>
      <h1 class="text-xl font-semibold text-[#080808] mb-8">84.310<span class="text-[#9A9A9A]"></span></h1>
      <div class="flex justify-between items-center">
        <div class="flex">
          <div class="flex mr-2">
            <Icon icon="ph:arrow-right-bold" class="text-[#EE7C85] rotate-45 mr-2" />
            <p class="text-[10px] text-[#EE7C85] font-semibold">1,10%</p>
          </div>
          <p class="text-[10px] font-medium text-[#AAAAAA]">Last Month</p>
        </div>
        <p class="text-[10px] font-semibold text-[#6E6E6E] cursor-pointer">View More</p>
      </div>
    </div>
    <div class="card-dashboard rounded-[10px] p-4">
      <div class="flex justify-between items-center mb-4">
        <p class="text-sm font-semibold text-[#727272]">Rejected</p>
        <div class="bg-[#F2F4F7] p-2">
          <Icon icon="solar:square-transfer-horizontal-broken" class="text-[#817F7F]" />
        </div>
      </div>
      <h1 class="text-xl font-semibold text-[#080808] mb-8">12.155<span class="text-[#9A9A9A]"></span></h1>
      <div class="flex justify-between items-center">
        <div class="flex">
          <div class="flex mr-2">
            <Icon icon="ph:arrow-up-bold" class="text-[#4CBF93] rotate-45 mr-2" />
            <p class="text-[10px] text-[#4CBF93] font-semibold">2,15%</p>
          </div>
          <p class="text-[10px] font-medium text-[#AAAAAA]">Last Month</p>
        </div>
        <p class="text-[10px] font-semibold text-[#6E6E6E] cursor-pointer">View More</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>