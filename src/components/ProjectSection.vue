<template>
  <section id="projects" class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        {{ lang === 'vi' ? 'Dự án' : 'Projects' }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="project in projects[lang]"
          :key="project.title"
          class="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img :src="project.image" :alt="project.title" class="h-40 w-full object-cover" />
          <div class="p-4 flex flex-col justify-between h-40">
            <div>
              <h3 class="text-xl font-bold mb-1 text-gray-900 dark:text-white">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">{{ project.desc }}</p>
            </div>
            <a
              :href="project.github"
              target="_blank"
              class="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['lang'])
const projects = {
  vi: [
    {
      title: "Website bán nước giải khát",
      desc: "Website thương mại điện tử với Vue + Tailwind, quản lý đơn hàng, thanh toán.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/your-username/drink-ecommerce",
    },
    {
      title: "Dashboard DeFi",
      desc: "Trang quản lý số liệu DeFi, hiển thị pool, lịch sử, multi-chain, dùng React.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/your-username/defi-dashboard",
    },
    {
      title: "Portfolio cá nhân",
      desc: "Trang portfolio cá nhân hiện đại với chuyển theme, đa ngôn ngữ.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/your-username/portfolio",
    },
  ],
  en: [
    {
      title: "Beverage E-commerce Website",
      desc: "An e-commerce site built with Vue + Tailwind, order management, payment integration.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/your-username/drink-ecommerce",
    },
    {
      title: "DeFi Dashboard",
      desc: "DeFi dashboard with pool stats, history, multi-chain support, built with React.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/your-username/defi-dashboard",
    },
    {
      title: "Personal Portfolio",
      desc: "Modern personal portfolio website with dark/light mode and multi-language.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      github: "https://github.com/your-username/portfolio",
    },
  ],
}
</script>
