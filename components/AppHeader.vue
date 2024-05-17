<script setup lang="ts">
const links = [
  {
    label: "How it works",
    to: "/",
  },
  {
    label: "Our Work",
    to: "/our-work",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
];
</script>

<template>
  <div class="header-container">
    <header class="header max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="Logo" />
      </NuxtLink>

      <!-- Navigation -->
      <nav>
        <ul>
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="custom-link"
              active-class="custom-link-active"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Button -->
      <button class="header-button">Book A Call</button>
    </header>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
}
.header nav ul {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.custom-link {
  color: #666;
  text-decoration: none;
  font-size: 16px;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 500;
  transition: ease-in-out 0.3s;
}

.custom-link:hover {
  color: #3461ff;
  text-decoration: none;
  font-size: 16px;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 500;
}

.custom-link-active {
  color: #3461ff;
  text-decoration: none;
  font-size: 16px;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 500;
}

.header-button {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: #3461ff;
  color: #fff;
  font-size: 15px;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 500;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.header-button:hover {
  background-color: #1e3de4;
  transition: ease-in-out 0.3s;
}
/* click effect*/
.header-button:active {
  background-color: #6c8cff;
}
</style>
