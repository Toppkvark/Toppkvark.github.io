<template>
  <div>
    <h1>Sprint 1</h1>
    <br />
    <h2>Sprint Duration</h2>
    <div class="body-1">
      9-23 April
    </div>
    <h2>Sprint Goal</h2>
    <div class="body-1">
      Learn the underlying technologies. Sketch and implement basic user
      interface and funtions.
    </div>
    <h2>Acomplished during the sprint</h2>
    <div class="body-1" style="margin-bottom: 3vh">
      Spent time learning the technologies we plan to use (react, material-ui,
      etc.). Made sketches for the wireframes. Implemented basic functions
      (choose campus, picking light/dark mode, choosing time intervals). Made
      sketches for the UI and map. Researched API's and contacted keyholders. <br/>
    </div>

    <h3 class="text-center">Gallery</h3>
    <v-lazy>
      <v-carousel
        cycle
        height="700"
        hide-delimiter-background
        show-arrows-on-hover
        touch
        hide-delimiters
        progress
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-row class="fill-height" align="end" justify="center">
            <div class="display-2" style="color: #111111">
              
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-lazy>
  </div>
</template>
<script>
export default {
  name: "SprintOne",
  data() {
    return {
      items: [
        {
          src:
            "https://cdn.discordapp.com/attachments/833994779557625896/833994840269652018/Screenshot_2021-04-20_at_11.16.44.png",
        },
        {
          src:
            "https://cdn.discordapp.com/attachments/833994779557625896/833994876353773588/Screenshot_2021-04-20_at_11.16.50.png",
        },
        {
          src:
            "https://cdn.discordapp.com/attachments/833994779557625896/833995088136634389/Screenshot_2021-04-20_at_11.17.08.png",
        },
      ],
    };
  },
};
</script>
<style>

</style>
