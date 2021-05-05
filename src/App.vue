<template>
  <v-app id="app">
    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/KTH_logotype.jpg/1920px-KTH_logotype.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-title>Toppkvark</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container style="height: 1500px">
        <Home></Home>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/*import SprintOne from "./components/SprintOne";
import SprintTwo from "./components/SprintTwo";
import SprintThree from "./components/SprintThree";
import SprintFour from "./components/SprintFour";*/
import Home from "./components/Home";

export default {
  name: "App",

  components: {
  Home: Home
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.app {
  height: 100vh;
  overflow: hidden;
}
</style>
