<template>
  <section class="relative py-16">
    <div class="container">
      <h1
        class="md:text-4xl md:leading-normal text-2xl leading-normal font-bold text-center"
      >
        Nạp tiền điện thoại
      </h1>
      <p class="text-center">Nạp tiền dễ dàng - Gia hạn nhanh chóng</p>
      <div class="flex justify-center md:mt-9 mt-5 gap-5">
        <div>
          <button class="btn active">Nạp tiền</button>
        </div>
        <div>
          <button class="btn de-active">Mua gói cước</button>
        </div>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div class="col-span-2 md:col-span-1">
          <div class="mb-4 input-phoneNumber box">
            <div class="content">
              <h3 class="font-bold">
                Nhập số điện thoại <span style="color: red">(*)</span>
              </h3>
              <div class="flex input-number mt-2">
                <span
                  class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                  style="background-color: rgb(249, 249, 255)"
                >
                  +84 </span
                ><input
                  name="number"
                  v-model="phoneNumber"
                  @input="checkPhoneNumber"
                  class="form-input"
                  placeholder="Nhập số điện thoại"
                  style="background-color: rgb(255, 255, 255) !important"
                />
              </div>
              <div v-if="showWarningNumber" class="text-red-500">
                {{ warningMessageNumber }}
              </div>

              <!----><!---->
            </div>
          </div>
          <div class="box formInput-money">
            <div class="content">
              <h3 class="font-bold">
                Nhập số tiền muốn nạp
                <span style="color: red">(*)</span>
              </h3>
              <div
                style="
                  background-color: rgb(255, 255, 255);
                  height: 40px;
                  border-radius: 4px;
                "
              >
                <div
                  class="mt-3"
                  style="width: 100%; position: relative; border-radius: 4px"
                >
                  <input
                    v-model="inputValue"
                    @input="checkValue"
                    class="currency-input"
                    type="number"
                    placeholder="0.000đ"
                    style="width: 100%"
                  /><input class="currency-input-hint" disabled="" />
                </div>
              </div>
              <div v-if="showWarning" class="text-red-500">{{ warningMessage }}</div>

              <!---->
              <h3 class="mt-3 font-bold" style="position: relative">
                Hoặc chọn mệnh giá
              </h3>
              <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                <div
                  class="mb-4 bg-white font-semibold"
                  style="cursor: pointer !important"
                  @click="selectAmount(10000)"
                >
                  <span>10.000 </span>
                </div>
                <div
                  class="mb-4 bg-white font-semibold"
                  style="cursor: pointer !important"
                  @click="selectAmount(20000)"
                >
                  <span>20.000 </span>
                </div>
                <div
                  class="mb-4 bg-white font-semibold"
                  style="cursor: pointer !important"
                  @click="selectAmount(50000)"
                >
                  <span>50.000 </span>
                </div>
                <div
                  class="mb-4 bg-white font-semibold"
                  style="cursor: pointer !important"
                  @click="selectAmount(100000)"
                >
                  <span>100.000 </span>
                </div>
                <div
                  class="mb-4 bg-white font-semibold"
                  style="cursor: pointer !important"
                  @click="selectAmount(200000)"
                >
                  <span>200.000 </span>
                </div>
                <div
                  class="mb-4 bg-white font-semibold"
                  style="cursor: pointer !important"
                  @click="selectAmount(500000)"
                >
                  <span>500.000 </span>
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
        <div class="col-span-2 md:col-span-1 pay-box shadow-inner">
          <div>
            <div
              style="padding-bottom: 13px; border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
            >
              <span class="font-bold"> Tổng thanh toán </span>
            </div>
            <div>
              <div
                class="flex justify-between mt-3"
                style="padding-bottom: 30px; border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
              >
                <div><span> Số tiền </span></div>
                <div>
                  <!-- <span>{{ inputValue }} đ</span> -->

                  <span v-bind:textContent="inputValue + ' đ'"></span>
                </div>
                <!---->
              </div>
              <div class="mt-5">
                <h3 class="font-bold">Phương thức thanh toán</h3>
                <div
                  class="mt-5"
                  style="
                    padding-bottom: 30px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                  "
                >
                  <p>Cổng thanh toán trực tuyến</p>
                  <div class="payment_gateways flex justify-between items-center">
                    <div>
                      <img
                        src="https://vnsky.vn/img/vi_gd.3cea7f5b.svg"
                        class="inline-block"
                        alt=""
                        style="width: 75px; margin-right: 12px"
                      /><img
                        src="https://vnsky.vn/img/vnpay.6feac728.svg"
                        class="inline-block"
                        alt=""
                        style="width: 75px; margin-right: 12px"
                      /><img
                        src="https://vnsky.vn/img/visa.8db00f67.svg"
                        class="inline-block"
                        alt=""
                        style="width: 50px; margin-right: 12px"
                      /><img
                        src="https://vnsky.vn/img/logo-mastercard-footer.6e10fa76.svg"
                        class="inline-block"
                        alt=""
                        style="width: 35px; margin-right: 12px"
                      /><img
                        src="https://vnsky.vn/img/atm.ade4df6e.svg"
                        class="inline-block"
                        alt=""
                        style="width: 35px"
                      />
                    </div>
                    <div>
                      <img
                        src="https://vnsky.vn/img/check.9ba32728.svg"
                        class="inline-block"
                        alt=""
                        style="width: 30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 flex justify-end">
                <div class="capcha">
                  <div style="width: 304px; height: 78px">
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-u5g15whq6yht"
                        frameborder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLgbElAAAAAHahx1QEeGMnwtFdDA0hE-aRe2Kh&amp;co=aHR0cHM6Ly92bnNreS52bjo0NDM.&amp;hl=vi&amp;v=QquE1_MNjnFHgZF4HPsEcf_2&amp;theme=light&amp;size=normal&amp;cb=25g3wxuwvljm"
                      ></iframe>
                    </div>
                    <textarea
                      id="g-recaptcha-response-2"
                      name="g-recaptcha-response"
                      class="g-recaptcha-response"
                      style="
                        width: 250px;
                        height: 40px;
                        border: 1px solid rgb(193, 193, 193);
                        margin: 10px 25px;
                        padding: 0px;
                        resize: none;
                        display: none;
                      "
                    ></textarea>
                  </div>
                  <iframe style="display: none"></iframe>
                </div>
              </div>
              <!---->
              <div class="mt-5">
                <span> Điều kiện và điều khoản giao dịch </span>
                <div class="mt-3">
                  <label class="relative inline-flex items-center me-5 cursor-pointer"
                    ><input type="checkbox" class="" v-model="checked" />
                    <p class="mx-3" style="font-size: 13px; color: rgb(102, 112, 133)">
                      Tôi đã đọc và đồng ý với
                      <a
                        href="/dieu-kien-giao-dich-chung"
                        target="_blank"
                        style="color: rgb(44, 104, 216)"
                        >Điều kiện giao dịch chung của VNSKY</a
                      >
                    </p></label
                  >
                </div>
                <div class="text-end mt-6 thanh-toan">
                  <button class="btn" :disabled="!checked">
                    <div class="flex justify-center items-center gap-5">
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBvVaLccIwDJW5DpBuEDboCIzABs0IbFA6Qa8TtBuUToCZgDBBwgRkAyNx8p0xFl+Jd/dix9LlWZZODoQQpsgl8wtZgSVQ4Dcc4w+sgSITJmFnHmUi3LPoGxjhJXv3yHfkVDnK3jnXn6yiyCzYYUYaLhOko1yDDQbk2OWrtBWww3hUWGzBBgPlsSS4Ahts6PHMCL0k6MFQ0JUs1G1w0O42r5jDYSQYtfPYkhhNJEEPutjGiSSoXTj+2YLtJUFqcQPogBq3F61YoR9BF036/VIv7XCokd/w+NEuYnVK0dVxW2CEUoR0PVEOW9Apnn+MciFa6U6kYw16WJ+NkEVrjvLwu5GZpdz+ZO898hPpi78XgvCSdzlP5k3Br2Lbjk/ovjpgofihiIngG326OMKt4J13idj8jG+T+B4ihXvBx1Rf4Vexr3i17QECaReZGsuuewAAAABJRU5ErkJggg=="
                          alt=""
                        />
                      </div>
                      <div>
                        <span>Thanh toán</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const showWarning = ref(false);
const warningMessage = ref("");

const checkValue = () => {
  const numberValue = parseFloat(inputValue.value);
  if (numberValue < 10000) {
    showWarning.value = true;
    warningMessage.value = "Số tiền tối thiểu mỗi giao dịch là 10.000đ/giao dịch";
  } else if (numberValue > 5000000) {
    showWarning.value = true;
    warningMessage.value = "Hạn mức tối đa là 5.000.000đ/giao dịch";
  } else {
    showWarning.value = false;
    warningMessage.value = "";
  }
};
const selectAmount = (amount) => {
  inputValue.value = amount;
};
const checked = ref(false);

const phoneNumber = ref("");
const showWarningNumber = ref(false);
const warningMessageNumber = ref("");
const checkPhoneNumber = () => {
  if (phoneNumber.value.length === 9) {
    showWarningNumber.value = true;
    warningMessageNumber.value = "Thuê bao không thuộc mạng di động VNSKY";
  } else if (phoneNumber.value.length < 9) {
    showWarningNumber.value = true;
    warningMessageNumber.value = "Số điện thoại sai định dạng, xin hãy kiểm tra lại";
  } else {
    showWarningNumber.value = true;
    warningMessageNumber.value = "Thuê bao không thuộc mạng di động VNSKY";
  }
};
</script>

<style scoped>
.py-16 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}
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
@media (min-width: 768px) {
  .md\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

p {
  line-height: 1.625;
}
.container .flex button.active {
  background: linear-gradient(268deg, rgb(108, 0, 193), rgb(84, 152, 255)),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
.container .flex button.active,
button.de-active {
  width: 217px;
  height: 32px;
  padding: 7px 52px;
  border-radius: 200px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  color: rgb(255, 255, 255);
}
.container .flex button.de-active {
  border: 2px solid rgb(0, 90, 170);
  background-color: rgb(255, 255, 255);
  color: rgb(0, 90, 170);
}
.btn {
  display: inline-block;
  width: 180px;
  border-width: 1px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.container .grid .box {
  display: flex;
  padding: 28px 68px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 9px;
}
.input-phoneNumber {
  border-radius: 20px;
  background: linear-gradient(rgb(205, 3, 148), rgb(97, 39, 191), rgb(62, 16, 116));
  padding: 2px !important;
}
.input-phoneNumber .content {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  border-radius: 18px;
  padding: 28px 68px;
}
.container .grid .box .flex,
.input-money {
  border: 1px solid rgb(223, 224, 248);
  border-radius: 4px;
  width: 100%;
}
input.form-input {
  padding-bottom: 0;
  padding-top: 0;
}
.formInput-money {
  border-radius: 20px;
  background: linear-gradient(rgb(205, 3, 148), rgb(97, 39, 191), rgb(62, 16, 116));
  padding: 2px !important;
}
.formInput-money .content {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  padding: 28px 68px;
  background-image: url(https://vnsky.vn/img/bg-naptien.dcc102c5.png);
  background-size: cover;
  background-position: 100% center;
}
.currency-input-hint {
  position: absolute;
  border: transparent;
  background-color: inherit;
  font-size: 18px;
  border-radius: 4px;
  height: 40px;
  padding-left: 1.25em;
}
.currency-input {
  z-index: 1;
  color: rgb(0, 0, 0);
  position: absolute;
  background-color: inherit;
  border: 1px solid rgb(223, 224, 248);
  border-radius: 4px;
  height: 40px;
  font-size: 18px;
  padding-left: 1.2em;
}
.container .grid .box .grid .mb-4 {
  width: 97%;
  height: 83.96px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
  border-radius: 10.177px;
  border: 1.272px solid rgb(172, 172, 172);
  padding: 12px;
}
.container .grid .pay-box {
  padding: 53px 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: rgb(136, 136, 136) 0px 4px 20px 1px;
}
.thanh-toan button {
  background-image: linear-gradient(270deg, rgb(108, 0, 193), rgb(84, 152, 255));
  color: rgb(255, 255, 255);
  width: 100%;
  border-radius: 85px;
}
.btn:disabled {
  opacity: 0.5 !important;
}
.col-span-2 {
  grid-column: unset;
}
input {
  border-radius: 3px;
}
.form-input {
  height: 2.5rem;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: inherit;
  background-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.grid .active {
  box-shadow: rgb(136, 136, 136) 0px 2px 7px -1px;
  color: rgb(255, 255, 255);
  background-image: linear-gradient(270deg, rgb(108, 0, 193), rgb(84, 152, 255));
}
</style>
