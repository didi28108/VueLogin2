<template>
  <div class="login">
    <h3>Sign In</h3>
    <el-input type="text" v-model="email" placeholder="Email" clearable></el-input>
    <el-input type="password" v-model="password" placeholder="Password" clearable></el-input>
    <el-button type="primary" v-on:click="signIn">Connection</el-button>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {Input, Button} from 'element-ui'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            localStorage.setItem('token', 'ImLogin')
            this.$router.push('/dashboard')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    },
    components:{
      'el-input': Input,
      'el-button': Button,
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  @import url("element-ui/lib/theme-chalk/index.css");
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>