<template>
<el-row :gutter="10">
  <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="5">
    <el-card class="box-card">
          <div>dick</div>
    </el-card>
  </el-col>
  <el-col :xs="4" :sm="6" :md="5" :lg="7" :xl="11">
    <el-card class="box-card">
          <div>bitch</div>
    </el-card>
  </el-col>
  <el-col :xs="4" :sm="6" :md="5" :lg="7" :xl="11">
    <el-card class="box-card">
          <div>puss</div>
    </el-card>
  </el-col>
  <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="5">
    <el-card class="box-card">
          <div>slot</div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import axios from "axios";
import { Row, Col, Card } from "element-ui";
export default {
  name: "dashboard",
  data: function() {
    return {
      humidity: "",
      temperture: "",
      soild1humid1: "",
      soild1humid2: "",
      ph: "",
      waterLevelTank1: "",
      waterLevelTank2: ""
    };
  },
  created: function() {
    this.da = "loading";
    var self = this;
    self.getData();
    setInterval(() => {
      self.getData();
    }, 10000);
  },
  methods: {
    getData: function() {
      var self = this;
      axios
        .get("http://localhost:5438/data")
        .then(resp => {
          self.humidity = resp.data.humidity;
          self.temperture = resp.data.temperture;
          self.soild1humid1 = resp.data.soild1humid1;
          self.soild1humid2 = resp.data.soild1humid1;
          self.ph = resp.data.ph;
          self.waterLevelTank1 = resp.data.waterLevelTank1;
          self.waterLevelTank2 = resp.data.waterLevelTank2;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    "el-row": Row,
    "el-col": Col,
    "el-card": Card
  }
};
</script>
<style scoped>
@import url("element-ui/lib/theme-chalk/index.css");

.box-card {
  width: 240 px;
}
</style>

