<template>
  <div>
    <h1>Sprint 3</h1>
    <br />
    <h2>Sprint Duration</h2>
    <div class="body-1">
      03-07 May
    </div>
    <h2>Sprint Goal</h2>
    <div class="body-1">
      Time slots visable on map.
    </div>
    <h2>Accomplished during the sprint</h2>
    <div class="body-1">
      During this sprint we continued implementing MVC architecture.
      We were unfortunately not able to get a hold of API' we needed 
      and so we’ve resorted to building our own database, starting with a 
      simple .json and implementing functionality. We also overhauld the 
      start page. <br />
    </div>
    <h2>Image Gallery</h2>
    <div class="body-1" style="margin-bottom: 3vh">Sketch and implementation</div>
    <v-window show-arrows>
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="info" text fab v-bind="attrs" v-on="on">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
          <v-btn color="info" text fab v-bind="attrs" v-on="on">
              <v-icon>mdi-arrow-right</v-icon>
          </v-btn>      
      </template>
      <v-window-item v-for="item in items" :key="item.code">
        <h3 class="text-center">{{item.title}}</h3>
        <v-row class="d-flex justify-space-between">
          <v-col cols="6">
            <v-img :src="item.img1"/>
          </v-col>
          <v-col cols="6" align-self="center">
            <v-img :src="item.img2" />
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
export default {
  name: "SprintThree",
  data: () => ({
    items: [
      {
        title: "Home page",
        img1: "https://cdn.discordapp.com/attachments/833994779557625896/833994840269652018/Screenshot_2021-04-20_at_11.16.44.png",
        img2: "https://cdn.discordapp.com/attachments/833994779557625896/840189485350256650/Skarmbild_2021-05-07_133255.jpg"
      },
      {
        title: "Builing overview page",
        img1: "https://cdn.discordapp.com/attachments/833994779557625896/833994876353773588/Screenshot_2021-04-20_at_11.16.50.png",
        img2: "https://cdn.discordapp.com/attachments/833994779557625896/840190141645324298/Skarmbild_2021-05-07_133530.jpg"
      },
      {
        title: "Booking dialog",
        img1: "https://cdn.discordapp.com/attachments/833994779557625896/833995088136634389/Screenshot_2021-04-20_at_11.17.08.png",
        img2: "https://cdn.discordapp.com/attachments/833994779557625896/840189275723399188/Skarmbild_2021-05-07_133156.jpg"
      }
    ],
    
  }),
};
</script>
<style>

</style>
