<template>
  <div class="index">
    <v-card class="mx-auto">
      <v-list v-model:opened="open">
        <v-list-group
          v-for="listGroup in listGroupArray"
          :key="listGroup.listGroupTitle"
          :value="listGroup.listGroupTitle"
        >
          <!-- TODO: 这个 props 是个什么东西，里面都有啥内容 -->
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="listGroup.listGroupTitle"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="(listItem, i) in listGroup.listGroupItemArray"
            :key="i"
            :title="listItem.itemTitle"
            :to="listItem.router"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <v-btn class="w-75 bg-something toggle-btn" @click="toggleTheme"
      >切换主题</v-btn
    >
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

// TODO: 使用 reactive 就会有问题，使用 ref 就没有问题，很奇怪
const open = ref([]);

const listGroupArray = reactive([
  {
    listGroupTitle: "容器组件",
    listGroupItemArray: [
      {
        itemTitle: "底部弹窗",
        router: "/content/bottom-sheet",
      },
      {
        itemTitle: "按钮",
        router: "/content/btn",
      },
      {
        itemTitle: "骨架",
        router: "/content/skeleton-loaders",
      },
      {
        itemTitle: "栅格布局",
        router: "/content/grid-layout",
      },
    ],
  },
  {
    listGroupTitle: "表单组件",
    listGroupItemArray: [
      {
        itemTitle: "输入框",
        router: "/content/btn",
      },
    ],
  },
  {
    listGroupTitle: "工具类",
    listGroupItemArray: [
      {
        itemTitle: "边距圆角",
        router: "/content/border-radius",
      },
      {
        itemTitle: "阴影",
        router: "/content/box-shaow",
      },
    ],
  },
  {
    listGroupTitle: "Vue3语法",
    listGroupItemArray: [
      {
        itemTitle: "动画",
        router: "/content/page-animation",
      },
    ],
  },
]);

import { useTheme } from "vuetify";
const theme = useTheme();
const themeList = ["myCustomBlueTheme", "dark", "light"];
let currentTheme = 0;
function toggleTheme() {
  const turnToTheme = themeList[currentTheme % themeList.length];
  theme.global.name.value = turnToTheme;
  currentTheme++;
}
</script>

<style lang="scss" scoped>
// 导入 scss 变量、混入、函数
@use "../assets/css/base" as *;

.toggle-btn {
  position: fixed;
  bottom: 50px;
  margin: 0 12.5%;
  border: 5px solid var(--v-u-border-color);
  // background-color: rgb(var(--v-theme-something));
}
</style>
