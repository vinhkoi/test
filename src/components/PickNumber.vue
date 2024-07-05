<template>
  <div class="bg-gray-50 dark:bg-slate-800" style="min-height: 100vh">
    <div class="container py-5 pt-8">
      <p class="!block md:hidden">
        <img src="https://vnsky.vn/img/step_1.95cf6b8e.png" alt="" />
      </p>
      <p class="hidden md:block">
        <img src="https://vnsky.vn/img/step_1.d8252881.svg" alt="" />
      </p>
    </div>
    <section class="relative pb-16">
      <div class="container py-5">
        <h3
          class="md:text-3xl md:leading-normal lg:text-4xl leading-normal font-bold mb-5"
        >
          Chọn ngay số điện thoại yêu thích
        </h3>
        <div class="flex flex-ls" style="align-items: center">
          <h2 class="text-sim">Loại SIM:</h2>
          <div class="flex">
            <label class="flex input-esim"
              ><input name="sim-type" id="type-esim" type="radio" value="esim" /> &nbsp;
              eSIM&nbsp;
            </label>
            &nbsp; &nbsp;
            <label class="mx-auto input-svl"
              ><input name="sim-type" id="type-simvl" type="radio" value="simvatly" /> SIM
              vật lý
            </label>
          </div>
        </div>
        <!---->
        <p class="mb-6 text-xs mt-2">
          Lưu ý: eSIM chỉ sử dụng được trên thiết bị có hỗ trợ trong
          <a href="/esim#dt-mt" class="" id="linkesim" style="color: rgb(0, 90, 170)"
            >danh sách</a
          >
        </p>
        <div class="grid grid-cols-1 hidden md:block" id="reserve-form ">
          <div class="col-span-1">
            <div
              class="dark:bg-slate-900 border-0 shadow-lg hover:shadow-xl rounded p-3"
              style="background-color: rgb(4, 90, 175)"
            >
              <div class="registration-form text-dark text-start">
                <div
                  class="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6"
                >
                  <div class="lg:col-span-5 filter-search-form relative flex">
                    <input
                      v-model="searchInput"
                      name="name"
                      type="text"
                      id="job-keyword"
                      class="form-input filter-input-box bg-white dark:bg-slate-800 border-0"
                      placeholder="Nhập *68, 68*, *8*8*"
                      style="border-radius: 0px"
                    /><span
                      style="
                        color: rgb(233, 24, 44);
                        position: absolute;
                        bottom: 2px;
                        left: 45px;
                        z-index: 10;
                        font-size: 12px;
                      "
                    ></span
                    ><span
                      style="
                        color: rgb(127, 116, 117);
                        position: absolute;
                        top: 5px;
                        left: 45%;
                        z-index: 10;
                        font-size: 24px;
                      "
                      >| </span
                    ><select
                      class="form-input filter-input-box bg-white dark:bg-slate-800 border-0"
                      id="chonso-choices-type"
                      style="padding-left: 5px; border-radius: 0px"
                    >
                      <option value="">Tất cả danh mục số</option>
                      <option value="simlocphat">Sim lộc phát</option>
                      <option value="simnguquygiua">Sim ngũ quý giữa</option>
                      <option value="simongdia">Sim ông địa</option>
                      <option value="simdaoba">Sim đảo ba</option>
                      <option value="simdaohai">Sim đảo hai</option>
                      <option value="simtamhoagiua">Sim tam hoa giữa</option>
                      <option value="simthantai">Sim thần tài</option>
                      <option value="simtienlen">Sim tiến lên</option>
                      <option value="simtuquygiua">Sim tứ quý giữa</option>
                    </select>
                  </div>
                  <div class="lg:col-span-4 filter-search-form relative mx-2 md:mx-0">
                    <span class="icons" style="font-size: 15px">Loại trừ:</span>
                    <div
                      class="form-input filter-input-box bg-white dark:bg-slate-800 border-0 loaitruso"
                    >
                      <label><input type="checkbox" value="0" /><span>0</span></label
                      ><label><input type="checkbox" value="1" /><span>1</span></label
                      ><label><input type="checkbox" value="2" /><span>2</span></label
                      ><label><input type="checkbox" value="3" /><span>3</span></label
                      ><label><input type="checkbox" value="4" /><span>4</span></label
                      ><label><input type="checkbox" value="5" /><span>5</span></label
                      ><label><input type="checkbox" value="6" /><span>6</span></label
                      ><label><input type="checkbox" value="7" /><span>7</span></label
                      ><label><input type="checkbox" value="8" /><span>8</span></label
                      ><label><input type="checkbox" value="9" /><span>9</span></label>
                    </div>
                  </div>
                  <div class="lg:col-span-3 filter-search-form">
                    <button class="btn buynowv2 mx-auto" @click="filterNumbers">
                      TÌM KIẾM
                      <div class="lighteffect"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 !block md:hidden" id="reserve-form ">
          <div class="col-span-1">
            <div
              class="dark:bg-slate-900 border-0 shadow-lg hover:shadow-xl rounded p-3"
              style="background-color: rgb(4, 90, 175)"
            >
              <div class="registration-form text-dark text-start">
                <div
                  class="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6"
                >
                  <div class="lg:col-span-6 filter-search-form relative flex">
                    <input
                      name="name"
                      type="text"
                      id="job-keyword"
                      class="form-input filter-input-box bg-white dark:bg-slate-800 border-0"
                      placeholder="Nhập *68, 68*, *8*8*"
                    /><span
                      style="
                        color: rgb(233, 24, 44);
                        position: absolute;
                        bottom: 2px;
                        left: 45px;
                        z-index: 10;
                        font-size: 12px;
                      "
                    ></span
                    ><span
                      style="
                        color: rgb(127, 116, 117);
                        position: absolute;
                        top: 5px;
                        left: 45%;
                        z-index: 10;
                        font-size: 24px;
                      "
                      >| </span
                    ><select
                      class="form-input filter-input-box bg-white dark:bg-slate-800 border-0"
                      id="chonso-choices-type"
                      style="padding-left: 5px; border-radius: 0px"
                    >
                      <option value="">Tất cả danh mục số</option>
                      <option value="simlocphat">Sim lộc phát</option>
                      <option value="simnguquygiua">Sim ngũ quý giữa</option>
                      <option value="simongdia">Sim ông địa</option>
                      <option value="simdaoba">Sim đảo ba</option>
                      <option value="simdaohai">Sim đảo hai</option>
                      <option value="simtamhoagiua">Sim tam hoa giữa</option>
                      <option value="simthantai">Sim thần tài</option>
                      <option value="simtienlen">Sim tiến lên</option>
                      <option value="simtuquygiua">Sim tứ quý giữa</option>
                    </select>
                  </div>
                  <div
                    class="lg:col-span-6 filter-search-form relative lg:mx-2 md:mx-0 flex"
                  >
                    <div class="w-full" style="padding-right: 4px">
                      <span class="icons" style="font-size: 15px">Loại trừ:</span>
                      <div
                        class="form-input filter-input-box bg-white dark:bg-slate-800 border-0 loaitruso"
                        id="loaitruso"
                      >
                        <label v-for="digit in digits" :key="digit">
                          <input
                            type="checkbox"
                            :value="digit"
                            v-model="excludedDigits"
                            @click="updateExcludedDigits"
                          />
                          <span>{{ digit }}</span>
                        </label>
                      </div>
                    </div>
                    <div class="filter-search-form">
                      <button
                        id="timkiem"
                        class="btn buynowv2 mx-auto"
                        style="width: auto; border-radius: 4px"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          width="30px"
                          height="30px"
                          style="stroke: rgb(255, 255, 255)"
                        >
                          <path
                            d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 
                                            27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 
                                            27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 
                                            20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
                            style="stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255)"
                          ></path>
                        </svg>
                        <div class="lighteffect"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="container hidden lg:block">
          <div class="mt-8 rounded-md bg-indigo-600/5 shadow-lg hover:shadow-xl">
            <div class="table-responsive">
              <table class="min-w-full divide-y divide-gray-200 tableFixed">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 md:text-left text-lg font-medium text-gray-500 tracking-wider"
                    >
                      Số điện thoại
                    </th>
                    <th
                      class="px-6 py-3 md:text-left text-lg font-medium text-gray-500 tracking-wider"
                    >
                      Loại số
                    </th>
                    <th
                      class="px-6 py-3 md:text-left text-lg font-medium text-gray-500 tracking-wider"
                    >
                      Giá tiền
                    </th>
                    <th
                      class="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="(phone, index) in displayedPhones"
                    :key="index"
                    class="phoneitemmb rounded-md shadow-lg hover:shadow-xl"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="phonenumber">{{ phone.number }}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="phonelabel">{{ phone.type }}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <p class="phoneprice">{{ phone.price }}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <button class="btn buynow" @click="buyNow(phone)">
                        <span>MUA NGAY</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="container !block lg:hidden">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div
              class="phoneitemmb rounded-md shadow-lg hover:shadow-xl"
              v-for="(phone, index) in displayedPhones"
              :key="index"
            >
              <!-- Nội dung mỗi mục -->
              <div
                class="p-4 flex"
                style="align-items: flex-end; justify-content: space-between"
              >
                <div class="items-center">
                  <div>
                    <span class="phonenumber">{{ phone.number }}</span>
                  </div>
                  <div>
                    <p class="loai_so">
                      Loại số <span class="phonelabel">{{ phone.type }}</span>
                    </p>
                  </div>
                </div>
                <div class="buybtnwrapper">
                  <p class="phoneprice">{{ phone.price }}</p>
                  <button id="muangay" class="btn buynow" @click="buyNow(phone)">
                    <span>MUA NGAY</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
      <div class="container">
        <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div
            class="md:col-span-12 text-center lg:flex md:block"
            style="justify-content: flex-end"
          >
            <ul class="pagination">
              <li class="page-item">
                <a @click="changePage('first')" class="page-link" tabindex="0"
                  >&lt;&lt;</a
                >
              </li>
              <li class="prev">
                <a @click="previousPage" class="page-link" tabindex="0">&lt;</a>
              </li>
              <li
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                :class="{ 'page-item': true, active: currentPage === pageNumber }"
              >
                <a @click="changePage(pageNumber)" class="page-link" tabindex="0">{{
                  pageNumber
                }}</a>
              </li>
              <li class="next">
                <a @click="nextPage" class="page-link" tabindex="0">&gt;</a>
              </li>
              <li class="page-item">
                <a @click="changePage('last')" class="page-link" tabindex="0">&gt;&gt;</a>
              </li>
            </ul>
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
import { ref, onMounted, watch, computed } from "vue";

// Danh sách tất cả các điện thoại
const allPhones = ref([
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả trước", price: "50.000 đ" },
  { number: "077 633 3416", type: "Trả sau", price: "50.000 đ" },
  { number: "077 633 1511", type: "Trả sau", price: "50.000 đ" },
  { number: "071 511 1511", type: "Trả sau", price: "50.000 đ" },
  // Thêm các điện thoại khác vào đây
]);

// Số mục trên mỗi trang
const itemsPerPage = 20;

// Trang hiện tại
const currentPage = ref(1);

// Tính tổng số trang dựa trên số lượng điện thoại và số mục trên mỗi trang
const totalPages = Math.ceil(allPhones.value.length / itemsPerPage);

// Danh sách các điện thoại được hiển thị trên trang hiện tại
const displayedPhones = ref([]);

// Cập nhật danh sách điện thoại hiển thị khi trang thay đổi
const updateDisplayedPhones = () => {
  if (filteredNumbers.value.length) {
    displayedPhones.value = filteredNumbers.value;
  } else {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayedPhones.value = allPhones.value.slice(startIndex, endIndex);
  }
};

// Chuyển đến trang trước đó
const previousPage = () => {
  currentPage.value = Math.max(currentPage.value - 1, 1);
};

// Chuyển đến trang tiếp theo
const nextPage = () => {
  currentPage.value = Math.min(currentPage.value + 1, totalPages);
};
const changePage = (page) => {
  if (page === "first") {
    currentPage.value = 1;
  } else if (page === "last") {
    currentPage.value = totalPages.value;
  } else if (page === "prev") {
    currentPage.value = Math.max(currentPage.value - 1, 1);
  } else if (page === "next") {
    currentPage.value = Math.min(currentPage.value + 1, totalPages.value);
  } else {
    currentPage.value = page;
  }
};
// Sự kiện chuyển trang
const onPageChange = () => {
  updateDisplayedPhones();
};

// Gọi hàm updateDisplayedPhones khi trang được load
onMounted(() => {
  onPageChange();
});

// Sử dụng watcher để theo dõi sự thay đổi của currentPage và cập nhật displayedPhones mỗi khi currentPage thay đổi
watch(currentPage, onPageChange);

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Danh sách các chữ số
const excludedDigits = ref([]); // Mảng chứa các chữ số bị loại trừ

const filteredNumbers = ref([]);
const searchInput = ref("");

function filterNumbers() {
  let filteredNumbers = allPhones.value;

  // Filter by search pattern (if any)
  if (searchInput.value) {
    const searchPattern = searchInput.value;
    const regexPattern = searchPattern.replace(/\*/g, ".");
    filteredNumbers = filteredNumbers.filter((number) =>
      new RegExp(regexPattern).test(number.number)
    );
    // (Optional) Display filtered numbers (replace with your logic)
    console.log("Filtered numbers:", filteredNumbers.value);
  }

  // Filter by excluded digits (if any)
  if (excludedDigits.length > 0) {
    filteredNumbers = filteredNumbers.filter((number) => {
      for (const digit of excludedDigits.value) {
        if (number.number.includes(digit.toString())) {
          return false;
        }
      }
      return true;
    });
  }

  // Update displayed phones based on pagination
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  displayedPhones.value = filteredNumbers.slice(startIndex, endIndex);
}
watch(
  [searchInput, excludedDigits], // Watch both searchInput and excludedDigits
  () => {
    filterNumbers();
  }
);
watch(filteredNumbers, (newFilteredNumbers) => {
  if (newFilteredNumbers.length) {
    displayedPhones.value = newFilteredNumbers;
  } else {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayedPhones.value = allPhones.value.slice(startIndex, endIndex);
  }
});

function updateExcludedDigits(event) {
  const selectedDigit = event.target.value;
  const index = excludedDigits.value.indexOf(selectedDigit);

  if (index !== -1) {
    // Deselect the digit
    excludedDigits.value.splice(index, 1);
  } else {
    // Select the digit
    excludedDigits.value.push(selectedDigit);
  }
  console.log("excludedDigits:", excludedDigits.value);
}
watch(
  () => excludedDigits.value,
  () => {
    filterNumbers();
  }
);
</script>
<style>
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
@media (min-width: 1024px) {
  .lg\:text-4xl {
    font-size: 2.25rem !important;
    line-height: 2.5rem !important;
  }
}
@media (min-width: 768px) {
  .md\:leading-normal {
    line-height: 1.5 !important;
  }
}

@media (min-width: 768px) {
  .md\:text-3xl {
    font-size: 1.875rem !important;
    line-height: 2.25rem !important;
  }
}
.text-sim {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  margin-right: 40px;
}
.input-esim {
  margin-right: 20px;
  align-items: baseline;
}
[type="radio"] {
  vertical-align: unset;
  appearance: auto;
}
[type="radio"]:focus {
  box-shadow: unset;
}
.text-start {
  text-align: start !important;
}
.text-dark,
.text-gray-400 {
  --tw-text-opacity: 1 !important;
}
.text-dark {
  color: rgb(60 72 88 / var(--tw-text-opacity)) !important;
}
.registration-form {
  position: relative;
}
@media (min-width: 992px) {
  .registration-form {
    position: relative;
  }
}
@media (min-width: 768px) {
  .md\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }
}
@media (min-width: 1024px) {
  .lg\:gap-0 {
    gap: 0 !important;
  }
}

#job-keyword {
  border-radius: 0;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
}

@media (min-width: 992px) {
  .registration-form .form-input {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    outline-width: 0;
  }
}
[dir="ltr"] .filter-input-box,
[dir="ltr"] .filter-input-box.form-select,
[dir="ltr"] .filter-search-form .choices__inner {
  padding-right: 6px;
}

.form-input {
  border: 0;
  background-color: #f7f7f7 !important;
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
.filter-input-box,
.filter-input-box.form-select,
.filter-search-form .choices__inner {
  height: 50px;
  border-radius: 0;
  border-width: 0;
  font-size: 15px;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.registration-form .form-input {
  border-radius: 5px;
}

#chonso-choices-type {
  padding-left: 5px;
  border-top-right-radius: 5px !important;
  border-radius: 0;
  border-bottom-right-radius: 5px !important;
  color: #9ea7bd;
}
@media (min-width: 1024px) {
  .lg\:col-span-4 {
    grid-column: span 4 / span 4 !important;
  }
}
.filter-search-form .icons {
  position: absolute;
  top: 48%;
  z-index: 1;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  font-size: 20px;
  --tw-text-opacity: 1;
  color: rgb(42 92 170 / var(--tw-text-opacity));
}
.loaitruso {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 75px !important;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.loaitruso {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 75px !important;
}

@media (min-width: 1024px) {
  .lg\:col-span-3 {
    grid-column: span 3 / span 3 !important;
  }
}
button {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
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
.btn.buynowv2 {
  width: 155px;
  max-width: 100%;
  position: relative;
  display: inline-block;
  background-color: #e51b76;
  border: #e51b76;
  color: #fff;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 9999px;
  overflow: hidden;
  display: block;
}
.btn.buynowv2 {
  width: 155px;
  max-width: 100%;
  position: relative;
  background-color: rgb(229, 27, 118);
  border: rgb(229, 27, 118);
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 9999px;
  overflow: hidden;
  display: block;
}

[dir="ltr"] .filter-search-form .icons {
  left: 0.75rem;
}

.loaitruso input {
  display: none;
}
.loaitruso span {
  display: block;
  width: 22px;
  line-height: 20px;
  border: 1px solid rgb(236, 32, 39);
  color: rgb(236, 32, 39);
  border-radius: 100%;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin: 1px 2px;
  transition: all 0.5s ease 0s;
}
.loaitruso span {
  display: block;
  width: 22px;
  line-height: 20px;
  border: 1px solid #ec2027;
  color: #ec2027;
  border-radius: 100%;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin: 1px 2px;
  transition: all 0.5s;
}
.buynowv2 .lighteffect {
  position: absolute;
  top: 0px;
  left: -100%;
  width: 300%;
  height: 100%;
  transform: skewX(-30deg);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.4) 0px,
    rgba(255, 255, 255, 0) 70%
  );
  animation: 4s linear 0s infinite normal none running buynowv2lighteffect;
}
.buynowv2 .lighteffect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 300%;
  height: 100%;
  transform: skewX(-30deg);
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0.4) 0,
    hsla(0, 0%, 100%, 0) 70%
  );
  animation: buynowv2lighteffect 4s linear infinite;
}
.loaitruso input:checked ~ span {
  color: rgb(255, 255, 255);
  background-color: rgb(229, 27, 118);
}
.filter-input-box,
.filter-input-box.form-select,
.filter-search-form .choices__inner {
  padding-right: 6px;
}
input.form-input {
  padding-bottom: 0;
  padding-top: 0;
}
@media (min-width: 1024px) {
  .lg\:block {
    display: block !important;
  }
}
.table-responsive {
  overflow: auto;
}
.min-w-full {
  min-width: 100% !important;
}
.tableFixed {
  table-layout: fixed;
}
@media (min-width: 768px) {
  .md\:text-left {
    text-align: left !important;
  }
}
.phonenumber,
.phoneprice {
  font-weight: 600;
  color: rgb(229, 27, 118);
}
.phonenumber {
  font-size: 32px;
}
.btn.buynow {
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid rgb(229, 27, 118);
  color: rgb(229, 27, 118);
  justify-content: center;
  text-align: center;
  line-height: 1;
  padding: 0px 5px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 10;
  border-radius: 12px !important;
}
.phonelabel {
  display: inline-block;
  margin: 2px;
  background-color: rgb(255, 255, 255);
  padding: 0px 5px;
  text-align: center;
  border-radius: 0.358rem;
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgb(0, 90, 170);
}
.phoneprice {
  font-size: 24px;
}
@media (min-width: 768px) {
  .md\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
  }
}
@media (min-width: 768px) {
  .md\:col-span-12 {
    grid-column: span 12 / span 12 !important;
  }
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
}
.page-item {
  padding: 5px;
  cursor: pointer;
}
.pagination .page-item:last-child {
  display: none;
}
.next .page-link,
.pagination .page-item:first-child .page-link,
.prev .page-link {
  color: #fff;
  z-index: 3;
  background-color: #e1e1e1;
  border-color: #e1e1e1;
}
.page-link {
  padding: 0.375rem 0.75rem;
  position: relative;
  display: block;
  border-radius: 5px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #a7aaae;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #37a2e0;
  border-color: #37a2e0;
}
.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
</style>
