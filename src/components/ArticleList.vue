<template>
  <h2>文章列表</h2>
  <div>
    <el-row :gutter="12">
      <el-col :span="6" v-for="article in articles" :key="article.id">
        <el-card shadow="hover" :body-style="{ padding: '20px'}" >
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <div style="text-align: right;">
            <span>{{ article.author }}</span>
            <span>{{ article.createTime }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {ElCard} from 'element-plus';
import {articleApi} from "@/api";

export default {
  components: {
    ElCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      articleApi.ArticleList().then((response) => {
        this.articles = response;
      });
    },
  },
};
</script>