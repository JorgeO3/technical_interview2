<script lang="ts" setup>
// IDs de las 10 empresas
const companyIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<template>
  <!-- First Section -->
  <section class="first-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-container">
      <h1>
        We Take
        <br />
        Care Of
        <br />
        Your Brand
      </h1>
      <h6>We care about our work and we care about our clients.</h6>
      <div class="email-form-container">
        <input
          class="input-email"
          type="text"
          name="email"
          placeholder="Enter Your Email"
        />
        <button class="btn-talk">Let's Talk</button>
      </div>
    </div>
    <div class="image-container">
      <NuxtImg src="/image.png" alt="Branding" sizes="xl:500px xxl:609px" />
    </div>
  </section>

  <!-- Second Section -->
  <section class="second-section">
    <h1 class="second-section-text">Companies We Work With</h1>
    <div class="companies-container">
      <template v-for="id in companyIds" :key="id">
        <NuxtImg
          class="company-img"
          :src="`/company${id}.svg`"
          :alt="`Company ${id}`"
          sizes="xl:164px"
        />
      </template>
    </div>
  </section>

  <!-- Third Section -->
  <section class="third-section">
    <div class="third-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="stats-container">
        <div class="stat-box">
          <h1 class="stat-title">245%</h1>
          <h6>More revenues for the brand</h6>
        </div>
        <div class="stat-box">
          <h1 class="stat-title">130K+</h1>
          <h6>Audiences reached</h6>
        </div>
        <div class="stat-box">
          <h1 class="stat-title">50+</h1>
          <h6>Brands trust us</h6>
        </div>
        <div class="stat-box">
          <h1 class="stat-title">24+</h1>
          <h6>Worldwide Awards</h6>
        </div>
      </div>
      <div class="commitments-container">
        <h1>Commitments</h1>
        <h6>
          We are committed to working with you collaboratively to understand
          <br />
          your goals and create a strategy that will achieve them.
        </h6>
        <NuxtLink to="/" class="commitment-link">Learn More</NuxtLink>
      </div>
    </div>
  </section>

  <!-- Fourth Section -->
  <section>
    <div
      class="fourth-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="fourth-left-container">
        <h1>How It Works</h1>
        <p>
          We believe that the best way to create successful marketing
          <br />
          campaigns is to work closely with our clients to understand
          <br />
          their goals and challenges.
        </p>
        <NuxtImg
          src="/how-it-works.png"
          class="fourth-image"
          alt="How It Works"
          sizes="xl:500px xxl:609px"
        />
      </div>
      <div class="fourth-right-container">
        <div class="process-step">
          <NuxtImg src="/discovery-icon.png" alt="Discovery" />
          <div>
            <h1>Discovery</h1>
            <p>
              We meet with you to learn about your business, your goals,
              <br />
              and your target audience.
            </p>
          </div>
        </div>
        <div class="process-step">
          <NuxtImg src="/strategy-icon.png" alt="Strategy" />
          <div>
            <h1>Strategy</h1>
            <p>
              We develop a strategy tailored to your needs,
              <br />
              ensuring alignment with your goals.
            </p>
          </div>
        </div>
        <div class="process-step">
          <NuxtImg src="/execution-icon.png" alt="Execution" />
          <div>
            <h1>Execution</h1>
            <p>
              We implement the strategy efficiently,
              <br />
              ensuring timely delivery and quality results.
            </p>
          </div>
        </div>
        <div class="process-step">
          <NuxtImg src="/measurement-icon.png" alt="Evaluation" />
          <div>
            <h1>Measurement</h1>
            <p>
              We continuously monitor and evaluate the performance,
              <br />
              making adjustments as needed to optimize results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Fifth Section -->
  <section>
    <div class="fifth-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1>Our Work</h1>
      <p>A glimpse of our portfolio</p>

      <div class="portfolio-container">
        <div>
          <NuxtImg src="/project1.png" alt="A" sizes="xl:300px" />
          <h6>Apple</h6>
        </div>
        <div>
          <NuxtImg src="/project2.png" alt="Project 2" sizes="xl:300px" />
          <h6>Coca-Cola</h6>
        </div>
        <div>
          <NuxtImg src="/project3.png" alt="Project 3" sizes="xl:300px" />
          <h6>Nike</h6>
        </div>
      </div>

      <button>See More</button>
    </div>
  </section>

  <!-- Sixth Section -->
  <section>
    <div class="sixth-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="card-container">
        <div class="sixt-left-container">
          <h1>
            Elevate Your
            <br />
            Brand Today!
          </h1>
        </div>

        <div class="sixth-right-container">
          <p>
            Ready to transform your digital dresence? Let's
            <br />
            create magic together! book our services now!
          </p>
          <button>Book Call</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Seventh Section -->
  <section>
    <div
      class="seventh-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="seventh-left-container">
        <!-- Six members in images -->
        <NuxtImg
          class="member-img"
          src="/member1.png"
          alt="Member 1"
          sizes="xl:100px"
        />
        <NuxtImg
          class="member-img"
          src="/member2.png"
          alt="Member 2"
          sizes="xl:100px"
        />
        <NuxtImg
          class="member-img"
          src="/member3.png"
          alt="Member 3"
          sizes="xl:100px"
        />
        <NuxtImg
          class="member-img"
          src="/member4.png"
          alt="Member 4"
          sizes="xl:100px"
        />
        <NuxtImg
          class="member-img"
          src="/member5.png"
          alt="Member 5"
          sizes="xl:100px"
        />
        <NuxtImg
          class="member-img"
          src="/member6.png"
          alt="Member 6"
          sizes="xl:100px"
        />
      </div>
      <div class="seventh-right-container">
        <h1>Meet Our Team</h1>
        <p>
          Discover the brilliance behind Embrace. Our team blends
          <br />
          innovation and artistry to craft digital wonders that captivate
        </p>
        <button>Learn More</button>
      </div>
    </div>
  </section>

  <!-- Eighth Section -->
  <section>
    <div
      class="eighth-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <IndexCarousel />
    </div>
  </section>

  <!-- Ninth Section -->
  <section>
    <div class="ninth-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="journey-card-container">
        <div class="ninth-left-container">
          <h1>
            Start Your Journey
            <br />
            With Us Now
          </h1>
          <button>Start Now</button>
        </div>
        <div class="ninth-right-container">
          <NuxtImg src="/journey-icon.png" alt="Branding" sizes="xl:280px" />
        </div>
      </div>
    </div>
  </section>

  <!-- Tenth Section -->
  <!-- <section>
    <div class="tenth-section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="title-bar-card">
        <h1>Our Blog</h1>

        <div class="btns-container">
          <button></button>
        </div>
      </div>
    </div>
  </section> -->
</template>

<style scoped>
.first-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5rem;
}
.text-container {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.image-container {
  width: 50%;
}
.text-container h1 {
  /* font-weight: 900; */
  font-size: 6rem;
  line-height: 1;
  font-family: "GeneralSans-Semibold", sans-serif;
}
.text-container h6 {
  font-size: 1.3rem;
  font-weight: 400;
  color: #666;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}
.email-form-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
}
.input-email {
  width: 60%;
  padding: 0.8rem;
  background-color: #fafafa;
  border: 1px solid #cfcfcf;
  border-radius: 30px;
}
.input-email:focus {
  outline: none;
}
.input-email::placeholder {
  font-family: "GeneralSans-Medium", Arial, Helvetica, sans-serif;
}
.btn-talk {
  width: 23%;
  font-family: "GeneralSans-Medium", sans-serif;
  background-color: #3461ff;
  color: white;
  border-radius: 30px;
}
.btn-talk:hover {
  background-color: #1e3de4;
  transition: ease-in-out 0.3s;
}
.btn-talk:active {
  background-color: #6c8cff;
}
.second-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  width: 100%;
  margin: 5rem 0;
  padding: 5rem 0;
}
.companies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.company-img {
  width: 18%;
  max-height: 48px;
  margin: 3% 0;
}
.second-section-text {
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  margin: 0rem 0 2rem 0;
}
.third-section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 7rem;
  margin-bottom: 7rem;
}
.stats-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.stat-box {
  flex: 0 0 calc(50% - 0.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.stat-title {
  font-size: 3.5rem;
  /* font-weight: 900; */
  font-family: "GeneralSans-Semibold", sans-serif;
}
.stat-box h6 {
  font-weight: 400;
  color: #666;
  font-family: "GeneralSans-Medium", sans-serif;
}
.commitments-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
}
.commitments-container h1 {
  font-size: 3.5rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
}
.commitments-container h6 {
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}
.commitment-link {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: #3461ff;
  margin-top: 2rem;
}
.fourth-section-container {
  display: flex;
  flex-direction: row;
  margin-top: 12rem;
  margin-bottom: 15rem;
}
.fourth-left-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.fourth-left-container h1 {
  font-size: 4rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
}

.fourth-left-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: 400;
  color: #666;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}

.fourth-image {
  margin-top: 3rem;
}

.process-step {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2rem;
}
.process-step div h1 {
  font-size: 2rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
}
.process-step div p {
  font-size: 0.9rem;
  font-weight: 400;
  color: #666;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}
.process-step div {
  margin-left: 2rem;
}

.fifth-section-container {
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fifth-section-container h1 {
  font-size: 3.5rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
}

.fifth-section-container p {
  font-size: 1.1rem;
  font-weight: 400;
  color: #666;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}

.fifth-section-container button {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
  background-color: #3461ff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  margin-top: 3rem;
}

.fifth-section-container button:hover {
  background-color: #1e3de4;
  transition: ease-in-out 0.3s;
}

.fifth-section-container button:active {
  background-color: #8da6ff;
}

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.portfolio-container div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio-container div h6 {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
}

.sixth-section-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.card-container {
  width: 100%;
  height: 23rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3rem;
  background-image: url("/six-section-bg.png");
}

.sixt-left-container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
}

.card-container h1 {
  font-size: 3.5rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
  padding: 2rem;
}

.sixth-right-container {
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
}

.sixth-right-container p {
  font-size: 1.2rem;
  line-height: 1.8;
  font-weight: 400;
  color: white;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}

.sixth-right-container button {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  background-color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  margin-top: 3rem;
}

.sixth-right-container button:hover {
  background-color: #f2f2f2;
  transition: ease-in-out 0.3s;
}

.sixth-right-container button:active {
  background-color: #e6e6e6;
}

.seventh-section-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.seventh-left-container {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.member-img {
  width: calc(33.33% - 20px);
  max-width: 150px;
  height: auto;
  box-sizing: border-box;
}

.seventh-right-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
}

.seventh-right-container h1 {
  font-size: 3.5rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
}

.seventh-right-container p {
  font-size: 1.2rem;
  line-height: 1.8;
  font-weight: 400;
  color: #666;
  margin-top: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
}

.seventh-right-container button {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
  background-color: #3461ff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  margin-top: 3rem;
}

.seventh-right-container button:hover {
  background-color: #1e3de4;
  transition: ease-in-out 0.3s;
}

.seventh-right-container button:active {
  background-color: #8da6ff;
}

/*  */
/* Eight  section  */
/*  */
/*  */

.ninth-section-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.journey-card-container {
  width: 100%;
  height: 23rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3rem;
  background-image: url("/ninth-section-bg.png");
}

.ninth-left-container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.ninth-left-container h1 {
  font-size: 3.5rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
}

.ninth-left-container button {
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "GeneralSans-Medium", sans-serif;
  color: white;
  background-color: #3461ff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  margin-top: 3rem;
}

.ninth-left-container button:hover {
  background-color: #1e3de4;
  transition: ease-in-out 0.3s;
}

.ninth-left-container button:active {
  background-color: #8da6ff;
}

.ninth-right-container {
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
</style>
