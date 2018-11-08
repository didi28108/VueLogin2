<template>
    <div class='container' id='dashboard'>
        <div class='row'>
            <div class="col-sm">
                <div class="card">
                    <h5 class="card-header">濕度</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ humidity }}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card">
                    <h5 class="card-header">溫度</h5>
                    <div class="card-body">
                        <h5 class="card-title">{{ temperture }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "dashboard",
  data: function() {
    return {
      humidity: "",
      temperture: ""
    }
  },
  created: function() {
    this.da = "loading";
    var self = this;
    self.getData();
    setInterval(() => {
      self.getData();
    }, 1000);
  },
  methods: {
    getData: function() {
      var self = this;
      axios
        .get("http://localhost:5438/data")
        .then(resp => {
          self.humidity = resp.data.humidity;
          self.temperture = resp.data.temperture;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

