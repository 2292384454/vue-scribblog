import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';


// 引入使用主题的样式
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';


import '@/mock'

library.add(fas)


createApp(App).use(router).use(ElementPlus, {locale: zhCn}).use(VMdPreviewHtml).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
