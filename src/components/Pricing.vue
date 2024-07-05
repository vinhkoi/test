<template>
  <section class="relative md:py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold mb-5">
          Chọn ngay <span style="color: rgb(55, 162, 224)">gói cước </span>phù hợp
        </h3>
      </div>
      <!-- <div class="categoryradiobuttons">
        <ul
          class="items-center justify-center w-full text-sm font-medium text-gray-900 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <li class="">
            <div class="flex items-center ps-3 justify-around aa">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  1 Tháng
                </span>
              </button>
            </div>
          </li>
          <li class="">
            <div class="flex items-center ps-3 justify-around aa">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  3 Tháng
                </span>
              </button>
            </div>
          </li>
          <li class="">
            <div class="flex items-center ps-3 justify-around aa">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  6 Tháng
                </span>
              </button>
            </div>
          </li>
          <li class="">
            <div class="flex items-center ps-3 justify-around aa">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  12 Tháng
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div> -->
      <div class="grid grid-cols-1 mt-2 md:mt-6 relative">
        <div class="uk-slider">
          <div class="uk-slider-container">
            <Test />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<script setup>
import Test from "@/components/Test.vue";
</script>
<style>
.aa {
  display: flex;
  justify-content: space-around;
}
.bb {
  justify-content: space-evenly;
}
.cc {
  padding: 0px;
  transition: transform 0.3s ease;
}
.cc:hover {
  transform: scale(1.2);
}
.uk-slider {
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
