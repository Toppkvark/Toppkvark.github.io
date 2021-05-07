<template>
  <div>
    <v-card elevation="0">
      <v-card-title class="text-center">
        <div style="width: 100%">
          <strong> Sprint Timeline </strong>
        </div>
        <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
          style="width: 100%"
        >
          <v-lazy transition="scroll-x-transition">
            <v-timeline-item left fill-dot>
              <v-card dark>
                <v-card-title class="title">
                  Sprint 1
                  <v-spacer />
                  19-23 April
                </v-card-title>
                <v-card-text class="text--primary">
                  <p>
                    <br />
                    Learn the underlying technologies. Sketch and implement
                    basic user interface and funtions.
                  </p>
                  <v-btn
                    rounded
                    link
                    to="/SprintOne"
                    @click.native="scrollToTop"
                    class="mx-0"
                  >
                    Go to Sprint 1<v-icon class="ml-3"
                      >mdi-arrow-right</v-icon
                    ></v-btn
                  >
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-lazy>
          <v-lazy transition="scroll-x-transition">
            <v-timeline-item right fill-dot color="red">
              <v-card dark>
                <v-card-title class="title">
                  Sprint 2
                  <v-spacer />
                  26-30 April
                </v-card-title>
                <v-card-text class="text--primary">
                  <p>
                    <br />
                    Interactive map, management of data and implementation of
                    functionality.
                    <br />
                  </p>
                  <v-btn rounded link to="/SprintTwo" class="mx-0">
                    Go to Sprint 2
                    <v-icon class="ml-3">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-lazy>
          <v-lazy transition="scroll-x-transition">
            <v-timeline-item left fill-dot>
              <v-card dark>
                <v-card-title class="title">
                  Sprint 3
                  <v-spacer />
                  03-07 May
                </v-card-title>
                <v-card-text class="text--primary">
                  <p>
                    <br />
                    Time slots visable on map.
                  </p>
                  <v-btn rounded link to="/SprintThree" class="mx-0">
                    Go to Sprint 3
                    <v-icon class="ml-3">mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-lazy>
          <v-lazy transition="scroll-x-transition" hide-on-leave>
            <v-timeline-item right fill-dot color="red">
              <v-card dark>
                <v-card-title class="title">
                  Sprint 4
                  <v-spacer />
                  10-19 May
                </v-card-title>
                <v-card-text class="text--primary">
                  <p>
                    <br />
                    TBA
                  </p>
                  <v-btn rounded link to="/SprintFour" class="mx-0"
                    >Go to Sprint 4
                    <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn
                  >
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-lazy>
        </v-timeline>
      </v-card-title>
    </v-card>
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
  font-size: 18px;
  word-wrap: normal;
  overflow-wrap: normal;
  white-space: initial;
  word-break: normal;
}
.title {
  background-color: rgba(39, 54, 114, 0.965)
}
.text--primary{
  background-color: black
}

</style>
