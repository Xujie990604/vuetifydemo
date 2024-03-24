import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '../styles/main.scss'

import { createVuetify, type ThemeDefinition } from 'vuetify'
import { VBtn, VSystemBar } from 'vuetify/components';
// 导入颜色包
import colors from 'vuetify/util/colors'

const myCustomBlueTheme: ThemeDefinition = {
  dark: true, // 设置为 false 表示这是一个浅色主题
  colors: {
    background: '#FFFFFF',
    surface: 'blue',
    something: '#E3F2FD'
  },
  variables: {
    'u-border-color': 'red',
  }
}

// 导出 vuetify 实例
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      myCustomBlueTheme,
      light: {
        colors: {
          something: "#FFFFFF"
        },
        variables: {
          'u-border-color': 'yellow'
        }
      },
      dark: {
        colors: {
          something: "#000000"
        },
        variables: {
          'u-border-color': 'blue'
        }
      }
    }
  },
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
