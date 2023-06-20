<template>
  <v-app>
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
    </v-app-bar>

    <!-- <v-card> -->
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="4"
            ><v-card height="200"><slot></slot></v-card></v-col
        ></v-row>
      </v-container>
    </v-main>

    <!-- </v-card> -->
  </v-app>
</template>

<script setup></script>

<style lang="scss" scoped></style>
