<script lang="ts" setup>
const companyIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<template>
  <!-- First Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-8">
      <h1 class="text-6xl font-semibold lg:text-8xl">
        We Take
        <br />
        Care Of
        <br />
        Your Brand
      </h1>

      <h6 class="text-xl text-gray-600 mt-4">We care about our work and we care about our clients.</h6>

      <div class="flex flex-wrap mt-8 gap-4 lg:flex-nowrap">
        <input class="w-full lg:w-3/5 p-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none"
          type="text" name="email" placeholder="Enter Your Email" />
        <button class="w-full lg:w-1/4 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Let's Talk
        </button>
      </div>
    </div>

    <div class="w-full md:w-1/2">
      <NuxtImg src="/image.png" alt="Branding" class="mx-auto" sizes="xl:500px xxl:609px" />
    </div>
  </section>

  <!-- Second Section -->
  <section class="bg-gray-100 py-20">
    <h1 class="text-2xl font-medium text-center mb-8 md:text-3xl">Companies We Work With</h1>
    <div class="flex flex-wrap justify-center">
      <template v-for="id in companyIds" :key="id">
        <NuxtImg class="w-1/5 max-h-12 m-3" :src="`/company${id}.svg`" :alt="`Company ${id}`" />
      </template>
    </div>
  </section>

  <!-- Third Section -->
  <section class="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 gap-8">
    <div class="md:flex-row flex flex-wrap justify-center items-center w-full">
      <div class="w-full md:w-1/2 text-center py-8">
        <h1 class="text-5xl lg:text-6xl font-semibold">245%</h1>
        <h6 class="text-gray-600 text-base md:text-lg">More revenues for the brand</h6>
      </div>
      <div class="w-full md:w-1/2 text-center py-8">
        <h1 class="text-5xl lg:text-6xl font-semibold">130K+</h1>
        <h6 class="text-gray-600 text-base md:text-lg">Audiences reached</h6>
      </div>
      <div class="w-full md:w-1/2 text-center py-8">
        <h1 class="text-5xl lg:text-6xl font-semibold">50+</h1>
        <h6 class="text-gray-600 text-base md:text-lg">Brands trust us</h6>
      </div>
      <div class="w-full md:w-1/2 text-center py-8">
        <h1 class="text-5xl lg:text-6xl font-semibold">24+</h1>
        <h6 class="text-gray-600 text-base md:text-lg">Worldwide Awards</h6>
      </div>
    </div>
    <div class="mt-1 sm:mt-0 w-full md:wfull">
      <h1 class="text-4xl md:text-5xl lg:text-5xl font-medium">Commitments</h1>
      <h6 class="text-gray-600 mt-4 text-base md:text-lg">We are committed to working with you collaboratively to
        understand your goals and create a strategy that will achieve them.</h6>
      <NuxtLink to="/" class="text-blue-600 mt-4 block text-base md:text-lg font-semibold">Learn More</NuxtLink>
    </div>
  </section>

  <!-- Fourth Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col lg:flex-row gap-8">

    <div class="w-full lg:w-1/2 flex flex-col">
      <h1 class="text-4xl font-medium lg:text-6xl">How It Works</h1>
      <p class="text-gray-600 mt-4">
        We believe that the best way to create successful marketing campaigns is to work closely with our clients to
        understand their goals and challenges.
      </p>


      <NuxtImg src="/how-it-works.png" class="mt-8 max-w-md" alt="How It Works" />
    </div>

    <div class="w-full lg:w-1/2 mt-12 md:mt-0 flex flex-col space-y-8">
      <div class="flex items-start">
        <NuxtImg src="/discovery-icon.png" alt="Discovery" class="w-14 h-14 sm:w-auto sm:h-auto w-max" />
        <div class="ml-4">
          <h1 class="text-2xl font-medium">Discovery</h1>
          <p class="text-gray-600 mt-2">We meet with you to learn about your business, your goals, and your target
            audience.</p>
        </div>
      </div>
      <div class="flex items-start">
        <NuxtImg src="/strategy-icon.png" alt="Strategy" class="w-14 h-14 sm:w-auto sm:h-auto w-max" />
        <div class="ml-4">
          <h1 class="text-2xl font-medium">Strategy</h1>
          <p class="text-gray-600 mt-2">We develop a strategy tailored to your needs, ensuring alignment with your
            goals.
          </p>
        </div>
      </div>
      <div class="flex items-start">
        <NuxtImg src="/execution-icon.png" alt="Execution" class="w-14 h-14 sm:w-auto sm:h-auto w-max" />
        <div class="ml-4">
          <h1 class="text-2xl font-medium">Execution</h1>
          <p class="text-gray-600 mt-2">We implement the strategy efficiently, ensuring timely delivery and quality
            results.</p>
        </div>
      </div>
      <div class="flex items-start">
        <NuxtImg src="/measurement-icon.png" alt="Evaluation" class="w-14 h-14 sm:w-auto sm:h-auto w-max" />
        <div class="ml-4">
          <h1 class="text-2xl font-medium">Measurement</h1>
          <p class="text-gray-600 mt-2">We continuously monitor and evaluate the performance, making adjustments as
            needed
            to optimize results.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Fifth Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center">
    <h1 class="text-4xl font-medium">Our Work</h1>
    <p class="text-gray-600 mt-4">A glimpse of our portfolio</p>
    <div class="flex flex-wrap justify-center gap-8 mt-12">
      <div class="text-center">
        <NuxtImg src="/project1.png" alt="A" class="mx-auto max-w-80" />
        <h6 class="mt-2 text-lg font-medium">Apple</h6>
      </div>
      <div class="text-center">
        <NuxtImg src="/project2.png" alt="Project 2" class="mx-auto max-w-80" />
        <h6 class="mt-2 text-lg font-medium">Coca-Cola</h6>
      </div>
      <div class="text-center">
        <NuxtImg src="/project3.png" alt="Project 3" class="mx-auto max-w-80" />
        <h6 class="mt-2 text-lg font-medium">Nike</h6>
      </div>
    </div>
    <button
      class="w-3/4 sm:w-1/2 mt-12 xl:w-1/4 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">See
      More</button>
  </section>

  <!-- Sixth Section
  <section
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center bg-cover bg-center rounded-3xl"
    style="background-image: url('/six-section-bg.png');">
    <div
      class="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col items-center justify-center p-8 bg-opacity-75 bg-gray-900 rounded-3xl text-center">
      <h1 class="text-4xl font-medium text-white mb-4">
        Elevate Your
        <br />
        Brand Today!
      </h1>
      <p class="text-lg text-white mb-8">
        Ready to transform your digital presence? Let's create magic together! Book our services now!
      </p>
      <button class="w-full lg:w-1/4 mt-4 p-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition">
        Book Call
      </button>
    </div>
  </section> -->

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
    <div
      class="sixth-section-container flex flex-col lg:flex-row items-center justify-center rounded-3xl bg-cover bg-center"
      style="background-image: url('/six-section-bg.png');">
      <div class="flex sixt-left-container w-full justify-around lg:w-1/2 text-center lg:text-left p-8">
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-medium text-white">
          Elevate Your
          <br />
          Brand Today!
        </h1>
      </div>
      <div class="sixth-right-container w-full lg:w-1/2 flex flex-col items-center lg:items-start p-8">
        <p class="text-lg sm:text-xl font-medium text-white mb-4">
          Ready to transform your digital presence? Let's
          <br />
          create magic together! book our services now!
        </p>
        <button class="bg-white text-black-600 font-medium py-2 px-4 rounded-full hover:bg-gray-100 transition">
          Book Call
        </button>
      </div>
    </div>
  </section>



  <!-- Seventh Section -->
  <!-- <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 flex flex-wrap justify-center gap-4">
      <NuxtImg class="w-24 h-24" src="/member1.png" alt="Member 1" />
      <NuxtImg class="w-24 h-24" src="/member2.png" alt="Member 2" />
      <NuxtImg class="w-24 h-24" src="/member3.png" alt="Member 3" />
      <NuxtImg class="w-24 h-24" src="/member4.png" alt="Member 4" />
      <NuxtImg class="w-24 h-24" src="/member5.png" alt="Member 5" />
      <NuxtImg class="w-24 h-24" src="/member6.png" alt="Member 6" />
    </div>
    <div class="w-full md:w-1/2 mt-12 md:mt-0">
      <h1 class="text-4xl font-medium">Meet Our Team</h1>
      <p class="text-lg text-gray-600 mt-4">
        Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that
        captivate
      </p>
      <button
        class="mx-auto w-full md:w-1/2 lg:w-1/4 mt-8 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn
        More</button>
    </div>
  </section> -->

  <!-- Seventh Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 flex flex-col items-center gap-4">
      <!-- Primera fila de imágenes -->
      <div class="flex justify-center gap-4">
        <NuxtImg class="w-24 h-24 lg:w-auto lg:h-auto max-w-36" src="/member1.png" alt="Member 1" />
        <NuxtImg class="w-24 h-24 lg:w-auto lg:h-auto max-w-36" src="/member2.png" alt="Member 2" />
        <NuxtImg class="w-24 h-24 lg:w-auto lg:h-auto max-w-36" src="/member3.png" alt="Member 3" />
      </div>
      <!-- Segunda fila de imágenes -->
      <div class="flex justify-center gap-4">
        <NuxtImg class="w-24 h-24 lg:w-auto lg:h-auto max-w-36" src="/member4.png" alt="Member 4" />
        <NuxtImg class="w-24 h-24 lg:w-auto lg:h-auto max-w-36" src="/member5.png" alt="Member 5" />
        <NuxtImg class="w-24 h-24 lg:w-auto lg:h-auto max-w-36" src="/member6.png" alt="Member 6" />
      </div>
    </div>
    <div class="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left px-8">
      <h1 class="text-4xl font-medium">Meet Our Team</h1>
      <p class="text-lg text-gray-600 mt-4">
        Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that
        captivate.
      </p>
      <button
        class="mx-auto w-full md:w-1/2 lg:w-2/4 2xl:w-1/4 mt-8 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn
        More</button>
    </div>
  </section>


  <!-- Eighth Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
    <IndexCarousel />
  </section>

  <!-- Ninth Section -->
  <section
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center bg-cover bg-center rounded-3xl my-20 lg:my-28"
    style="background-image: url('/ninth-section-bg.png');">
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left text-white p-8">
      <h1 class="text-4xl font-medium mb-4 lg:text-6xl lg:leading-normal">
        Start Your Journey
        <br />
        With Us Now
      </h1>
      <button class="mt-4 p-3 lg:w-1/4 bg-blue-600 rounded-full hover:bg-blue-700 transition">
        Start Now
      </button>
    </div>
    <div class="w-full md:w-1/2 flex justify-center p-8">
      <NuxtImg src="/journey-icon.png" alt="Branding" class="max-w-60 lg:max-w-xs w-full" />
    </div>
  </section>

</template>

<style scoped>
@media (min-width: 1024px) {
  .sixth-section-container {
    height: 23rem;
  }
}
</style>