<template>
  <section class="relative md:py-24 py-16">
    <div class="container">
      <h1 class="font-bold text-5xl text-center mb-12 md:text-3xl text-faq">
        Câu hỏi thường gặp
      </h1>
      <div class="hidden lg:block">
        <div
          class="grid md:grid-cols-5 grid-cols-2 justify-center gap-[30px] mb-6 title-faq"
        >
          <button
            v-for="(button, index) in buttons"
            :key="index"
            :class="{ active: activeTabIndex === index }"
            type="button"
            :aria-expanded="activeTabIndex === index ? 'true' : 'false'"
            :aria-controls="button.ariaControls"
            @click="changeTab(index)"
          >
            {{ button.title }}
          </button>
        </div>
      </div>
      <div class="!block lg:hidden">
        <div class="grid md:grid-cols-2 grid-cols-2 justify-center gap-[30px] mb-6 a1">
          <div
            v-for="(button, index) in buttons"
            :key="index"
            class="relative shadow overflow-hidden mx-auto w-full leading-9 text-center"
          >
            <button
              type="button"
              class="text-center"
              :class="{ active: activeTabIndex === index }"
              aria-expanded="true"
              :aria-controls="button.ariaControls"
              @click="changeTab(index)"
            >
              {{ button.title }}
            </button>
          </div>
        </div>
      </div>
      <TabView :activeIndex="activeTabIndex" @update:activeIndex="changeTab">
        <TabPanel v-for="(tab, index) in filteredTabs" :key="index">
          <div class="mb-12 mt-10">
            <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
              <div
                class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden ch-box mt-4"
                v-for="(section, sIndex) in tab.sections"
                :key="sIndex"
              >
                <h2
                  class="text-base font-semibold"
                  :id="'accordion-collapse-heading-' + sIndex"
                >
                  <button
                    type="button"
                    class="flex justify-between items-center p-3 w-full font-medium ltr:text-left rtl:text-right"
                    :aria-expanded="section.open"
                    :aria-controls="'thongtinchung-' + sIndex"
                    @click="toggleAccordion(sIndex, tab)"
                  >
                    <span>{{ section.title }}</span>
                    <svg
                      data-accordion-icon=""
                      class="w-4 h-4 shrink-0"
                      :class="{ 'transform rotate-180': section.open }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  :id="'thongtinchung-' + sIndex"
                  class="accordion-content"
                  v-show="section.open"
                >
                  {{ section.content }}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabView>
      <section
        class="relative mt-32"
        style="background-color: rgb(77, 163, 226); border-radius: 12px"
      >
        <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px] box-faq">
          <div class="lg:col-span-8 md:col-span-12 hidden md:block">
            <h1 class="mx-4 text-white text-3xl font-bold">
              Bạn cần hỗ trợ thêm? Liên hệ ngay với VNSKY
            </h1>
            <div class="flex lg:col-span-4" style="justify-content: space-between">
              <div class="mx-4">
                <a class="p-2" href="https://www.facebook.com/myvnsky"
                  ><img
                    src="https://vnsky.vn/img/faq-mess.9b30ebb4.png"
                    alt=""
                    style="width: 310px" /></a
                ><a class="p-2" href="mailto:cskh@vnsky.vn"
                  ><img
                    src="https://vnsky.vn/img/faq-email.82e81088.png"
                    alt=""
                    style="width: 310px"
                /></a>
              </div>
              <div class="mx-4">
                <a class="p-2" href="https://zalo.me/3063616069076585675"
                  ><img
                    src="https://vnsky.vn/img/faq-zalo.cc071aed.png"
                    alt=""
                    style="width: 310px" /></a
                ><a class="p-2" href="tel:19005222"
                  ><img
                    src="https://vnsky.vn/img/faq-hotline.827445df.png"
                    alt=""
                    style="width: 310px"
                /></a>
              </div>
            </div>
          </div>
          <div
            class="lg:col-span-8 md:col-span-12 !block md:hidden mx-4"
            style="text-align: -webkit-center"
          >
            <h1 class="text-white text-3xl font-bold mt-6">
              Bạn cần hỗ trợ thêm? Liên hệ ngay với VNSKY
            </h1>
            <div class="mx-auto">
              <a class="p-2" href="https://www.facebook.com/myvnsky"
                ><img
                  src="https://vnsky.vn/img/faq-mess.9b30ebb4.png"
                  alt=""
                  style="width: 310px" /></a
              ><a class="p-2" href="mailto:cskh@vnsky.vn"
                ><img
                  src="https://vnsky.vn/img/faq-email.82e81088.png"
                  alt=""
                  style="width: 310px" /></a
              ><a class="p-2" href="https://zalo.me/3063616069076585675"
                ><img
                  src="https://vnsky.vn/img/faq-zalo.cc071aed.png"
                  alt=""
                  style="width: 310px" /></a
              ><a class="p-2" href="tel:19005222"
                ><img
                  src="https://vnsky.vn/img/faq-hotline.827445df.png"
                  alt=""
                  style="width: 310px"
              /></a>
            </div>
          </div>
          <div class="lg:col-span-4 md:col-span-12 relative">
            <a class="icon-dt"
              ><img
                src="https://vnsky.vn/img/faq-dt.df6d38ea.webp"
                class="mx-auto d-block"
                alt=""
            /></a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<script setup>
import { ref, computed } from "vue";

const buttons = ref([
  { title: "Thông tin chung", ariaControls: "thongtinchung1" },
  { title: "Mua Sim số", ariaControls: "muasimso1" },
  { title: "Gói Cước", ariaControls: "goicuoc1" },
  { title: "Kích hoạt SIM", ariaControls: "ekyc1" },
  { title: "eSim", ariaControls: "esim1" },
  { title: "Nạp Tiền", ariaControls: "naptien1" },
  { title: "Chuyển quyền sở hữu", ariaControls: "donhang1" },
  { title: "DV GTGT", ariaControls: "dvgtgt1" },
  { title: "Chuyển đổi SIM/eSIM", ariaControls: "muthongtinthietbidaucuoiasimso1" },
  { title: "Hướng dẫn sử dụng", ariaControls: "dailycongtacvien1" },
]);

const tabs = ref([
  {
    title: "Tab 1",
    sections: [
      {
        title: "Section 1",
        content: "Content for Section 1",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      // Add more sections as needed
    ],
  },
  {
    title: "Tab 2",
    sections: [
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      // Add more sections as needed
    ],
  },
  {
    title: "Tab 2",
    sections: [
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      // Add more sections as needed
    ],
  },
  {
    title: "Tab 2",
    sections: [
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      {
        title: "Section 2",
        content: "Content for Section 2",
        open: false,
      },
      // Add more sections as needed
    ],
  },
]);

const activeTabIndex = ref(0);

const changeTab = (index) => {
  activeTabIndex.value = index;
};

const toggleAccordion = (index, tab, tabIndex) => {
  tab.sections.forEach((section, i) => {
    if (i === index) {
      section.open = !section.open;
    } else {
      section.open = false;
    }
  });
};

const filteredTabs = computed(() => {
  return tabs.value.filter((tab) => tab.sections.length > 0);
});
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

@media (min-width: 768px) {
  .md\:py-24 {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
  }
}

.py-16 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

.a1 {
  gap: 30px;
}

.mb-12 {
  margin-bottom: 3rem !important;
}
.ch-box {
  background-color: #e6f5ff !important;
  border: 1px solid #4da3e2;
}
.mt-4 {
  margin-top: 1rem !important;
}
.mt-32 {
  margin-top: 8rem !important;
}
.gap-\[30px\] {
  gap: 30px !important;
}
.box-faq {
  align-items: center;
  height: 250px;
}
@media (min-width: 768px) {
  .md\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }
}
@media (min-width: 1024px) {
  .lg\:col-span-8 {
    grid-column: span 8 / span 8 !important;
  }
}
@media (min-width: 1024px) {
  .lg\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }
}
@media (min-width: 768px) {
  .md\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
  }
}
.title-faq {
  border-bottom: 1px solid #ccc;
  height: 45px;
}
.active {
  font-weight: bold;
}
</style>
