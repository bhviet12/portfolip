<template>
  <div class ="bg-[#111827] min-h-screen">
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
</script>
<style>

*{
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>