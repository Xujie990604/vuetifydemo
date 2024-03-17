import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '../styles/main.scss'

import { createVuetify } from 'vuetify'
import { VBtn, VSystemBar } from 'vuetify/components';
// 导入颜色包
import colors from 'vuetify/util/colors'

// 导出 vuetify 实例
export default createVuetify({
  // 使用别名，在原组件的基础上派发出新的组件
  aliases: {
    VBtnSecondary: VBtn,
    VBtnTertiary: VBtn,
  },
  defaults: {
    // 为组件自定义 prop
    VBtn: {
      // height: '100px'
    },
    VBtnSecondary: {
      color: 'secondary',
      variant: 'flat',
    },
    VBtnTertiary: {
      rounded: true,
      variant: 'plain',
    },
    VSystemBar: {
      color: colors.grey.lighten1
    }
  },
})
