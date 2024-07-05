<template>
  <section id="carousel">
    <Carousell />
  </section>
  <section id="pricing">
    <Pricing />
  </section>
  <section id="background">
    <Background />
  </section>
  <section class="container mt-32">
    <h3
      class="md:text-4xl text-2xl lg:leading-normal leading-normal font-bold my-4 text-hom4 ml-50"
    >
      Trải nghiệm
      <span style="color: #009edb"> ứng dụng VNSKY</span>
    </h3>
  </section>
  <section id="box_icon" style="background-color: #4da3e2">
    <BoxIcon />
  </section>
  <section id="vnsky" class="md:mt-24 mt-16">
    <Vnsky />
  </section>
</template>

<script>
export default {};
</script>
<script setup>
import Carousell from "@/components/Carousell.vue";
import Pricing from "@/components/Pricing.vue";
import Background from "@/components/Background.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Vnsky from "@/components/Vnsky.vue";
</script>

<style scoped>
#vnsky {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 91px;
  margin-right: 91px;
}
</style>
