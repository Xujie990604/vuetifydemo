<template>
  <div class="page-btn">
    <v-container fluid>
      <p>
        按钮的类型：{{
          btnConfig.type === "elevated" ? "default" : btnConfig.type
        }}
      </p>
      <v-radio-group v-model="btnConfig.type" inline>
        <v-radio label="Default" value="elevated"></v-radio>
        <v-radio label="Text" value="text"></v-radio>
      </v-radio-group>
    </v-container>

    <v-container fluid>
      <p>按钮使用图标类型: {{ btnConfig.icon }}</p>
      <v-radio-group v-model="btnConfig.icon" inline>
        <v-radio label="Icon" value="icon"></v-radio>
        <v-radio label="Prepend-icon" value="prepend-icon"></v-radio>
        <v-radio label="Append-icon" value="append-icon"></v-radio>
      </v-radio-group>
    </v-container>

    <v-container fluid>
      <p>按钮的圆角大小: {{ btnConfig.rounded }}</p>
      <v-radio-group v-model="btnConfig.rounded" inline>
        <v-radio label="0" value="0"></v-radio>
        <v-radio label="Xs" value="xs"></v-radio>
        <v-radio label="Xl" value="xl"></v-radio>
      </v-radio-group>
    </v-container>

    <v-container fluid>
      <p>是否有 Loading 动画: {{ btnConfig.loading }}</p>
      <v-radio-group v-model="btnConfig.loading" inline>
        <v-radio label="无" :value="false"></v-radio>
        <v-radio label="有" :value="true"></v-radio>
      </v-radio-group>
    </v-container>

    <v-btn
      :variant="btnAttribute.type as any"
      :[btnAttribute.icon]="`$vuetify`"
      :text="btnAttribute.text"
      :rounded="btnAttribute.rounded"
      :loading="btnAttribute.loading"
    ></v-btn>

    <div class="btn-container">
      <p>定制化按钮演示</p>

      <div class="btn-1">
        <VBtnSecondary>定制化按钮1</VBtnSecondary>
      </div>
      <div class="btn-2">
        <VBtnTertiary>定制化按钮2</VBtnTertiary>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";

const btnConfig = reactive({
  type: "elevated",
  icon: "prepend-icon",
  rounded: "xl",
  loading: false,
});

interface IBtnAttribute {
  text: string;
  type: string;
  icon: any;
  rounded: string;
  loading: boolean;
}

const btnAttribute = computed(() => {
  const temp: IBtnAttribute = {
    text: "",
    type: "",
    icon: "",
    rounded: "",
    loading: false,
  };
  // 1. 按钮类型
  if (btnConfig.type === "elevated") {
    temp.type = "elevated";
    temp.text = `按钮类型为default`;
  } else {
    temp.type = btnConfig.type;
    temp.text = `按钮类型为${btnConfig.type}`;
  }
  // 2. 按钮图标
  temp.icon = btnConfig.icon;
  if (btnConfig.icon === "icon") {
    temp.text = "";
  }
  // 3.按钮圆角
  temp.rounded = btnConfig.rounded;
  // 4. loading
  temp.loading = btnConfig.loading;

  return temp;
});
</script>

<style scoped lang="scss">
.v-container {
  padding-top: 0;
  padding-bottom: 0;
}

.btn-container {
  padding-top: 20px;
}
</style>
