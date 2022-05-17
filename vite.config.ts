/* eslint-disable new-cap */
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import svgLoader from 'vite-svg-loader'
import IconsResolver from 'unplugin-icons/resolver'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 编辑器提示 path 模块找不到，可以yarn add @types/node --dev
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueUseComponentsResolver, ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [vue(),
    svgLoader(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      resolvers: [IconsResolver(), AntDesignVueResolver(), ElementPlusResolver()],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    Components({
      dts: './src/components.d.ts',
      // imports 指定组件所在位置，默认为 src/components
      dirs: ['src/components/'],
      extensions: ['vue'],
      resolvers: [IconsResolver(), AntDesignVueResolver(), ElementPlusResolver(), VueUseComponentsResolver()],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
  ],
  resolve: { alias: { '@': resolve(__dirname, 'src') } }, // 设置 `@` 指向 `src` 目录


  server: {
    port: 8000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      '/api': {
        // 本地 8000 前端代码的接口 代理到 8888 的服务端口
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    assetsDir: 'static/assets',
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      // 全局引入了 scss 的文件
      scss: {
        additionalData: `
        @import "@/assets/styles/variables.scss";
      `,
        javascriptEnabled: true,
      },
    },
  },
})
