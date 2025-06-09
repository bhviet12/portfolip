<template>
  <section class="text-white py-16 px-6 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <!-- Left Side (Text) -->
      <div data-aos="zoom-in-up">
        <h2 class="text-indigo-400 text-2xl font-semibold">Xin chào 👋,</h2>
        <h1 class="text-4xl md:text-5xl font-bold pt-2">
          Mình là <span class="text-indigo-400">Bùi Hoàng Việt</span>
        </h1>
        <p class="text-gray-700 dark:text-gray-300 pt-6 leading-relaxed">
          🌱 Sinh viên Công nghệ Thông tin, đam mê phát triển giao diện web hiện đại và tối ưu trải nghiệm người dùng.<br />
          🔭 Hiện tại mình đang học tập và thực chiến với ReactJS/VueJS.<br />
          📫 Liên hệ: <a href="mailto:bhviet1510@gmail.com" class="text-[#abcdef]">bhviet1510@gmail.com</a><br />
          💬 Github: <a href="https://github.com/bhviet12" class="text-[#abcdef]">https://github.com/bhviet12</a>
        </p>
        <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
          <a href="mailto:bhviet1510@gmail.com"
            class="inline-block bg-indigo-400 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full">
            Thuê tôi
          </a>
          <button class="border border-indigo-400 px-6 py-3 rounded-full relative group w-full sm:w-max flex justify-center items-center bg-white dark:bg-gray-900">
            <svg class="download-icon mr-2" width="18" height="22" viewBox="0 0 18 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#818CF8"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="#818CF8" stroke-width="2"
                stroke-linecap="round" />
            </svg>
            <a href="/CV-Bui-Hoang-Viet.pdf" download="CV-Bui-Hoang-Viet.pdf"
              class="pl-2 text-indigo-400">Tải CV</a>
          </button>
        </div>
      </div>
      <!-- Right Side (Image) -->
      <div class="flex justify-center relative" data-aos="zoom-in-up">
        <img
          src="@/assets/images/bhv.png"
          alt="Web Developer"
          width="320"
          height="320"
          class="rounded-full border-4 border-indigo-500 w-80 h-80 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const hero = {
  vi:[
   {name: "Sinh viên Công nghệ Thông tin, đam mê phát triển giao diện web hiện đại và tối ưu trải nghiệm người dùng.",icon:"🌱"},
   {}
]
}
</script>
