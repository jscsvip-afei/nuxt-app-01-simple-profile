// https://nuxt.com/docs/api/configuration/nuxt-config
if (process.env.VITE_ENV && !process.env.VITE_API_BASE_URL) {
    throw new Error('请先于 .env.production 文件内，配置生产环境的 VITE_API_BASE_URL')
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt", "@nuxt/image"],
  
  // 运行时配置，将环境变量暴露给客户端
  runtimeConfig: {
    public: {
      env: process.env.VITE_ENV,
      apiBaseUrl: process.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'
    }
  },
  
  
});
