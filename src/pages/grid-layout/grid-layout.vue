<template>
  <div class="grid-layout">
    <!-- 容器 -->
    <v-container>
      <!-- 行 -->
      <v-row align="center" style="height: 150px;" class="bg-surface-variant">
        <!-- 列 -->
        <v-col cols="4">
          <v-card title="center" text="cols 4"></v-card>
        </v-col>
        <v-col cols="4">
          <v-card title="center" text="cols 4"></v-card>
        </v-col>
      </v-row>

      <v-row align="center" style="height: 150px;" class="bg-surface-variant mt-4">
        <!-- 列 -->
        <v-col cols="4" align-self="end">
          <v-card title="end" text="cols 4"></v-card>
        </v-col>
        <v-col cols="4">
          <v-card title="center" text="cols 4"></v-card>
        </v-col>
      </v-row>

      <v-row align="start" style="height: 150px;" class="bg-surface-variant mt-4" justify="center">
        <v-col cols="6">
          <v-card title="start/center" text="cols 6"></v-card>
        </v-col>
        <v-col cols="4">
          <v-card title="start/center" text="cols 4"></v-card>
        </v-col>
      </v-row>

      <v-row align="center" style="height: 150px;" class="bg-surface-variant mt-4">
        <!-- 列 -->
        <v-col cols="4">
          <v-card title="不偏移" text="cols 4"></v-card>
        </v-col>
        <v-col cols="4" offset="4">
          <v-card title="偏移" text="cols 4 offset 4"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

</script>

<style scoped lang="scss"></style>
