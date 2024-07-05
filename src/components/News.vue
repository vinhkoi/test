<template>
  <div class="container">
    <div class="flex">
      <div class="icon">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div class="flex-col mx-5">
        <div>Giới thiệu ></div>
        <h1 class="font-bold">Tin tức</h1>
      </div>
    </div>
    <div class="hot-news">
      <div class="grid grid-cols-12 a1">
        <div class="col-span-12 a11">
          <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] a111">
            <div class="lg:col-span-9 xl:grid-cols-9 md:col-span-12 sm:col-span-12">
              <div>
                <div>
                  <div class="routerLink">
                    <img
                      src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002206177.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div class="routerLink">
                    <h1 class="font-bold mt-3">MỞ SIM THỨ HAI - CHỌN SỐ PHÁT TÀI</h1>
                  </div>
                  <p class="sub-title">
                    <img src="https://vnsky.vn/img/1f4cd.16d417b8.svg" alt="" /> Cùng khai
                    mở năm mới phát tài với SIM số đẹp, dễ nhớ, hợp phong thủy từ VNSKY.
                    ......
                  </p>
                  <p class="mt-3 public-date">05 tháng 02 , 2024</p>
                  <div class="routerLink">
                    <p class="font-bold show-more mt-3">Xem thêm</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="lg:col-span-3 xl:grid-cols-3 md:col-span-12 sm:col-span-12 attention-news"
            >
              <div>
                <h3 class="font-bold">Đáng chú ý</h3>
                <div>
                  <div class="routerLink">
                    <img
                      src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000078918.jpeg"
                      alt=""
                      class="mt-5"
                      style="width: 100%"
                    />
                  </div>
                  <div class="routerLink">
                    <h3 class="font-bold mt-3">
                      THỨ 4 VUI VẺ - NẠP THẺ TẶNG TỚI 20% trong tháng 3/2024
                    </h3>
                  </div>
                  <p class="mt-2" style="color: rgb(153, 153, 177)">11 tháng 03 , 2024</p>
                  <div class="routerLink">
                    <p class="font-bold show-more">Xem thêm</p>
                  </div>
                </div>
                <div>
                  <div class="routerLink">
                    <img
                      src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg"
                      alt=""
                      class="mt-5"
                      style="width: 100%; object-fit: cover"
                    />
                  </div>
                  <div class="routerLink">
                    <h3 class="font-bold mt-3">
                      Thả ga giải trí - Chỉ với 10K cùng VNSKY
                    </h3>
                  </div>
                  <p class="mt-2" style="color: rgb(153, 153, 177)">12 tháng 03 , 2024</p>
                  <div class="routerLink">
                    <p class="font-bold show-more" id="scrollTarget">Xem thêm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-news grid grid-cols-12">
      <div class="col-span-12 a11">
        <!-- <div class="tabs m-0">
          <div class="active tab">Tất cả</div>
          <div class="tab">Tin khuyến mại</div>
          <div class="tab">Tin tức VNSKY</div>
        </div> -->
        <div class="content">
          <div class="tab-content">
            <div class="col-span-12">
              <!-- <div class="py-[60px] px-0">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] a111">
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            Thả ga giải trí - Chỉ với 10K cùng VNSKY
                          </h3>
                        </div>
                        <p class="mt-2">12 tháng 03 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000078918.jpeg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            THỨ 4 VUI VẺ - NẠP THẺ TẶNG TỚI 20% trong tháng 3/2024
                          </h3>
                        </div>
                        <p class="mt-2">11 tháng 03 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000927410.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            HƯỚNG DẪN MUA ESIM NHANH CHÓNG, DỄ DÀNG
                          </h3>
                        </div>
                        <p class="mt-2">29 tháng 02 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002202879.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            eSIM LÀ GÌ? LỢI ÍCH KHI SỬ DỤNG eSIM
                          </h3>
                        </div>
                        <p class="mt-2">27 tháng 02 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002204620.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            eSIM có thể dùng được tại Việt Nam không?
                          </h3>
                        </div>
                        <p class="mt-2">27 tháng 02 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000939767.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            NÊN DÙNG ESIM HAY SIM VẬT LÝ CHO SMARTPHONE
                          </h3>
                        </div>
                        <p class="mt-2">26 tháng 02 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002206177.jpeg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            MỞ SIM THỨ HAI - CHỌN SỐ PHÁT TÀI
                          </h3>
                        </div>
                        <p class="mt-2">05 tháng 02 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000000849113.jpeg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            VNSKY THÔNG BÁO THỜI GIAN GIAO NHẬN ĐƠN HÀNG DỊP TẾT NGUYÊN
                            ĐÁN 2024
                          </h3>
                        </div>
                        <p class="mt-2">30 tháng 01 , 2024</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-12">
                    <div
                      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                    >
                      <div>
                        <div class="routerLink">
                          <img
                            src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000334001.jpeg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="demo">
                        <div class="routerLink">
                          <h3 class="font-bold mt-3">
                            VUI GIÁNG SINH - RINH VOUCHER TỚI 200K CÙNG VNSKY
                          </h3>
                        </div>
                        <p class="mt-2">23 tháng 12 , 2023</p>
                        <div class="routerLink">
                          <p class="font-bold show-more">Xem thêm</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="card">
                <TabView>
                  <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                    <div class="py-[60px] px-0">
                      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] a111">
                        <div
                          v-for="post in tab.posts"
                          :key="post.id"
                          class="lg:col-span-4 md:col-span-12"
                        >
                          <div
                            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
                          >
                            <div>
                              <div class="routerLink">
                                <img :src="post.image" alt="" />
                              </div>
                            </div>
                            <div class="demo">
                              <div class="routerLink">
                                <h3 class="font-bold mt-3">{{ post.title }}</h3>
                              </div>
                              <p class="mt-2">{{ post.date }}</p>
                              <div class="routerLink">
                                <p class="font-bold show-more">Xem thêm</p>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>
        </div>
        <div class="paginator flex justify-center">
          <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >4</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >5</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="banner">
      <a data-v-5a5ae907="" target="_blank" href=""
        ><img
          data-v-5a5ae907=""
          alt=""
          src="https://cms.vnsky.vn/webform/cms/assets/images/banner/00d08e4bdd1ac375c32e258d2d426c9e.jpeg"
      /></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    title: "Tất cả",
    posts: [
      {
        id: 1,
        title: "Bài viết 1",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 1",
      },
      {
        id: 2,
        title: "Bài viết 2",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000078918.jpeg",
        date: "Ngày đăng 2",
      },
      {
        id: 3,
        title: "Bài viết 3",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000927410.png",
        date: "Ngày đăng 3",
      },
      {
        id: 1,
        title: "Bài viết 1",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 1",
      },
      {
        id: 2,
        title: "Bài viết 2",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000078918.jpeg",
        date: "Ngày đăng 2",
      },
      {
        id: 3,
        title: "Bài viết 3",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000927410.png",
        date: "Ngày đăng 3",
      },
      {
        id: 1,
        title: "Bài viết 1",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 1",
      },
      {
        id: 2,
        title: "Bài viết 2",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000078918.jpeg",
        date: "Ngày đăng 2",
      },
      {
        id: 3,
        title: "Bài viết 3",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000927410.png",
        date: "Ngày đăng 3",
      },
      {
        id: 1,
        title: "Bài viết 1",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 1",
      },
      {
        id: 2,
        title: "Bài viết 2",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000078918.jpeg",
        date: "Ngày đăng 2",
      },
      {
        id: 3,
        title: "Bài viết 3",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c1b86f1010000000000927410.png",
        date: "Ngày đăng 3",
      },
    ],
  },
  {
    title: "Tin khuyến mại",
    posts: [
      {
        id: 1,
        title: "Bài viết 1",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 1",
      },
    ],
  },
  {
    title: "Tin tức VNSKY",
    posts: [
      {
        id: 1,
        title: "Bài viết 1",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 1",
      },
      {
        id: 2,
        title: "Bài viết 2",
        image:
          "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
        date: "Ngày đăng 2",
      },
    ],
  },
]);

const activeTabIndex = ref(0);

const changeTab = (index) => {
  activeTabIndex.value = index;
};
</script>
<script>
// export default {
//   data() {
//     return {
//       activeTab: "Tất cả",
//       tabs: [
//         {
//           title: "Tất cả",
//           posts: [
//             {
//               id: 1,
//               title: "Bài viết 1",
//               image:
//                 "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
//               date: "Ngày đăng 1",
//             },
//             {
//               id: 2,
//               title: "Bài viết 2",
//               image:
//                 "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
//               date: "Ngày đăng 2",
//             },
//             // Thêm bài viết khác nếu cần
//           ],
//         },
//         {
//           title: "Tin khuyến mại",
//           posts: [
//             {
//               id: 1,
//               title: "Bài viết 1",
//               image:
//                 "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
//               date: "Ngày đăng 1",
//             },
//             {
//               id: 2,
//               title: "Bài viết 2",
//               image:
//                 "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
//               date: "Ngày đăng 2",
//             },
//           ],
//         },
//         {
//           title: "Tin tức VNSKY",
//           posts: [
//             {
//               id: 1,
//               title: "Bài viết 1",
//               image:
//                 "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
//               date: "Ngày đăng 1",
//             },
//             {
//               id: 2,
//               title: "Bài viết 2",
//               image:
//                 "https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18e245a00000000000000127851.jpeg",
//               date: "Ngày đăng 2",
//             },
//           ],
//         },
//       ],
//     };
//   },
// };
</script>

<style scoped>
.container {
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

.container .flex div.icon {
  background-color: rgb(0, 90, 170);
  padding: 10px;
  border-radius: 8px;
}
.container .flex div.icon img {
  width: 40px;
}
.container .flex {
  margin: 40px 0px;
}
.mx-5 {
  margin-left: 1.25rem !important;
  margin-right: 1.25rem !important;
}
.a1 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.a11 {
  grid-column: span 12 / span 12 !important;
}
.a111 {
  grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  gap: 30px !important;
}
@media (min-width: 768px) {
  .md\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }
}
.container .hot-news .attention-news {
  background-image: linear-gradient(rgb(230, 230, 230), rgb(255, 255, 255));
  padding: 10px 20px;
}
@media (min-width: 768px) {
  .md\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }
}
@media (min-width: 1024px) {
  .lg\:col-span-9 {
    grid-column: span 9 / span 9 !important;
  }
}
@media (min-width: 1024px) {
  .lg\:col-span-3 {
    grid-column: span 3 / span 3 !important;
  }
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(190, 190, 190);
}
.py-\[60px\] {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}
@media (min-width: 768px) {
  .md\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }
}
.paginator button {
  background-color: rgb(223, 223, 223);
  padding: 5px 15px;
  font-weight: 600;
  border-radius: 3px;
}
.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
}
.col-span-12 {
  grid-column: span 12 / span 12 !important;
}
@media (min-width: 1024px) {
  .lg\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }
}
@media (min-width: 1024px) {
  .lg\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }
}
.container .grid .col-span-12 .px-0 .grid img {
  width: 100%;
  height: 200px;
}
.tab {
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: none;
  color: rgb(139, 139, 139);
}
.tab.active {
  border-bottom: 2px solid rgb(0, 90, 170);
  color: rgb(0, 0, 0);
  font-weight: 700;
}
</style>
