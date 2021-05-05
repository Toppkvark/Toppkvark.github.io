e<template>
  <v-app id="app">
    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      prominent
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/KTH_logotype.jpg/1920px-KTH_logotype.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-title>Toppkvark</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab exact link to="/">Home</v-tab>
          <v-tab link to="/SprintOne">Sprint 1</v-tab>
          <v-tab link to="/SprintTwo">Sprint 2</v-tab>
          <v-tab link to="/SprintThree">Sprint 3</v-tab>
          <v-tab link to="/SprintFour">Sprint 4</v-tab>
          <v-tab link to="/About">About</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid id="container">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless absolute outlined>
      <v-col class="text-center" cols="12">
        2021 — <strong>II1305 VT21 Group Toppkvark</strong>
        <v-btn plain link to="/About">About</v-btn>
      </v-col>
    </v-footer>
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
#container {
  padding: 64px 256px 0px 300px;
  margin-top: 0px;
}
@media screen and (max-width: 1000px) {
  #container {
    padding: none;
  }
}
@media screen and (max-width: 1500px) {
  #container {
    padding: 64px 128px 0px 150px;
  }
}
</style>
