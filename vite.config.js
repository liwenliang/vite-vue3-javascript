import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      eslintrc: {
        // 设置为true可以生成.eslintrc-auto-import.json文件,这样在eslint引入后,就不会报错了
        enabled: true
      },
      imports: ['vue'] // 自动引入vue3
    }),
    Components({
      // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      dirs: ['src/components'],

      // 有了这个 main.js里也不需要引入了
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 3000,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {}
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false
  }
})
