<template>
  <div class="skeleton-loaders pt-4">
    <div class="checkbox-container d-flex flex-wrap">
      <v-checkbox class="w-50" v-model="skeletonType" label="article" value="article"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="avatar" value="avatar"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="card" value="card"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="actions" value="actions"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="card-avatar" value="card-avatar"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="date-picker" value="date-picker"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="list-item-three-line" value="list-item-three-line"></v-checkbox>
      <v-checkbox class="w-50" v-model="skeletonType" label="text" value="text"></v-checkbox>
    </div>

    <!-- 骨架的样式 -->
    <v-skeleton-loader :loading="skeletonLoading" :class="{ border: skeletonLoading }" class="mx-auto" max-width="300"
      :type="skeletonType">
      <v-card :width="300" class="mx-auto" :border="false">
        <template #title>
          真实渲染的内容
        </template>
        <template #text>
          从服务端接收到的数据
        </template>
      </v-card>
    </v-skeleton-loader>
    <v-btn class="toggle-btn" @click="skeletonLoading = !skeletonLoading">切换 Loading 状态</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const skeletonType = ref(['card'])
const skeletonLoading = ref(true)

</script>

<style scoped lang="scss">
.toggle-btn {
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  max-width: 200px;
  margin: 0 auto;
}
</style>
