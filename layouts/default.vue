<template>
  <v-app>
    <v-app-bar
      :elevation="5"
      rounded
      style="
        background-color: transparent !important;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 20px;
      "
    >
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
      <v-toolbar-title style="color: white">My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <p style="color: white">
        <NuxtLink to="/"><span style="padding: 15px">Home</span></NuxtLink>
        <NuxtLink to="/about"
          ><span style="padding: 15px">About</span></NuxtLink
        >
        <NuxtLink to="/workexp"
          ><span style="padding: 15px">Work Experience</span></NuxtLink
        >
        <NuxtLink to="/projects"
          ><span style="padding: 15px">Projects</span></NuxtLink
        >
      </p>
    </v-app-bar>

    <v-main class="image-background" :style="backgroundImageStyle">
      <slot></slot>
      <!-- <v-container>
        <v-row align-content="center" justify="center" style="margin-top: 20%">
          <v-col v-for="n in 3" :key="n" cols="4"
            ><v-card height="200"><slot></slot></v-card></v-col
        ></v-row>
      </v-container> -->
    </v-main>
  </v-app>
</template>

<script setup>
// import { url } from "inspector";
import { ref, computed, onMounted } from "vue";

const backgroundImage = ref([
  "pxfuel.jpg",
  "pxfuel1.jpg",
  "pxfuel2.jpg",
  "pxfuel4.jpg",
]);

const index = ref(0);

const backgroundImageStyle = computed(() => {
  return {
    "background-image": `url(${backgroundImage.value[index.value]})`,
  };
});

onMounted(() => {
  setInterval(() => {
    index.value = (index.value + 1) % backgroundImage.value.length;
    // console.log(index.value);
  }, 5000);
});
</script>

<style scoped>
.image-background {
  width: 100%;
  /* height: 400px; */
  background-position: center;
  background-size: cover;
  transition: background-image 0.5s ease-in-out;
}
</style>
