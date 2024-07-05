<template>
  <section class="relative w-full box-tracuu" style="background-color: rgb(55, 162, 224)">
    <div class="container mb-16">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8 text-center mt-10">
        <div class="lg:col-span-6 md:col-span-12 pb-16 md:text-center">
          <h3
            class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white"
          >
            Tra cứu đơn hàng
          </h3>
          <div class="subcribe-form mt-6 mb-3 lg:absolute md:relative">
            <form class="relative max-w-xl mx-auto">
              <input
                type="text"
                pattern="[a-zA-Z0-9\s]+"
                class="pt-4 ltr:pr-40 rtl:pl-40 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-xl bg-white dark:bg-slate-900/60 shadow dark:shadow-gray-800"
                placeholder="Mã vận đơn..."
              /><button
                type="submit"
                class="btn h-[46px] text-white rounded-xl mt-6"
                style="background-color: rgb(0, 90, 170); border: rgb(0, 90, 170)"
              >
                Tra cứu
              </button>
              <div style="color: rgb(255, 255, 255)"></div>
            </form>
          </div>
        </div>
        <div class="lg:col-span-6 md:col-span-12 relative image-tra-cuu">
          <div class="absolute">
            <img src="https://vnsky.vn/img/donhang.835e14fc.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.box-tracuu {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.mb-16 {
  margin-bottom: 4rem !important;
}
.gap-\[30px\] {
  gap: 30px !important;
}
@media (min-width: 1024px) {
  .lg\:col-span-6 {
    grid-column: span 6 / span 6 !important;
  }
}
@media (min-width: 768px) {
  .md\:text-center {
    text-align: center !important;
  }
}
@media (min-width: 1024px) {
  .lg\:absolute {
    position: absolute !important;
  }
}
.ltr\:pl-6 {
  padding-left: 1.5rem !important;
}
.ltr\:pr-40 {
  padding-right: 10rem !important;
}
.outline-none {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}
@media (max-width: 1125px) {
  .image-tra-cuu {
    display: none;
  }
}
</style>
