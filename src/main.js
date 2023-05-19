import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';


// 引入使用主题的样式
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import '@/mock'

createApp(App).use(router).use(ElementPlus, {locale: zhCn}).use(VMdPreviewHtml).mount('#app')
