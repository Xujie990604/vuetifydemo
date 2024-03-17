/**
 * main.ts
 *
 * Vue 主文件
 */

import { registerPlugins } from '@/plugins'

import App from './App.vue'

import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
