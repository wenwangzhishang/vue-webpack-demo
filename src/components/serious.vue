<template lang="pug">
  div
    el-row
      el-col
       h1 {{msg}}
    el-row(:gutter="20")
      el-col(:span=6,v-for="(video,index) of videos",:key="index")
        el-card
          h3 {{video.name}}
          p <label>from:</label>{{video.from}}
          p <label>ref:</label>{{video.ref}}
    p 纯文本当然也可以包括 <strong>HTML</strong> 内容。
  </div>

</template>
<script>
export default {
  name: 'serious',
  data() {
    return {
      msg: '正经网',
      videos: [
        {
          name: '权利的游戏',
          ref: '腾讯',
          from: '冰与火之歌'
        },
        {
          name: '权利的游戏',
          ref: '腾讯',
          from: '冰与火之歌'
        },
        {
          name: '权利的游戏',
          ref: '腾讯',
          from: '冰与火之歌'
        },
        {
          name: '权利的游戏',
          ref: '腾讯',
          from: '冰与火之歌'
        },
      ]
    }
  },
  mounted() {
    for (var i = 0; i < 10; i++) {
      this.videos.push({
        name: '权利的游戏',
        ref: '腾讯',
        from: '冰与火之歌'
      })
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.el-card {
  margin-bottom: 20px;
}
</style>

