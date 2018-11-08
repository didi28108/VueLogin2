<template>
    <div class='container' id='dashboard'>
        <div class='row'>
            <div class="col-sm-3">
                <div class="card">
                    <h5 class="card-header">濕度</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ humidity }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <h5 class="card-header">溫度</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ temperture }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <h5 class="card-header">土壤濕度1</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ soild1humid1 }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <h5 class="card-header">土壤濕度2</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ soild1humid2 }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <h5 class="card-header">PH值</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ ph }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <h5 class="card-header">水位1</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ waterLevelTank1 }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <h5 class="card-header">水位2</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ waterLevelTank2 }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
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
  }
};
</script>

