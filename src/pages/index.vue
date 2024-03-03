<template>
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
        router: '/content/bottom-sheet'
      },
      {
        itemTitle: "按钮",
        router: '/content/btn'
      },
    ],
  },
  {
    listGroupTitle: "表单组件",
    listGroupItemArray: [
      {
        itemTitle: "输入框",
        router: '/content/btn'
      },
    ],
  },
]);
</script>

<style lang="scss" scoped></style>
