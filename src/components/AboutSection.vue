<template>
  <section id="about" class="py-16 px-4 md:px-10 lg:px-32 bg-white dark:bg-gray-900">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
      {{ lang === 'vi' ? 'Giới thiệu bản thân' : 'About Me' }}
    </h2>
    <div class="h-1 w-24 bg-indigo-500 mx-auto mb-10 rounded"></div>
    <div class="flex flex-col lg:flex-row items-center gap-10">
      <!-- Ảnh đại diện -->
      <div class="relative w-full max-w-xs mx-auto lg:mx-0">
        <img
          src="../assets/images/bg1.png"
          alt="Avatar"
          class="rounded-2xl w-full shadow-lg border-4 border-indigo-500"
        />
        <div class="absolute bottom-[-15px] left-[-15px] w-full h-full border-4 border-indigo-300 rounded-2xl z-[-1]"></div>
      </div>
      <!-- Info + Học vấn -->
      <div class="flex-1 w-full">
        <!-- Thông tin cá nhân -->
        <div class="mb-8 bg-indigo-50 dark:bg-[#18143b] rounded-xl shadow-lg border border-indigo-100 dark:border-[#27204b] p-5">
          <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
            {{ lang === 'vi' ? 'Thông tin cá nhân' : 'Personal Info' }}
          </h3>
          <ul class="space-y-1">
            <li>
              <span class="font-bold">{{ lang === 'vi' ? 'Họ tên' : 'Name' }}:</span> Bùi Hoàng Việt
            </li>
            <li>
              <span class="font-bold">{{ lang === 'vi' ? 'Năm sinh' : 'Year' }}:</span> 2003
            </li>
            <li>
              <span class="font-bold">{{ lang === 'vi' ? 'Địa chỉ' : 'Address' }}:</span> Hà Nội, Việt Nam
            </li>
            <li>
              <span class="font-bold">{{ lang === 'vi' ? 'SĐT' : 'Phone' }}:</span> 0912687955
            </li>
          </ul>
        </div>
        <!-- Giới thiệu bản thân -->
        <div class="mb-8">
          <p class="text-gray-700 dark:text-gray-200">
            <span v-if="lang==='vi'">
              Tôi là một sinh viên CNTT yêu thích phát triển giao diện web hiện đại với React/Vue.<br>
              Mục tiêu của tôi là trở thành Frontend Developer chuyên nghiệp, luôn sẵn sàng học hỏi công nghệ mới và xây dựng sản phẩm chất lượng cho cộng đồng.
            </span>
            <span v-else>
              I'm an IT student passionate about developing modern web interfaces using React/Vue.<br>
              My goal is to become a professional Frontend Developer, always ready to learn new tech and build quality products for the community.
            </span>
          </p>
        </div>
        <!-- Học vấn -->
        <div>
          <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
            {{ lang === 'vi' ? 'Học vấn' : 'Education' }}
          </h3>
          <div
            class="flex items-center rounded-xl bg-[#111a3e]/80 dark:bg-[#18143b] shadow-lg border border-[#1f1641] p-3 mb-2"
          >
            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
              alt="graduation-cap--v1" class="w-10 h-10 mr-4" />
            <div>
              <div class="text-gray-200">{{ lang === 'vi' ? 'Trường đại học kinh tế - kỹ thuật công nghiệp' : 'University of Economics - Technology for Industries' }}</div>
              <div class="text-gray-200">{{ lang === 'vi' ? 'Công nghệ thông tin' : 'Information Technology' }}</div>
              <div class="text-gray-400">2021-2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['lang'])
</script>
