<template>
  <div class="page-animation">
    <p>Transition 组件</p>
    <v-btn class="mt-2" @click="isShow = !isShow">切换</v-btn>
    <Transition>
      <v-card class="mt-2" v-if="isShow">
        <template #title> 动画卡片 </template>
        <template #text>使用 Transition 组件的默认动画 </template>
      </v-card>
    </Transition>

    <Transition name="slide-fade">
      <v-card class="mt-2" v-if="isShow">
        <template #title> 动画卡片 </template>
        <template #text>使用 Transition 组件的自定义 slide-fade 动画 </template>
      </v-card>
    </Transition>

    <v-card class="mt-2 mb-8" v-if="isShow">
      <template #title> 普通卡片 </template>
      <template #text>没有使用动画</template>
    </v-card>

    <v-divider></v-divider>

    <p class="mt-4">TransitionGroup 组件的使用</p>
    <TransitionGroup class="mt-6" name="list" tag="ul">
      <li v-for="(item, index) in items" :key="item">
        {{ index }} - {{ item }}
      </li>
    </TransitionGroup>

    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="addItem">添加一项</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="deleteItem">移除一项</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="reSort">重新排序</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const isShow = ref(false);
const items = reactive(["foo", "bar", "baz", "no One"]);

function addItem() {
  items.push(generateRandomString(3, 5));
}

function deleteItem() {
  items.pop();
}

function reSort() {
  shuffleArray(items);
}

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // 生成一个随机索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换当前元素与随机选中的元素
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateRandomString(minLength: number, maxLength: number) {
  // 定义可能包含的字符集
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  // 根据随机长度生成字符串
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
</script>

<style scoped lang="scss">
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
