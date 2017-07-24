<template>
  <div class="videos">
    <h1>{{title}}</h1>
    <video width="800px" height="600px" src="//az29176.vo.msecnd.net/videocontent/LakePowell_Thunderstorms_nimiaRM_4471864_062_1080_HD_ZH-CN.mp4" muted autoplay loop></video>
    <div class="left">
      <video src="https://media4.giphy.com/media/l0IxZMlSa0oYvd9MQ/giphy.mp4" muted autoplay loop></video>
      <h2>video</h2>
    </div>
    <div class="right">
      <img src="https://media2.giphy.com/media/l0IxZMlSa0oYvd9MQ/giphy.gif" alt="">
      <h2>gif</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videos',
    data() {
      return {
        title: 'video feture'
      }
    }
  }
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .left,
  .right {
    float: left;
    margin: 20px;
    padding: 20px;
  }
</style>
