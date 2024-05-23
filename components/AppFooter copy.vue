<script lang="ts" setup></script>

<template>
  <div class="footer-container">
    <div
      class="footer-contact-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="footer-left-container">
        <NuxtImg src="/logo.svg" alt="Logo" />

        <div class="social-networks">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg src="/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg src="/facebook.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg src="/twitter.svg" alt="Twitter" />
          </a>
        </div>

        <button>Contact Us</button>
      </div>

      <div class="footer-right-container">
        <button>Work With Us</button>
        <button>Private Coaching</button>
        <button>About Us</button>
        <button>Advertise With Us</button>
        <button>Our Work</button>
        <button>FAQs</button>
        <button>Support Us</button>
        <button>Our Commitment</button>
        <button>Resport a Bug</button>
        <button>Business Advices</button>
        <button>Our Team</button>
        <button></button>
      </div>
    </div>
    <div class="footer-right-container"></div>
  </div>

  <!-- Rights Reserved -->
  <div class="footer-rights">
    <p>© 2024 Embrace, Inc. All rights reserved.</p>
    <div>
      <button>Terms of use</button>
      <button>Privacy Policy</button>
    </div>
  </div>
</template>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #f9f9f9;
}

.footer-contact-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer-left-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social-networks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.footer-left-container button {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
  background-color: #3461ff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
}

.footer-left-container button:hover {
  background-color: #2e54e3;
}

.footer-left-container button:active {
  background-color: #264bd4;
}

.footer-right-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 70%;
  margin: 0 auto;
}

.footer-right-container button {
  font-size: 1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: #000;
  background-color: #f9f9f9;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  flex: 0 0 calc(33.33% - 20px); /* Ajusta el ancho de los botones */
  max-width: 200px; /* Establece un ancho máximo para los botones */
}

.footer-right-container button:hover {
  color: #3461ff;
}

.footer-right-container button:active {
  color: #2647bd;
}

.footer-rights {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: black;
}

.footer-rights p {
  color: white;
  font-size: 0.9rem;
  font-family: "GeneralSans-Medium", sans-serif;
}

.footer-rights button {
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
  background-color: black;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  transition: all 0.3s ease-in-out;
}

.footer-rights button:hover {
  color: #3461ff;
}

.footer-rights button:active {
  color: #2647bd;
}
</style>
