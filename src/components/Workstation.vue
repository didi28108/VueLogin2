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
          <div slot="header">
            <span>機械臂控制</span>
          </div>
          <div>
            <span>x 軸</span>
            <el-slider v-model="xAxisStep" show-input max="5000"></el-slider>
          </div>
          <div>
            <span>y 軸</span>
            <el-slider v-model="yAxisStep" show-input max="5000"></el-slider>
          </div>
          <div>
            <span>z 軸</span>
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
            <span>澆水</span>
            <el-slider v-model="waterpump" :step="1" show-stops max="10"></el-slider>
          </div>
          <div>
            <span>施肥</span>
            <el-slider v-model="fertillizerpump" :step="1" show-stops max="10"></el-slider>
          </div>
          <el-button class ="button" type="primary" v-on:click="null">執行</el-button>
        </el-card>
      </div>
      <div>
        <el-card  class="block">
          <div slot="header" class="clearfix">
            <span>LED光色</span>
          </div>
          <el-color-picker v-model="LEDColor"  :predefine="predefineColors"></el-color-picker>
          <el-button class ="button" type="primary" v-on:click="null">執行</el-button>
        </el-card>  
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
import { Row, Col, Card, Slider, Button, ColorPicker } from "element-ui";
export default {
  name: "dashboard",
  data: function() {
    return {
      xAxisStep: "",
      yAxisStep: "",
      zAxisStep: "",
      LEDColor: '#409EFF',
      predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
        ],
      waterpump: "",
      fertillizerpump: "",
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
    "el-button": Button,
    "el-color-picker": ColorPicker
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

