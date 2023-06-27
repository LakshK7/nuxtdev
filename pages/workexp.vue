<template>
  <div>
    <v-main>
      <h1 class="heading">Experience</h1>
      <v-container class="cardcols">
        <v-row class="cardcols">
          <v-col cols="4" :key="n" v-for="n in 5">
            <v-card
              class="workcard"
              height="300"
              @click="updateModal(n)"
              elevation="4"
            >
              <v-card-title class="title">
                {{ companies[n - 1] }} -
                <p>{{ titles[n - 1] }}</p>
                <p class="dates">{{ timeline[n - 1] }}</p>
              </v-card-title>
              <img :src="logos[n - 1]" class="images" />
              <p class="bottomTag">Click for Details</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Modal
      v-if="showmodal == true"
      @close-modal="showmodal = false"
      :selectedCard="selectedKey"
      :cardTitle="companies[selectedKey - 1]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "~/components/Modal.vue";

let showmodal = ref(false);
let selectedKey = ref(0);
const companies = ref([
  "Analysis Group",
  "NYU Tandon",
  "Analysis Group",
  "NYU Tandon",
  "Innoway Technologies",
]);

const titles = ref([
  "Data Science Intern",
  "Office Assistant",
  "Data Science Intern",
  "Course Assistant",
  "Web Dev Intern",
]);

const timeline = ref([
  "Feb 2023 - Apr 2023",
  "Oct 2021 - Dec 2022",
  "Jun 2022 - Aug 2022",
  "Jan 2022 - Mar 2022",
  "May 2020 - Jun 2020",
]);

const logos = ref([
  "/Analysis-Group-Logo.png",
  "/nyutandon.jpg",
  "/Analysis-Group-Logo.png",
  "/nyutandon.jpg",
  "/innoway.jpeg",
]);

function updateModal(key: number) {
  showmodal.value = true;
  selectedKey.value = key;
  console.log(selectedKey.value);
}

useHead({
  title: "My Portfolio | Work Experience",

  meta: [{ name: "description", content: "My work exp" }],
});
</script>

<style scoped>
.workcard {
  margin: 10px;
  background-color: transparent;
}
.cardcols {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 75vh; */
}

.title {
  font-size: 30px;
  overflow: auto;
  /* white-space: nowrap; */
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.bottomTag {
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.dates {
  font-size: 20px;
}

.images {
  height: 100px;
  width: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 75px;
  margin-top: 15px;
  /* background-color: transparent !important; */
}

.heading {
  font-size: 100px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 0px;
  margin-left: 20px;
}
</style>
