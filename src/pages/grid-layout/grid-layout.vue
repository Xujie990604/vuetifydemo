<template>
  <div class="grid-layout">
    <v-container>
      <v-row align="center">
        <v-col cols="4">
          <v-card title="123" text="12345678"></v-card>
        </v-col>
        <v-col cols="4">
          <v-card title="123" text="12345678"></v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-card title="123" text="12345678"></v-card>
        </v-col>
        <v-col cols="4">
          <v-card title="123" text="12345678"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

</script>

<style scoped lang="scss">

</style>
