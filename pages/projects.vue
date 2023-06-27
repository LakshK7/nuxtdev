<template>
  <v-main>
    <h2 class="heading">Projects</h2>
    <v-container>
      <v-row class="projects">
        <v-col cols="12">
          <v-row>
            <v-col cols="4">
              <v-card height="300" class="projectcards" elevation="4">
                <v-card-title class="multi-line">
                  Text Summarization - RNN's vs Transformers
                </v-card-title>
                <div class="iconPosition">
                  <Icon name="devicon:python" size="75" />
                  <Icon name="devicon:tensorflow" size="75" />
                  <Icon name="devicon:keras-wordmark" size="75" />
                </div>
                <div class="buttonPosition">
                  <button @click="redirectGit">
                    GitHub Repo &nbsp;&nbsp;
                    <Icon name="devicon:github" size="30" />
                  </button>
                </div>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card height="300" class="projectcards" elevation="4">
                <v-card-title class="multi-line">
                  Youtube Video Analysis
                </v-card-title>
                <div class="iconPosition-1">
                  <Icon name="devicon:python" size="75" />

                  <Icon name="devicon:apachespark-wordmark" size="75" />

                  <Icon name="devicon:amazonwebservices-wordmark" size="75" />
                </div>
                <div class="buttonPosition-1">
                  <button @click="downloadYTVid">
                    Download PDF
                    <Icon name="system-uicons:arrow-down-circle" size="30" />
                  </button>
                </div>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card height="300" class="projectcards" elevation="4">
                <v-card-title class="multi-line">
                  SUD Treatment Outcome Prediction
                </v-card-title>
                <div class="iconPosition">
                  <Icon name="devicon:python" size="75" />
                  <Icon name="devicon:scikitlearn" size="75" />
                  <Icon name="devicon:pandas-wordmark" size="75" />
                </div>
                <div class="buttonPosition">
                  <button @click="downloadSUDPred">
                    Download PDF
                    <Icon name="system-uicons:arrow-down-circle" size="30" />
                  </button>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
function redirectGit() {
  window.location.href = "https://github.com/LakshK7/DL_Final_Proj";
}

function downloadYTVid() {
  let fileUrl = "/Marketing on Youtube Project Report.pdf";
  window.open(fileUrl, "_blank");
}

function downloadSUDPred() {
  let fileUrl = "/Revised Project Proposal (2).pdf";
  window.open(fileUrl, "_blank");
}

useHead({
  title: "My Portfolio | Projects",

  meta: [{ name: "description", content: "Some projects I completed" }],
});
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 75vh; */
  margin-top: 45px;
}

.projectcards {
  background-color: transparent;
}

.iconPosition {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 90px; */
  margin-top: 50px;
}
.iconPosition-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 90px; */
  margin-top: 70px;
}
.multi-line {
  white-space: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

button {
  background-color: transparent;
  width: 150px;
  height: 40px;
  color: black;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 35px;
  border: 2px solid black;
}

.buttonPosition {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonPosition-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
}

.heading {
  font-size: 100px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-top: 0px;
  margin-left: 20px;
}
</style>
