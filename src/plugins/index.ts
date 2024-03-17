import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

import type { App } from 'vue'


/**
 * 集中进行插件的注册
 * @param app {Vue} Vue 构造函数
 */
export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
