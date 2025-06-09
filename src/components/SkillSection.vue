<template>
  <section id="skills" class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        {{ lang === 'vi' ? 'Kỹ năng' : 'Skills' }}
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div
          v-for="skill in skills[lang]"
          :key="skill.name"
          class="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center hover:scale-105 transition"
        >
          <div class="text-3xl mb-2">{{ skill.icon }}</div>
          <div class="font-semibold">{{ skill.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['lang'])
const skills = {
  vi: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3 & Tailwind", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Vue 3", icon: "🟩" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "Git & Github", icon: "🐙" },
    { name: "REST API", icon: "🔗" },
  ],
  en: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3 & Tailwind", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Vue 3", icon: "🟩" },
    { name: "ReactJS", icon: "⚛️" },
    { name: "Git & Github", icon: "🐙" },
    { name: "REST API", icon: "🔗" },
  ],
}
</script>
