<template>
  <div>
    <h1>Sprint 2</h1>
    <br />
    <h2>Sprint Duration</h2>
    <p>
      26-30 April
    </p>
    <h2>Sprint Goal</h2>
    <p>
      Interactive map, management of data and implementation of functionality.
    </p>

    <h2>Accomplished during the sprint</h2>
    <p>
      Implemented interactive floorplan, data handling and functionality. We
      were able to have a meeting with a KTH staff member about the API we
      intended to use. We implemented a lot of functionality to the website and
      most of the UI/UX is finished.<br />
    </p>
    <v-window show-arrows>
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="info" text v-bind="attrs" v-on="on"><v-icon>mdi-arrow-left</v-icon></v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
          <v-btn color="info" text v-bind="attrs" v-on="on">
              <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          
      </template>
      <v-window-item v-for="item in items" :key="item.code">
        <h2 class="text-center">Code highlight and preview</h2>
        <v-row class="d-flex justify-space-between">
          <v-col cols="6">
            <div v-highlight>
              <pre class="language-javascript">
                <code>
                  {{item.code}}
                </code>
              </pre>
            </div>
          </v-col>
          <v-col cols="6">
          <v-img :src="item.img" />
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
    
  </div>
</template>
<script>
import "vue-code-highlight/themes/prism-twilight.css";

export default {
  name: "SprintTwo",
  components: {},
  data: () => ({
    items: [{code: require('../assets/snippet.js').default, img: ""}],
    
  }),
};
</script>
<style>
#codeSnippet {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
