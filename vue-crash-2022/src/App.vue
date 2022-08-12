<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
      title="Tasks Manager"
    />
    <router-view :showAddTask="showAddTask"> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask () {
      this.showAddTask = !this.showAddTask
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 550px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid #7d7cb5;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #7d7cb5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  background: rgb(100 99 143);
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
form {
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
</style>
