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
    <h2>Code highlight and preview</h2>
    <v-window show-arrows>
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="info" text v-bind="attrs" v-on="on"><v-icon>mdi-arrow-left</v-icon></v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
          <v-btn color="info" text v-bind="attrs" v-on="on">
              <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          
      </template>
      <v-window-item v-for="n in 5" :key="`card-${n}`">
        
        <div v-highlight>
          <pre class="language-javascript">
            <code>
              let isPalindrome = (word) => {
              let [length, result] = [word.length, true];
              for (let i = 0; i &lt; length / 2; i++) {
              if (word[i] !== word[length - 1 - i]) result = false;
              }
              return result;
              }
              module.exports = isPalindrome;
            </code>
          </pre>
        </div>
      </v-window-item>
    </v-window>
    
  </div>
</template>
<script>
import "vue-code-highlight/themes/prism-twilight.css";

export default {
  name: "SprintTwo",
  components: {},
  data: () => ({}),
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
