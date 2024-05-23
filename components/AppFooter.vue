<script lang="ts" setup></script>

<template>
  <div class="footer-container bg-gray-50 pt-16">
    <div
      class="footer-contact-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

      <div class="footer-left-container flex flex-col items-center mb-8 md:mb-0 lg:w-1/2">
        <NuxtImg src="/logo.svg" alt="Logo" class="w-32 mb-6" />

        <div class="social-networks flex gap-6 mb-6">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <NuxtImg src="/instagram.svg" alt="Instagram" class="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <NuxtImg src="/facebook.svg" alt="Facebook" class="w-8 h-8" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <NuxtImg src="/twitter.svg" alt="Twitter" class="w-8 h-8" />
          </a>
        </div>

        <button class="bg-blue-600 text-white rounded-full px-8 py-3 hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>

      <div
        class="footer-right-container flex flex-wrap justify-center md:justify-start gap-6 w-full md:w-auto lg:w-1/2">
        <button class="footer-button">Work With Us</button>
        <button class="footer-button">Private Coaching</button>
        <button class="footer-button">About Us</button>
        <button class="footer-button">Advertise With Us</button>
        <button class="footer-button">Our Work</button>
        <button class="footer-button">FAQs</button>
        <button class="footer-button">Support Us</button>
        <button class="footer-button">Our Commitment</button>
        <button class="footer-button">Report a Bug</button>
        <button class="footer-button">Business Advices</button>
        <button class="footer-button">Our Team</button>
      </div>
    </div>

    <!-- Rights Reserved -->
    <div class="footer-rights bg-black text-white py-4 flex flex-col md:flex-row justify-between items-center">
      <p class="text-center md:text-left mb-4 md:mb-0">
        © 2024 Embrace, Inc. All rights reserved.
      </p>
      <div class="flex gap-4">
        <button class="footer-rights-button">Terms of use</button>
        <button class="footer-rights-button">Privacy Policy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-color: #f9f9f9;
}

.footer-left-container {
  text-align: center;
}

.footer-button {
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  background-color: #f9f9f9;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 5px;
  transition: all 0.3s ease-in-out;
  flex: 1 0 calc(33.33% - 10px);
  text-align: center;
}

.footer-button:hover {
  color: #3461ff;
}

.footer-rights-button {
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  background-color: black;
  padding: 0.5rem 1rem;
  border: none;
  transition: all 0.3s ease-in-out;
}

.footer-rights-button:hover {
  color: #3461ff;
}

.footer-rights p {
  color: white;
  font-size: 0.9rem;
  font-family: "GeneralSans-Medium", sans-serif;
}

@media (min-width: 768px) {
  .footer-left-container {
    /* align-items: flex-start; */
    text-align: left;
  }
}
</style>
