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
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab link to="/" exact >Home</v-tab>
          <v-tab link to="/SprintOne">Sprint 1</v-tab>
          <v-tab link to="/SprintTwo">Sprint 2</v-tab>
          <v-tab link to="/SprintThree">Sprint 3</v-tab>
          <v-tab link to="/SprintFour">Sprint 4</v-tab>
          <v-tab link to="/About">About</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container style="height: 1500px">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

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
