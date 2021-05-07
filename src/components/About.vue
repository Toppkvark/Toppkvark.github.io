<template>
  <div>
    <h1>Project info</h1>
    <p>
      Our project is to create a graphical tool to book group rooms at KTH's
      campuses.
      <br />
      This project was done as a part of the course II1305 (Project in
      information and comunications technology) at KTH during spring semester
      period 2 2021.
    </p>
    <h2>Team info</h2>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.name" :cols="card.flex">
        <v-card>
          <v-card-title class="names" v-text="card.name" />
          <v-subheader class="names">{{ card.role }} <br />
            {{ card.mail }}</v-subheader
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#000333"
                  v-bind="attrs"
                  v-on="on"
                  :href="card.github"
                  target="_blank"
                  icon
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </template>
              <span>Github</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#0e76a8"
                  v-bind="attrs"
                  v-on="on"
                  :href="card.linkedIn"
                  target="_blank"
                  icon
                >
                  <v-icon color="blue">mdi-linkedin</v-icon>
                </v-btn>
              </template>
              <span>LinkedIn</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        name: "Glacier Ali",
        mail: "glacier@kth.se",
        role: "Developer",
        github: "https://github.com/Glace97",
        linkedIn: "https://www.linkedin.com/in/glacier-ali-b73721168",
        flex: 3,
      },
      {
        name: "Tom Axberg",
        mail: "taxberg@kth.se",
        role: "Developer",
        github: "https://github.com/wolf019",
        linkedIn: "https://www.linkedin.com/in/tomaxberg/",
        flex: 3,
      },
      {
        name: "Adam Caspary",
        mail: "caspary@kth.se",
        role: "Developer and Product Owner",
        github: "https://github.com/ACaspary",
        linkedIn: "https://www.linkedin.com/in/adam-caspary-038b441a1/",
        flex: 3,
      },
      {
        name: "Adam Giscombe Schmidt",
        mail: "adamgs@kth.se",
        role: "Developer",
        github: "https://github.com/AdamGSchmidt",
        linkedIn: "",
        flex: 3,
      },
      {
        name: "Henrik Hagberg",
        mail: "hhagbe@kth.se",
        role: "Developer",
        github: "https://github.com/henrykkebaby",
        linkedIn: "https://www.linkedin.com/in/henrik-hagberg-2b34a9190",
        flex: 3,
      },
      {
        name: "Nicolas Rollino Subiabre",
        mail: "nsrs@kth.se",
        role: "Developer and Scrum Master",
        github: "https://github.com/naicoman1",
        linkedIn: "https://www.linkedin.com/in/nicolas-rollino-262527197/",
        flex: 3,
      },
      {
        name: "Ali Shahwali",
        mail: "shahwali@kth.se",
        role: "Developer",
        github: "https://github.com/ali-shahwali",
        linkedIn: "https://www.linkedin.com/in/ali-shahwali-78a2081b4/",
        flex: 3,
      },
      {
        name: "Filip Wetterdal Todorovic",
        mail: "filipto@kth.se",
        role: "Developer",
        github: "https://github.com/Quroz",
        linkedIn: "",
        flex: 3,
      },
    ],
  }),
};
</script>
<style >
.names {
  font-size: 18px;
  word-wrap: normal;
  overflow-wrap: normal;
  white-space: initial;
  word-break: normal;
}
</style>
