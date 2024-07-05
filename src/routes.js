// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Carousell from "./components/Carousell.vue";
import Pricing from "./components/Pricing.vue";
import Background from "./components/Background.vue";
import BoxIcon from "./components/BoxIcon.vue";
import Vnsky from "./components/Vnsky.vue";
import Footer from "./components/Footer.vue";
import News from "./components/News.vue";
import TFooter from "./components/TFooter.vue";
import Home from "./components/Home.vue";
import SupportQuestion from "./components/SupportQuestion.vue";
import ListComponent from "./components/ListComponent.vue";
import Recharge from "./components/Recharge.vue";
import PackOfData from "./components/PackOfData.vue";
import PickNumber from "./components/PickNumber.vue";
import SearchOder from "./components/SearchOder.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/supportquestion', component: SupportQuestion },
  { path: '/supportlocation', component: ListComponent },
  { path: '/recharge', component: Recharge },
  { path: '/packofdata', component: PackOfData },
  { path: '/picknumber', component: PickNumber },
  { path: '/searchoder', component: SearchOder },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
