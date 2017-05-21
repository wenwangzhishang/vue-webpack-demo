<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="link of links">
        <template>
          <router-link :to="link.path">
            {{link.alt}}
          </router-link>
        </template>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'
// Vue.prototype.$axios = axios
  export default {
    name: 'openapi',
    data() {
      return {
        title:"eddy’work",
        links:[
          {
            path:'ui',
            alt:"前往element-ui组件",
          },
          {
            path:'apis',
            alt:"前往api接口列表",
          },
          {
            path:'editor',
            alt:"前往editor",
          },
          {
            path:'note',
            alt:"前往note",
          }
        ]
      }
    },
    created() {

    },
    methods: {

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
