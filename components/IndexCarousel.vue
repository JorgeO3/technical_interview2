<script lang="ts" setup>
interface Card {
  id: number;
  name: string;
  postion: string;
  image: string;
  msg: string;
}

const cards: Card[] = [
  {
    id: 1,
    name: "Amelia Josept",
    postion: "CEO",
    image: "/client1.png",
    msg: "I found the digital expertise I needed. Their creative professional balance exceeded my expectations. I would recommend them to anyone looking for a reliable partner.",
  },
  {
    id: 2,
    name: "Jane Doe",
    postion: "Chief Manager",
    image: "/client2.png",
    msg: "My vision came alive  effortlessly. Their blend of casual and professional approach made the process a breeze. I would recommend them to anyone looking for a reliable partner.",
  },
  {
    id: 3,
    name: "John Smith",
    postion: "CFO",
    image: "/client3.png",
    msg: "Embrace really nails it! Creative, professional, and a pleasure to work with. I would recommend them to anyone looking for a reliable partner.",
  },
  {
    id: 4,
    name: "John Smith",
    postion: "CFO",
    image: "/client3.png",
    msg: "Embrace really nails it! Creative, professional, and a pleasure to work with. I would recommend them to anyone looking for a reliable partner.",
  },
  {
    id: 5,
    name: "John Smith",
    postion: "CFO",
    image: "/client3.png",
    msg: "Embrace really nails it! Creative, professional, and a pleasure to work with. I would recommend them to anyone looking for a reliable partner.",
  },
];
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-title-bar">
      <h1>What Our Client Said About Us</h1>
      <div class="courusel-btns-container">
        <!-- <button class="carousel-btn">
          <LeftArrowIcon />
        </button>
        <button class="carousel-btn">
          <RightArrowIcon />
        </button> -->
      </div>
    </div>

    <div class="carousel-cards-container">
      <ClientOnly>
        <UCarousel :items="cards" ref="carousel" arrows>
          <template #default="{ item }">
            <div class="carousel-card max-w-80 sm:max-w-96">
              <div class="carousel-card-header">
                <NuxtImg :src="item.image" :alt="item.name" width="60px" />
                <div class="carousel-card-header-text">
                  <h2>{{ item.name }}</h2>
                  <p>{{ item.postion }}</p>
                </div>
              </div>

              <div class="carousel-card-body">
                <p>{{ item.msg }}</p>
              </div>
            </div>
          </template>

          <template #prev="{ onClick, disabled }">
            <button :disabled="disabled" @click="onClick" class="carousel-btn">
              <LeftArrowIcon />
            </button>
          </template>

          <template #next="{ onClick, disabled }">
            <button :disabled="disabled" @click="onClick" class="carousel-btn">
              <RightArrowIcon />
            </button>
          </template>
        </UCarousel>
      </ClientOnly>
    </div>
  </div>
</template>

<style>
.carousel-title-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.carousel-title-bar h1 {
  font-size: 2rem;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 600;
}

.carousel-container {
  width: 100%;
}

.carousel-title-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.courusel-btns-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.carousel-btn {
  background-color: #e1e2e7;
  border: none;
  padding: 1rem;
  border-radius: 10rem;
  margin: 0 0.5rem;
  font-size: 1.7rem;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 600;
  color: #aeafb3;
  transition: all 0.3s;
}

.carousel-btn:hover {
  background-color: #3461ff;
  color: white;
}

.carousel-btn-active {
  background-color: #3461ff;
  border: none;
  padding: 1rem;
  border-radius: 10rem;
  margin: 0 0.5rem;
  font-size: 1.7rem;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 600;
  color: #aeafb3;
  transition: all 0.3s;
}

.carousel-card {
  display: flex;
  /* max-width: 300px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  border-radius: 1.2rem;
  background-color: #f8f9ff;
  margin: 1rem 1rem;
}

.carousel-card-header {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.carousel-card-body {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel-card-header-text {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.carousel-card-header-text h2 {
  font-size: 1.2rem;
  font-family: "GeneralSans-Semibold", sans-serif;
  font-weight: 600;
}

.carousel-card-header-text p {
  font-size: 1rem;
  font-family: "GeneralSans-Medium", sans-serif;
  font-weight: 400;
}

.carousel-card-body p {
  font-size: 0.88rem;
  font-family: "GeneralSans", sans-serif;
  font-weight: 500;
  line-height: 1.7;
  color: #464545;
}
</style>
