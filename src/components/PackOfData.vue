<template>
  <div class="bg-gray-50 dark:bg-slate-800" style="min-height: 100vh">
    <div class="container py-5">
      <p>
        <img class="" src="https://vnsky.vn/img/step_1_goicuoc.dd608022.svg" alt="" />
      </p>
    </div>
    <section class="relative md:py-16">
      <div class="container">
        <div class="grid grid-cols-1 text-center">
          <h3
            class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold mb-5"
          >
            Chọn ngay <span style="color: rgb(55, 162, 224)">gói cước </span>phù hợp
          </h3>
        </div>
        <div class="grid grid-cols-1 mt-2 md:mt-6 relative">
          <div class="uk-slider">
            <div class="uk-slider-container">
              <Test />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<script setup>
import Test from "@/components/Test.vue";
</script>
<style scoped>
.container {
  position: relative;
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
.uk-slider {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
