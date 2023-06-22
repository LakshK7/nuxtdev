<template>
  <div>
    <!-- <v-container style="margin-left: 20px"> -->
    <v-row>
      <v-col cols="6">
        <v-card
          height="400"
          elevation="0"
          style="
            background-color: transparent !important;
            font-size: 50px;
            margin-top: 15%;
            /* margin-top: 50px; */
            margin-left: 40px;
            color: white;
          "
          ><p>Hey! 👋</p>
          <p style="margin-top: 10px">Welcome to my Portfolio 🚀</p>
          <p class="data-value">
            I'm a <span>{{ typedData }}</span>
          </p></v-card
        >
      </v-col>
      <v-col cols="5" style="margin-right: 10px; margin-left: 40px">
        <v-card
          height="300"
          style="
            background-color: transparent !important;
            font-size: 50px;
            /* color: white; */
            margin-top: 55%;
          "
          elevation="0"
          ><v-card-title
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 50px;
              margin-top: 2px;
              color: white;
            "
            >Built Using</v-card-title
          >
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 10px;
            "
          >
            <v-icon color="white">mdi-arrow-bottom-left</v-icon>
            <v-icon
              color="white"
              style="padding-left: 100px; padding-right: 100px"
              >mdi-arrow-down</v-icon
            >
            <v-icon color="white">mdi-arrow-bottom-right</v-icon>
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
            "
          >
            <Icon name="devicon:nuxtjs" size="75" />
            <span style="padding-left: 100px; padding-right: 100px">
              <Icon name="devicon:typescript" size="75" />
            </span>
            <Icon name="devicon:vuetify" size="75" />
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
let name = ref(0);
const jobs = ref([
  "Software Developer!",
  "Sports Enthusiast!",
  "Data Scientist!",
]);
const showData = ref(true);
let typedData = ref("");
const data = computed(() => jobs.value[name.value]);

onMounted(() => {
  setInterval(() => {
    name.value = (name.value + 1) % jobs.value.length;
    console.log(name.value);
    console.log(data);
  }, 5000);
});

watch(data, () => {
  showData.value = false;
  typedData.value = "";
  setTimeout(() => {
    showData.value = true;
    typedOutData();
  }, 100);
});

function typedOutData() {
  const text = data.value;
  let index = 0;

  const typingInterval = setInterval(() => {
    typedData.value += text[index];
    index++;

    if (index === text.length) {
      clearInterval(typingInterval);
    }
  }, 100);
}
</script>

<style scoped>
.data-value {
  margin-top: 10px;
}
.data-value span {
  /* display: inline-block; */
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(40) 1s forwards;
}

@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
