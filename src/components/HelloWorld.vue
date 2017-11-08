<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>
import { login } from '../config/api.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.get()
  },
  methods: {
    async get () {
      try {
        let res = await login()
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font: 30px;
h1,
h2 {
  font-weight: normal;
  font-size: $font;
}

ul {
  list-style-type: none;
  padding: 0;
}
$margin: 10px;
$color: #42b983;
li {
  display: inline-block;
  margin: 0 $margin;
}

a {
  color: $color;
}
</style>
