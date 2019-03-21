<template>
  <v-container grid-list-sm>
    <v-layout
      row
      wrap 
    >

      <v-flex
        xs4
        v-for="movie in movies"
        :key="movie.title"
      >
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline"> {{movie.title}}</h3>

            <span class="grey-text">{{movie.year}}</span>
          </v-card-title>
          <v-card-text>
            {{movie.description}}
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              color="purple"
            >了解详细</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          title: "产品1",
          year: "2019",
          description:
            "产品1简介"
        },
        {
          title: "产品2",
          year: "2019",
          description:
            "产品2简介"
        },
        {
          title: "产品3",
          year: "2019",
          description:
            "产品3简介"
        },
        {
          title: "产品4",
          year: "2019",
          description:
            "产品4简介"
        },
        {
          title: "产品5",
          year: "2019",
          description:
            "产品5简介"
        },
        {
          title: "产品6",
          year: "2019",
          description:
            "产品6简介"
        },
        {
          title: "产品7",
          year: "2019",
          description:
            "产品7简介"
        },
        {
          title: "产品8",
          year: "2019",
          description:
            "产品8简介"
        }
      ]
    };
  },
  components: {}
};
</script>
