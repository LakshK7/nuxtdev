<template>
  <v-app>
    <v-app-bar
      :elevation="5"
      rounded
      style="background-color: transparent !important"
    >
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-weight: 5000; color: white"
        >My Portfolio</v-toolbar-title
      >
    </v-app-bar>

    <!-- <v-card> -->
    <v-main class="image-background" :style="backgroundImageStyle">
      <!-- <v-container>
        <v-row align-content="center" justify="center" style="margin-top: 20%">
          <v-col v-for="n in 3" :key="n" cols="4"
            ><v-card height="200"><slot></slot></v-card></v-col
        ></v-row>
      </v-container> -->
    </v-main>

    <!-- </v-card> -->
  </v-app>
</template>

<script setup>
// import { url } from "inspector";
import { ref, computed, onMounted } from "vue";

const backgroundImage = ref([
  "space1.jpeg",
  "wallpaperflare.com_wallpaper.jpg",
  "newgalaxy.jpg",
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
    console.log(index.value);
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
