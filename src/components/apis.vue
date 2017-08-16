<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(api,index) of apis" :key="index">
        <label>
          {{api.dec}}
          <input type="text" readonly v-model="api.url">
          <button @click="test_api(api.url)">测试</button>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'api_test',
  data() {
    return {
      msg: 'API列表',
      apis: [
        { url: 'http://localhost:3005/login', dec: '登录' },
        { url: 'http://localhost:3005/login', dec: '注册' },
        { url: 'http://localhost:3005/user/id', dec: '用户id' },
        { url: 'http://localhost:3005/price', dec: '价格' },
      ],
    }
  },
  created() { },
  methods: {
    test_api(url) {
      var that = this;
      axios.get(url)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

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
  margin: 20px 0;
}

a {
  color: #42b983;
}

input {
  display: inline-block;
  min-width: 200px;
}
</style>
