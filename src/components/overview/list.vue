<template>
  <div>
    <div v-if="selectedProvinceId" class="h-[800px] overflow-auto">
      <div class="flex justify-between items-center mt-5 mb-8">
        <h2 class="text-[17px] font-semibold text-[#080808]">List Province</h2>
        <div class="flex items-center">
          <p class="mr-4">Sort By :</p>
          <div>
            <label v-for="option in options" :key="option.id" class="mr-4">
              <input type="radio" :value="option.value" v-model="selectedOption">
              {{ option.label }}
            </label>
          </div>
        </div>
      </div>
      <div v-for="province in sortProvinces(provinces, selectedOption, 'asc')" :key="province.id" class="mb-4">
        <Collapse :provinceName="province.name">
          <div v-for="(city, i) in cities" :key="city">
            <div v-if="province.id === city.provinsi_id">
              <p>{{ ` - ${city.name}` }}</p>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  </div>
</template>

<script>
import DataProvince from "../../assets/js/province";
import DataCity from "../../assets/js/city";
import Collapse from './collapse.vue';
export default {
  data() {
    return {
      selectedProvinceId: 1,
      cities: DataCity.city,
      provinceName: '',
      provinces: DataProvince.province,
      newSort: '',
      selectedOption: 'id',
      options: [
        { id: 1, label: 'ID', value: 'id' },
        { id: 2, label: 'Name', value: 'name' },
      ]
    };
  },
  components: {
    Collapse
  },
  watch: {
    selectedProvinceId(newValue) {
      this.cities = getCitiesByProvinceId(newValue);
    },
    selectedOption(data) {
      if (data) {
        this.sortProvinces(this.provinces, data, 'asc')
      }
    }
  },
  methods: {
    getCitiesByProvinceId(provinceId) {
      return provincesCitiesData[provinceId] || [];
    },
    getProvinceNameByCityId(cityId) {
      for (const [provinceId, provinceName] of Object.entries(citiesProvincesData)) {
        if (getCitiesByProvinceId(provinceId).includes(cityId)) {
          return provinceName;
        }
      }
      return null;
    },
    sortProvinces(provinces, sortBy = 'id', sortOrder = 'asc') {
      return provinces.sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'id') {
          comparison = a.id - b.id;
        } else if (sortBy === 'name') {
          comparison = a.name.localeCompare(b.name);
        }
        return comparison;
      });
    },
  }
};
</script>