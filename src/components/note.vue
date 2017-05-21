<template>
  <el-row>
    <el-col :span="12">
      <el-card class="input_area">
        <el-button-group>
          <el-button type="default" @click="cu">加粗</el-button>
          <el-button type="default" @click="xie">斜体</el-button>
          <el-button @click="a">插入连接</el-button>
        </el-button-group>
        <textarea placeholder="请输入内容" v-model="textarea2"></textarea>
        <!--<h1>h1</h1>
    <p>p标签</p>
    <ol>
    <li>有序</li><li>有序</li>
    </ol>
    <ul>
    <li>无序</li><li>无序</li>
    </ul>
    <hr></hr>
    <a href="javascript:;">a标签</a>
    <address>这是一个地址</address>
    <b>粗体</b>
    <i>斜体</i>
    <sup>上</sup>
    <sub>下</sub>
    <del>消除</del>
    <ins>底线</ins>
    <code>var a=0;</code>
    <pre>文本预处理</pre>
    <q>短引用</q>
    <blockquote>这是一段长引用</blockquote>
    <bdo dir="rtl">一二三</bdo>
    <bdo dir="ltr">一二三</bdo>
    <abbr title="这是我名字的缩写">zxk</abbr>
    <acronym title="zhang xiaokang">zxk</acronym>
    <img src="http://s1.houdao.com/11884/13/02/23/817_22319250_22c9bca81e1f9c4.jpg">-->


      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="output_area">
        <iframe :srcdoc="textarea2" seamless sandbox="" frameborder="0" width="100%" height="500px" marginwidth="10px" marginheight="10px" scrolling="auto">ie浏览器不支持此效果</iframe>
      </el-card>
      <el-button @click="save">保存</el-button>
    </el-col>

  </el-row>
</template>

<script>
  export default {
    name: 'note',
    data() {
      return {
        textarea2: ""
      }
    },
    methods: {
      save() {
        window.alert(this.textarea2)
      },
      cu() {

      },
      xie() {

      },
      a() {

      }
    }
  }
</script>

<style lang="">
  .input_area,
  .output_area {
    height: 30rem
  }

  .input_area textarea {
    width: 100%;
    height: 400px;
    overflow: auto;
  }
</style>
