<template>
  <el-carousel :interval="0" type="card" height="200px">
    <el-carousel-item v-for="item in items" :key="item.id">
      <div class="el-carousel___container">
        <div
          class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 cc"
        >
          <div class="flex-col relative rounded-lg overflow-hidden">
            <div class="box-image">
              <img :src="item.image" :alt="item.title" />
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
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image:
            "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
          title: "Slide 1 Title",
        },
        {
          id: 2,
          image:
            "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
          title: "Slide 2 Title",
        },
        {
          id: 3,
          image:
            "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
          title: "Slide 3 Title",
        },
        {
          id: 4,
          image:
            "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000363975.jpeg",
          title: "Slide 4 Title",
        },
        {
          id: 5,
          image:
            "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505652.jpeg",
          title: "Slide 5 Title",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel___container {
  height: 325px;
  width: 200px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
