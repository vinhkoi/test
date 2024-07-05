<template>
  <div>
    <h3
      class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-center"
    >
      ĐỒNG HÀNH CÙNG<span style="color: rgb(55, 162, 224)"> VNSKY</span>
    </h3>
    <div class="wrapper">
      <Flicking :options="{ circular: true }" :plugins="plugins">
        <!-- Carousel cho logo -->
        <div
          v-for="idx in logoList.length"
          :key="'logo-' + idx"
          class="tiny-slide tns-item tns-slide-cloned"
          aria-hidden="true"
          tabindex="-1"
        >
          <div class="list-none text-center">
            <div
              class="logo-item p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out"
              :style="{
                'margin-right': idx === 1 ? 'auto' : '20px',
                'margin-left': idx === logoList.length ? 'auto' : '20px',
              }"
            >
              <img :src="logoList[idx - 1]" class="" alt="" />
            </div>
          </div>
        </div>
        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
        </template>
      </Flicking>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
export default {
  data() {
    return {
      plugins: [new Arrow()],
      logoList: [
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",
        "https://vnsky.vn/img/phongvu.ac914ae8.png",

        // Thêm các URL logo khác nếu cần
      ],
    };
  },
};
</script>

<style scoped>
.logo-item {
  margin-right: 20px; /* Thay đổi khoảng cách giữa các logo tại đây */
}
</style>
