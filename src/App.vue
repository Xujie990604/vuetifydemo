<template>
  <!-- v-app 是整个 Vuetify 组件的挂载点，全局只能有一个 -->
  <v-app>
    <!-- 取代原生手机系统栏 -->
    <v-system-bar class="d-flex justify-center">
      Vuetify 组件演示
    </v-system-bar>
    <!-- 在 v-main 中放置页面内容 -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition
          name="router-fade"
          mode="out-in"
          enter-class="router-fade-enter-from"
          enter-active-class="router-fade-enter-active"
          enter-to-class="router-fade-enter-to"
          leave-class="router-fade-leave-from"
          leave-active-class="router-fade-leave-active"
        >
          <component :is="Component"></component>
        </transition>
      </router-view>
    </v-main>
  </v-app>

</template>
<script setup></script>
<style lang="scss">
/* 定义进入和离开的动画状态 */
.router-fade-enter-active,
.router-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* 定义进入动画的起始状态 */
.router-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

/* 定义进入动画的结束状态 */
.router-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* 定义离开动画的起始状态 */
.router-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* 定义离开动画的结束状态 */
.router-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
