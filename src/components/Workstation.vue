<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <div class="block">
        <el-card :body-style="{ padding: '0px' } " class="webcam">
            <img src="@/assets/logo.png" class="image">
            <div style="padding: 14px;">
                <span>實時監控</span>
                <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                </div>
            </div>
        </el-card>
      </div>
      <div>
        <el-card  class="block">
          <div slot="header" class="clearfix">
            <span>機械臂控制</span>
          </div>
          <div>
            <span class="demonstration">x 軸</span>
            <el-slider v-model="xAxisStep" show-input max="5000"></el-slider>
          </div>
          <div>
            <span class="demonstration">y 軸</span>
            <el-slider v-model="yAxisStep" show-input max="5000"></el-slider>
          </div>
          <div>
            <span class="demonstration">z 軸</span>
            <el-slider v-model="zAxisStep" show-input max="5000"></el-slider>
          </div>
          <el-button class ="button" type="primary" v-on:click="null">執行</el-button>
        </el-card>
      </div>
      <div>
        <el-card  class="block">
          <div slot="header" class="clearfix">
            <span>水與肥料</span>
          </div>
          <div>
            <span class="demonstration">澆水</span>
            <el-slider v-model="Waterpump" :step="1" show-stops max="10"></el-slider>
          </div>
          <div>
            <span class="demonstration">施肥</span>
            <el-slider v-model="Fertillizerpump" :step="1" show-stops max="10"></el-slider>
          </div>
          <el-button class ="button" type="primary" v-on:click="null">執行</el-button>
        </el-card>
      </div>
      <div>
        <el-card  class="block">
          <div slot="header" class="clearfix">
            <span>LED光色</span>
          </div>
            <el-switch
                v-model="LEDR"
                active-color="#F56C6C"
                inactive-color="#909399">
            </el-switch>
            <el-switch
                v-model="LEDG"
                active-color="#67C23A"
                inactive-color="#909399">
            </el-switch>
            <el-switch
                v-model="LEDB"
                active-color="#409EFF"
                inactive-color="#909399">
            </el-switch>
          <el-button class ="button" type="primary" v-on:click="null">執行</el-button>
        </el-card>  
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
import { Row, Col, Card, Slider, Button } from "element-ui";
export default {
  name: "dashboard",
  data: function() {
    return {
      xAxisStep: "",
      yAxisStep: "",
      zAxisStep: "",
      LEDR: false,
      LEDG: false,
      LEDB: false,
      Waterpump: "",
      Fertillizerpump: "",
      currentDate: ""
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
    "el-card": Card,
    "el-slider": Slider,
    "el-button": Button
  }
};
</script>

<style scoped>
@import url("element-ui/lib/theme-chalk/index.css");
.webcam {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  width: 600px;
}
.switch {
    padding: 10px;
}

.block {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
</style>

