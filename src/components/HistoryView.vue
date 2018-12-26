<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'historyView',
  data () {
    return {
      msg: 'HistoryView',
      tableData: [],
    }
  },
  created: function() {
    this.da = "loading";
    let self = this;
    self.getData();
    setInterval(() => {
      self.getData();
    }, 100000);
  },
  methods: {
    getData: function() {
      var self = this;
      axios
        .get("https://vue-dashboard-login.firebaseio.com/.json?print=pretty")
        .then(resp => {
          self.msg = resp;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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