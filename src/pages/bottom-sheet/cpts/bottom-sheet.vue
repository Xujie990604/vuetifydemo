<template>


  <v-bottom-sheet v-model="isShowSheet">
    <template v-slot:activator="{ props }">
      <div class="text-center">
        <v-btn v-bind="props" size="x-large" text="展示底部面板"> </v-btn>
      </div>
    </template>
    <v-list>
      <v-list-subheader> 速率 </v-list-subheader>
      <v-btn
        class="cancel-btn"
        @click="isShowSheet = !isShowSheet"
        variant="text"
        text="取消"
      ></v-btn>
      <v-list-item
        v-for="item in listArray"
        :key="item"
        :title="item"
        @click="isShowSheet = false"
      >
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";


const isShowSheet = ref(false);
const listArray = reactive(["0Mbps", "10Mbps", "100Mbps", "1000Mbps"]);
</script>

<!-- TODO: 需要结合 scss 或者 sass 使用 -->
<style lang="css" scoped>
.list {
  position: relative;
}

.cancel-btn {
  position: absolute;
  top: 8px;
  right: 15px;
}
</style>
