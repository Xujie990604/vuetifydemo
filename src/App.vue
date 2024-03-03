<template>
  <v-app>
    <v-system-bar> Vuetify 组件演示 </v-system-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
<style lang="css">
.v-system-bar {
  /* TODO:不应该在这改，应该改 CSS 变量 */
  /* height: 44px!important; */
  justify-content: center!important;
}
</style>
