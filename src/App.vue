<template>
  <!-- v-app 是整个 Vuetify 组件的挂载点，全局只能有一个 -->
  <v-app>
    <!-- 取代原生手机系统栏 -->
    <v-system-bar class="d-flex justify-center"> Vuetify 组件演示 </v-system-bar>
    <!-- 在 v-main 中放置页面内容 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

</script>
<style lang="scss">
</style>
