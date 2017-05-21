<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>网易</h2>
    <ul>
      <li></li>
    </ul>
    <h2>今日头条</h2>

  </div>
</template>

<script>
import axios from 'axios'
// Vue.prototype.$axios = axios
  export default {
    name: 'api_test',
    data() {
      return {
        msg: 'openAPI',
        api: {
          wangyi: 'http://wangyi.butterfly.mopaasapp.com/news/api',
          fish: {
            area: 'http://www.fishesdata.com/api/kog/search',
            params: {
              key: null
            }
          }
        }
      }
    },
    created() {
      this.getinfo_fish()
    },
    methods: {
      getinfo_fish() {
        var that = this;
        axios({
          method: 'get',
          url: that.api.fish.area,
          params: {
            key: 'hooer'
          }
        }).then(function(res) {
          console.log(res.data)
        })
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
