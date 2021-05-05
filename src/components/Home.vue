<template >
  <div>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item fill-dot>
        <v-card dark>
          <v-card-title class="title"> Sprint 4 </v-card-title>
          <v-card-text class="white text--primary">
            <p>
                <br> TBA
            </p>
            <v-btn rounded link to="/SprintFour" class="mx-0">Go to Sprint 4 <v-icon class="ml-3">mdi-arrow-down</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item fill-dot>
        <v-card dark>
          <v-card-title class="title"> Sprint 3 </v-card-title>
          <v-card-text class="white text--primary">
            <p>
                <br> Time slots visable on map.
            </p>
            <v-btn rounded link to="/SprintThree" class="mx-0">Go to Sprint 3<v-icon class="ml-3">mdi-arrow-down</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item fill-dot>
        <v-card dark>
          <v-card-title class="title"> Sprint 2 </v-card-title>
          <v-card-text class="white text--primary">
            <p><br>
                Sprint Goal: Interactive blueprint, handling of data and adding functionality.
                We were able to have a meeting with a KTH staff member about the API we intended to use. 
                We implemented a lot of functionality to the website and most of the UI/UX is finished.<br>
            </p>
            <v-btn rounded link to="/SprintTwo" class="mx-0">Go to Sprint 2 <v-icon class="ml-3">mdi-arrow-down</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item fill-dot>
        <v-card dark>
          <v-card-title class="title"> Sprint 1 </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              <br> Learning the languages/APIs/technologies we intended to use. 
              Basic functionality (choose campus, picking light/dark mode,
              choose time intervals). Sketching and implementing basic
              visual design and basic map view.
            </p>
            <v-btn rounded link to="/SprintOne" class="mx-0"> Go to Sprint 1<v-icon class="ml-3">mdi-arrow-down</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.div {
  height: 100vh;
  overflow: hidden;
}
p {
  font-size: 16px;
}
</style>