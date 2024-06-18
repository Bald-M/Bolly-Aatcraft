import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const app = createApp(App)

// 公共路径
// bolly-aatcraft-backend-data:1000/api/products
//app.config.globalProperties.$baseUrl = 'https://www.china-fix.com:3000/'
app.config.globalProperties.$baseUrl = 'https://www.china-fix.com/bolly-aatcraft/images/'
//app.config.globalProperties.$baseUrl = 'http://bolly-aatcraft-backend-data:1000/'

// 关闭警告
app.config.warnHandler = () => {}

app.use(router)
app.mount("#app")

