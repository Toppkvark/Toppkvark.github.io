<template>
  <div class="text-center">
    <h1>Expo</h1>
    <br />
    <h2>Project description</h2>
    <div class="body-1">
      Our project is to create a graphical tool to book group rooms at KTH's
      campuses.
    </div>
    <h2>Contact</h2>
    <div class="body-1">
      If you have any questions during the expo you can contact us through:
    </div>
    <h4>Email</h4>
    <div class="body-1">
      grupptoppkvark@protonmail.com
    </div>
    <h4>Discord</h4>
    <div class="body-1">
      <a target="_blank" href="https://discord.gg/3QpgbRDWux"> Link </a>
    </div>
    <h2>Feedback</h2>
    <div class="body-1">
      Please give feedback through this
      <a
        target="_blank"
        href="https://docs.google.com/forms/d/1qe6j_1T3zRJISk2RdLfrCtJ3KNslBgkLACjZEUqJu80/edit"
        >form</a
      >.
    </div>
    <br />
    <v-btn
      outlined
      x-large
      rounded
      target="_blank"
      href="https://toppkvark-b34b5.web.app/"
      ><b>Project Website</b>
      <v-icon class="ml-3">mdi-exit-to-app</v-icon></v-btn
    >
    <br />
    <br />
    <!--
    <h2 class="text-center">Image Gallery</h2>
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
            <div class="display-2" style="color: #111111"></div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-lazy>
    -->
  </div>
</template>
<script>
export default {
  name: "Expo",
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
      ],
    };
  },
};
</script>
<style></style>
