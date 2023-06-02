<template>
  <div id="comment">
    <h2>留言 </h2>
    <div>
      <div id="respond">
        <p>撰写留言或回复</p>
        <i style="font-size: 5px">发布留言必须填写的电子邮件地址不会公开。</i>
        <el-form :model="message">
          <div>
            <el-row :gutter="12">
              <el-col :span="12" style="padding-bottom: 0;padding-top: 0">
                <el-form-item>
                  <el-input class="w-50 m-2" id="author" placeholder="留言者姓名" name="author" type="text"
                            v-model="message.creator"
                            maxlength="245" size="large" clearable>
                    <template #prefix>
                      <font-awesome-icon :icon="['fas', 'user']"/>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" style="padding-bottom: 0;padding-top: 0">
                <el-form-item>
                  <el-input class="w-50 m-2" id="email" placeholder="电子邮件地址" name="email" type="text"
                            v-model="message.mail"
                            maxlength="100" size="large" clearable>
                    <template #prefix>
                      <font-awesome-icon :icon="['fas', 'envelope']"/>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" style="padding-bottom: 0;padding-top: 0">
                <el-form-item>
                  <el-input class="w-50 m-2" id="url" placeholder="网站" name="url" type="text"
                            v-model="message.website"
                            maxlength="200" size="large" clearable>
                    <template #prefix>
                      <font-awesome-icon :icon="['fas', 'globe']"/>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" style="padding-bottom: 0;padding-top: 0">
                <el-form-item>
                  <el-input id="comment" name="comment" placeholder="Please input" type="textarea"
                            v-model="message.message_content"
                            :autosize="{ minRows: 3, maxRows: 10 }" maxlength="2048"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">送出留言</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div><!-- #respond -->

    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {reactive} from "vue";

export default {
  name: 'MessageBoard',
  components: {FontAwesomeIcon},
  props: {
    msg: String
  },
  data() {
    return {
      message: reactive({
        creator: '',
        mail: '',
        website: '',
        message_content: ''
      }),
    }
  },
  methods: {
    onSubmit() {
      //TODO
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>