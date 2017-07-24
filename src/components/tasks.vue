<template>
  <el-row>
    <el-col>
      <el-card>
        <p>{{msg}}</p>
      </el-card>
      <br>
      <br>
      <ol>
        <li>一部电影</li>
        <li>5首歌曲</li>
        <li>3顿饭</li>
        <li>1 游戏</li>
      </ol>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'tasks',
  data() {
    return {
      msg: '每日任务'
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style>
ol>li {
  padding: 10px 0;
}
</style>

