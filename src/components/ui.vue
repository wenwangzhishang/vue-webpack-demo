<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>按钮</h3>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-card>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="text">文字按钮</el-button>
          <el-button :plain="true" :disabled="true">主要按钮</el-button>
          <el-button type="primary" :disabled="true">主要按钮</el-button>
          <el-button type="text" :disabled="true">文字按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button :plain="true" type="success">成功按钮</el-button>
          <el-button :plain="true" type="warning">警告按钮</el-button>
          <el-button :plain="true" type="danger">危险按钮</el-button>
          <el-button :plain="true" type="info">信息按钮</el-button>
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="primary" icon="share"></el-button>
          <el-button type="primary" icon="delete"></el-button>
          <el-button type="primary" icon="search">搜索</el-button>
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button-group>
            <el-button type="primary" icon="arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
          </el-button-group>
          <el-button type="primary" :loading="true">加载中</el-button>
          <el-button type="primary" size="large">大型按钮</el-button>
          <el-button type="primary">正常按钮</el-button>
          <el-button type="primary" size="small">小型按钮</el-button>
          <el-button type="primary" size="mini">超小按钮</el-button>
        </el-card>
      </el-col>
    </el-row>
    <h3>表单</h3>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-card>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-input v-model="input" placeholder="请输入内容" :disabled="true"></el-input>
          <el-input placeholder="请选择日期" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
          <el-input placeholder="请输入内容" v-model="input3"><template slot="prepend">Http://
</template>

</el-input>
          <el-input placeholder="请输入内容" v-model="input4"><template slot="append">
   .com
</template>

</el-input>
          <el-input placeholder="请输入内容" v-model="input5">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
          </el-input>
          <el-input
    size="large"
    placeholder="请输入内容"
    v-model="input6">
  </el-input>
  <el-input
    placeholder="请输入内容"
    v-model="input7">
  </el-input>
  <el-input
    size="small"
    placeholder="请输入内容"
    v-model="input8">
  </el-input>
  <el-input
    size="mini"
    placeholder="请输入内容"
    v-model="input9">
  </el-input>
  <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
  <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
  <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
  <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
  <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
  <el-radio-group v-model="radio3">
    <el-radio-button label="上海"></el-radio-button>
    <el-radio-button :disabled="true" label="北京"></el-radio-button>
    <el-radio-button label="广州"></el-radio-button>
    <el-radio-button label="深圳"></el-radio-button>
  </el-radio-group>
  <el-checkbox v-model="checked">备选项</el-checkbox>
  <el-checkbox v-model="checked1" disabled>备选项</el-checkbox>
   <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'ui',
    data() {
      return {
        msg: 'ui',
        input: '',
        input2: '',
        textarea: '',
        textarea2: '',
        input3: '',
        input4: '',
        input5: '',
        select: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        radio: "1",
        radio1: '选中且禁用',
        radio2: '3',
        radio3: '上海',
        checked: true,
        checked1: false,
        checkList: ['选中且禁用','复选框 A'],
      }
    },
    created() {
    },
    methods: {
      handleIconClick: function() {

      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row,
  .el-button,
  .el-input,
  .el-textarea,
  .el-radio,
  .el-radio-group,
  .el-checkbox,
  .el-checkbox-group {
    margin-bottom: 1rem
  }
</style>
