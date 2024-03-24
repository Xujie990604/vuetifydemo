<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="mx-auto" max-width="350">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Share </v-btn>

      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="mx-auto" max-width="400">
    <!-- <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" theme="dark">
            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn variant="text"> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#1F7087" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Supermodel </v-card-title>

                <v-card-subtitle>Foster the People</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" size="small" variant="outlined">
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" rounded="0" size="125">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#952175" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Halcyon Days </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" rounded="0" size="125">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const loading = ref(false);
const selection = reactive([]);

function reserve() {
  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
}
</script>

<style scoped lang="scss"></style>
