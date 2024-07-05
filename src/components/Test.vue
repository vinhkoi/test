<template>
  <div class="card">
    <div class="categoryradiobuttons">
      <ul
        class="items-center justify-center w-full text-sm font-medium text-gray-900 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="tab.title"
          :class="{ active: activeTabIndex === index }"
        >
          <div class="flex items-center ps-3 justify-around aa">
            <button
              @click="changeTab(index)"
              class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >{{ tab.title }}</span
              >
            </button>
          </div>
        </li>
      </ul>
    </div>
    <el-carousel :interval="0" type="card" height="500px" class="el">
      <el-carousel-item
        v-for="product in tabs[activeTabIndex].products"
        :key="product.id"
      >
        <div class="el-carousel___container">
          <div
            class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 cc"
          >
            <div class="flex-col relative rounded-lg overflow-hidden">
              <div class="box-image">
                <img :src="product.image" :alt="product.title" />
              </div>
              <div class="buy-btn">
                <button
                  type="button"
                  class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    title: "1 Tháng",
    products: [
      {
        id: 1,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
        title: "Product 1",
      },
      {
        id: 2,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000363975.jpeg",
        title: "Product 2",
      },
      {
        id: 3,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505652.jpeg",
        title: "Product 3",
      },
      {
        id: 4,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467364.jpeg",
        title: "Product 4",
      },
      {
        id: 5,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505454.jpeg",
        title: "Product 5",
      },
      // Add more products as needed
    ],
  },
  {
    title: "3 Tháng",
    products: [
      {
        id: 3,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505652.jpeg",
        title: "Product 3",
      },
      // Add more products as needed
    ],
  },
  {
    title: "6 Tháng",
    products: [
      {
        id: 1,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
        title: "Product 1",
      },
      {
        id: 2,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000363975.jpeg",
        title: "Product 2",
      },
      {
        id: 3,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505652.jpeg",
        title: "Product 3",
      },
      // Add more products as needed
    ],
  },
  {
    title: "12 Tháng",
    products: [
      {
        id: 1,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
        title: "Product 1",
      },
      {
        id: 2,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000363975.jpeg",
        title: "Product 2",
      },
      {
        id: 3,
        image:
          "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505652.jpeg",
        title: "Product 3",
      },
      // Add more products as needed
    ],
  },
  // Add more tabs as needed
]);

const activeTabIndex = ref(0);

const changeTab = (index) => {
  activeTabIndex.value = index;
};
</script>

<style scoped>
.categoryradiobuttons li {
  display: inline;
}

.categoryradiobuttons .active button span {
  background-color: #99a9bf;
}

.categoryradiobuttons li:not(:last-child) button {
  margin-right: 10px;
}
</style>
