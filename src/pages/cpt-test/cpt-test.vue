<template>
  <div class="cpt-test">
    <v-dialog max-width="400">
      <!-- 激活器 -->
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          text="打开弹窗"
          variant="flat"
          color="surface-variant"
        >
        </v-btn>
      </template>
      <!-- default -->
      <template #default="{ isActive }">
        <v-card text="你确认要更新吗？" title="更新计划">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="关闭弹窗" @click="isActive.value = false">
            </v-btn> </v-card-actions
        ></v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
</script>

<style scoped lang="scss"></style>
