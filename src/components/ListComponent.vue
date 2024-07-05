<template>
  <div class="container">
    <div class="text-center">
      <h1>Điểm cung cấp dịch vụ viễn thông VNSKY</h1>
      <p class="title">Tìm điểm cung cấp dịch vụ gần bạn</p>
    </div>
    <div class="flex justify-center gap-5 mt-5">
      <div class="select">
        <select v-model="selectedRegion">
          <option value="">Chọn tỉnh/thành phố</option>
          <option v-for="(item, index) in regions" :key="index">{{ item.label }}</option>
        </select>
      </div>
      <div class="select">
        <select v-model="selectedCountryside">
          <option value="">Chọn quận/huyện</option>
          <option v-for="(countryside, index) in filteredCountrysides" :key="index">
            {{ countryside.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="mt-5 address">
      <div v-for="(location, index) in filteredLocations" :key="index">
        <div class="flex justify-between items-center">
          <ul>
            <li>
              <p class="font-bold mb-3">Khu vực {{ location.region }}</p>
              <p><span class="font-bold">Địa chỉ:</span> {{ location.address }}</p>
              <p><span class="font-bold">Điện thoại:</span> {{ location.phone }}</p>
            </li>
          </ul>
          <ul class="show-maps">
            <li>
              <a :href="location.mapLink" target="_blank">Xem bản đồ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedRegion = ref("");
const selectedCountryside = ref("");
const regions = ref([
  { label: "Thành phố Hà Nội", value: "Thành phố Hà Nội" },
  { label: "Thành phố Hồ Chí Minh", value: "Thành phố Hồ Chí Minh" },
  { label: "Tỉnh Vĩnh Phúc", value: "Tỉnh Vĩnh Phúc" },
  { label: "Tỉnh Phú Thọ", value: "Tỉnh Phú Thọ" },
  { label: "Tỉnh Nghệ An", value: "Tỉnh Nghệ An" },
  { label: "Tỉnh Thanh Hóa", value: "Tỉnh Thanh Hóa" },
]);
const countrysides = ref([
  {
    name: "Quận Đống Đa",
    code: "1",
    region: "Thành phố Hà Nội",
    address:
      "Tầng 4, tòa Hateco Laroma, số 4A đường Huỳnh Thúc Kháng kéo dài, quận Đống Đa, thành phố Hà Nội",
    phone: "0777982686",
    mapLink: "#",
  },
  {
    name: "Quận 1",
    code: "2",
    region: "Thành phố Hồ Chí Minh",
    address: "Lầu 8 117 Nguyễn Du, phường Bến Thành, quận 1, thành phố Hồ Chí Minh",
    phone: "0777973969",
    mapLink: "#",
  },
  {
    name: "Khu vực Vĩnh Phúc",
    code: "3",
    region: "Tỉnh Vĩnh Phúc",
    address: "83C đường Lam Sơn, phường Tích Sơn, thành phố Vĩnh Yên, tỉnh Vĩnh Phúc",
    phone: "0777163062",
    mapLink: "#",
  },
]);

const filteredCountrysides = computed(() => {
  if (!selectedRegion.value) return countrysides.value;
  return countrysides.value.filter(
    (countryside) => countryside.region === selectedRegion.value
  );
});

const filteredLocations = computed(() => {
  let locations = [];
  if (selectedCountryside.value) {
    locations = filteredCountrysides.value.filter(
      (countryside) => countryside.name === selectedCountryside.value
    );
    if (selectedCountryside.value === "Tất cả") {
      locations = countrysides.value;
    }
    if (selectedRegion.value === "Tất cả") {
      locations = countrysides.value;
    }
  } else if (selectedRegion.value) {
    locations = countrysides.value.filter(
      (countryside) => countryside.region === selectedRegion.value
    );
  } else {
    locations = countrysides.value;
  }
  return locations;
});
</script>
<style scoped>
.container {
  margin-top: 65px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-right: 45px;
    padding-left: 45px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding-right: 5rem;
    padding-left: 5rem;
  }
}
h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
p.title {
  font-size: 1.5rem;
  margin-top: 50px;
}
select {
  border: 1px solid #b8b8b8;
  padding: 5px 30px;
  border-radius: 5px;
}
.address {
  padding: 0 5%;
  height: 55vh;
  overflow: auto;
  margin-bottom: 20px;
  position: relative;
}
.address a {
  color: #045aaf;
  font-weight: 800;
  font-size: 20px;
}
.address .flex {
  border-bottom: 1px solid #515151;
  padding: 50px 0;
}
</style>
