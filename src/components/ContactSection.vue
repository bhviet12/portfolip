<template>
  <section id="contact" class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4 max-w-xl">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        {{ lang === 'vi' ? 'Liên hệ' : 'Contact' }}
      </h2>
      <div class="bg-white dark:bg-gray-900 rounded-xl shadow p-8 space-y-4">
        <p class="text-gray-700 dark:text-gray-300 text-center">
          {{ lang === 'vi'
            ? 'Bạn có thể liên hệ với tôi qua các kênh dưới đây!'
            : 'You can contact me via the following channels!' }}
        </p>
        <ul class="space-y-2 text-center">
          <li>
            <span class="font-semibold">Email:</span>
            <a href="mailto:your@email.com" class="text-blue-500 hover:underline">your@email.com</a>
          </li>
          <li>
            <span class="font-semibold">GitHub:</span>
            <a href="https://github.com/your-username" target="_blank" class="text-blue-500 hover:underline">github.com/your-username</a>
          </li>
          <li>
            <span class="font-semibold">LinkedIn:</span>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" class="text-blue-500 hover:underline">linkedin.com/in/your-linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['lang'])
</script>
