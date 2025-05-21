<template>
  <section class=" text-white py-16 px-4 lg:px-32 relative z-10">
    <h2 class="text-4xl font-bold text-center mb-2">About Me</h2>
    <div class="h-1 w-24 bg-indigo-500 mx-auto mb-10 rounded"></div>

    <div class="flex flex-col lg:flex-row items-center gap-10">
      <!-- Left: Image -->
      <div class="relative">
        <img
          src="@/assets/images/bg1.png"
          alt="Developer at work"
          class="rounded-2xl w-full max-w-md"
        />
        <div class="absolute bottom-[-20px] left-[-20px] w-full h-full border-4 border-indigo-500 rounded-2xl z-[-1]"></div>
      </div>

      <!-- Right: Text + Bars -->
      <div class="flex-1">
               <div data-aos="fade-up">
                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in me" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-2">
                        <div class="w-1/4 ml-10">
                         <font-awesome-icon icon="circle-user" />
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 lg:text-xl">
                                {{ element.name }}
                            </h3>
                            <p class="text-white">{{ element.year }}</p>
                            <p class="text-white">{{ element.phone }}</p>
                            <p class="text-white">{{ element.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
        <div data-aos="fade-up">
                <h2 class="text-4xl font-bold text-white text-left mb-8">My Education</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-2">
                        <div class="w-1/4 ml-10">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3
                                class="text-xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id: 1,
        School: 'University of Economics - Technology for Industries',
        program: 'Mathematics and Informatics',
        year: '2021-2025'
    },
])
const me = ref([
    { 
        id:1,
        name:'Bùi Hoàng Việt',
        year: 2003,
        address: 'Hà Nội, Việt Nam',
        phone: '0912687955',
    }
])
</script>

