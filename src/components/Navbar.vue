<template>
  <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
    <div class="text-white text-3xl font-bold">Portfolio by VueJS</div>
    <!-- Nút theme/lang ở desktop -->
    <div class="hidden md:flex items-center gap-4">
      <button @click="toggleTheme" class="text-2xl">
        <span v-if="isDark">🌙</span>
        <span v-else>☀️</span>
      </button>
      <button
        :class="{'font-bold underline': lang==='vi'}"
        @click="setLang('vi')"
      >🇻🇳</button>
      <button
        :class="{'font-bold underline': lang==='en'}"
        @click="setLang('en')"
      >🇬🇧</button>
    </div>
    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30">
      <button type="button"
        class="block focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span v-if="isMenuOpen" class="text-5xl">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
        </span>
        <span v-else class="text-5xl">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50">
        </span>
      </button>
    </div>
    <!-- Navbar Link -->
    <nav
      :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
        isMenuOpen ? 'block':'hidden'
      ]"
    >
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li v-for="item in Menu" :key="item.name">
          <a :href="item.href"
            class="block text-white transition hover:text-indigo-400 ease-linear text-2xl md:text-lg"
            @click="scrollToSection(item.href)"
          >
            {{ lang === 'vi' && item.vi ? item.vi : item.name }}
          </a>
        </li>
        <!-- Nút theme/lang ở mobile -->
        <li class="flex md:hidden items-center gap-4 mt-6">
          <button @click="toggleTheme" class="text-2xl">
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>
          <button
            :class="{'font-bold underline': lang==='vi'}"
            @click="setLang('vi')"
          >🇻🇳</button>
          <button
            :class="{'font-bold underline': lang==='en'}"
            @click="setLang('en')"
          >🇬🇧</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
const props = defineProps(['isDark', 'toggleTheme', 'lang', 'setLang'])

const Menu = ref([
  { name: 'About Me', vi: 'Giới thiệu', href: '#about' },
  { name: 'Skills', vi: 'Kỹ năng', href: '#skills' },
  { name: 'Projects', vi: 'Dự án', href: '#projects' },
  { name: 'Contact', vi: 'Liên hệ', href: '#contact' },
])

const isMenuOpen = ref(false)
const scrollToSection = (href) => {
  isMenuOpen.value = false
  const section = document.querySelector(href)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}
</script>
