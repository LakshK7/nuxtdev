<template>
  <div>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <h6>{{ props.cardTitle }}</h6>
        <div class="modal-content" v-html="data"></div>
        <button @click="$emit('close-modal')">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  selectedCard: Number,
  cardTitle: String,
});

let data = computed(() => {
  if (props.selectedCard == 1) {
    return `
    <ul class = "modal-content">
        <li> Collaborated with a team of 5 members to develop a healthcare analytics application using Vue 3, Vite, and the composition API  </li>
        <li> Created an online dashboard for a Haitian clinic to visualize and streamline patient data from 2019 to 2022 using Python Dash </li>
        <li> Executed web scraping projects to collect unstructured data and performed extensive pattern and string matching </li>
    </ul>
    `;
  } else if (props.selectedCard == 2) {
    return `
    <ul class = "modal-content">
        <li> Executed various administrative tasks including managing department databases, files, and inventory, in addition to client-side responsibilities such as answering emails and resolving inquiries. Coordinated student employment, adjunct faculty filing </li>
    </ul>
    `;
  }

  if (props.selectedCard == 3) {
    return `
    <ul class = "modal-content">
        <li> Structured and maintained two data engineering pipelines, using BS4, Selenium  </li>
        <li> Leveraged nltk library to implement keyword matching with inflected words in text extracted from 578 PDF files leveraging Azure’s Computer Vision API </li>
        <li> Developed a web dashboard operating Python Dash, to visualize the company's HPC resource usage and allocation </li>
    </ul>
    `;
  }
  if (props.selectedCard == 4) {
    return `
    <ul class = "modal-content">
        <li> Course Assistant for a Visualization class in the Finance and Risk Engineering department, based around dashboarding using Python Dash </li>
        <li> Conducted office hours, graded assignments and projects for over 20 students </li>
        <li> Assisted students with setting up dash and understanding various topics such as bootstrap, HTML CSS, and callback functions </li>
    </ul>
    `;
  }

  if (props.selectedCard == 5) {
    return `
    <ul class = "modal-content">
        <li> Worked as a web dev intern and helped the company setup set up an online ERP platform for a client firm </li>
        <li> Worked on some front-end technologies using basic HTML, CSS and vanilla Js </li> 
    </ul>
    `;
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

h6 {
  font-weight: 200;
  font-size: 40px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: coral;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 25px;
}

.modal-content {
  font-size: 20px;
  display: flex;
  justify-content: baseline;
  padding: 5px;
}
</style>
