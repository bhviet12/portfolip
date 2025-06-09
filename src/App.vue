<template>
  <div :class="{ dark: isDark }" class="min-h-screen bg-gray-50 dark:bg-[#111827] transition-colors duration-300">
    <Navbar
      :isDark="isDark"
      :toggleTheme="toggleTheme"
      :lang="lang"
      :setLang="setLang"
    />
    <HeroSection :lang="lang" />
    <AboutSection :lang="lang" />
     <SkillSection :lang="lang"/>
    <ProjectSection :lang="lang"/>
     <ContactSection :lang="lang"/> 
  </div>
</template>

<script setup>
import { ref, watch, onMounted, defineAsyncComponent } from 'vue'

const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'))
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const SkillSection = defineAsyncComponent(() => import('@/components/SkillSection.vue'))
const ProjectSection = defineAsyncComponent(() => import('@/components/ProjectSection.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
// Dark mode state
const isDark = ref(localStorage.getItem('theme') === 'dark')
const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Language state
const lang = ref(localStorage.getItem('lang') || 'vi')
const setLang = (l) => {
  lang.value = l
  localStorage.setItem('lang', l)
}

// Apply dark mode on initial load and when toggled
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
watch(isDark, (v) => {
  if (v) document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
})
</script>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>
