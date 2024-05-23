<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { label: "How it works", to: "/" },
  { label: "Our Work", to: "/our-work" },
  { label: "Pricing", to: "/pricing" },
  { label: "About Us", to: "/about-us" },
];

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div :class="{ 'shadow-md': isScrolled }"
    class="header-container fixed w-full top-0 left-0 z-50 bg-white transition-shadow duration-300">
    <header class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="Logo" class="h-10" />
      </NuxtLink>

      <!-- Burger Menu -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-gray-600 hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="lg:block hidden">
        <ul class="flex flex-col lg:flex-row items-center gap-6">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="custom-link text-gray-600 hover:text-blue-600 transition font-medium"
              active-class="text-blue-600">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Button -->
      <button
        class="header-button hidden lg:inline-block py-2 px-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
        Book A Call
      </button>
    </header>

    <!-- Mobile Menu -->
    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="lg:hidden">
      <nav>
        <ul class="flex flex-col items-center gap-4 py-4">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="custom-link text-gray-600 hover:text-blue-600 transition font-medium"
              active-class="text-blue-600">
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <button
              class="header-button py-2 px-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
              Book A Call
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.custom-link {
  font-size: 16px;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 500;
}

.header-button {
  font-size: 15px;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 500;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
