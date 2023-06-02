<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="400px" style="overflow:visible">
        <catalog v-if="isContentLoaded" container=".article-content"></catalog>
      </el-aside>
      <el-main>
        <div class="article-content">
          <!-- preview-class 为主题的样式类名，例如vuepress就是vuepress-markdown-body -->
          <v-md-preview-html :html="content"
                             preview-class="vuepress-markdown-body">
          </v-md-preview-html>
        </div>
        <!--分割线-->
        <el-divider border-style="double"/>
        <MessageBoard></MessageBoard>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Catalog from "@/components/CatalogCard";
import {articleApi} from "@/api";
import buildCodeBlock from "@/utils";
import {nextTick, ref} from "vue";
import MessageBoard from "@/components/MessageBoard.vue";

export default {
  name: "Article",
  components: {MessageBoard, Catalog},

  setup() {
    let content = ref("")
    let isContentLoaded = ref(false)

    articleApi.GetArticle().then((response) => {
      content.value = response;
      nextTick(() => {
        buildCodeBlock(".article-content");
        isContentLoaded.value = true;
      });
    });

    return {content, isContentLoaded}
  }
}
</script>

<style scoped>
.article-content {

}
</style>