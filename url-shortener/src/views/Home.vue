<template>
  <div class="home">
    <h1>URL Shortener</h1>
    <h3>Powered by <span>T.LY</span></h3>
    <searchInput />
  </div>
</template>

<script>
import searchInput from '../components/searchInput.vue'

export default {
  name: 'Home',
  components: { searchInput }
}
</script>

<style>
body {
  background-color: #000000;
}
.container {
	    max-width: 1200px;
}
h1 {
  color: #e3e3e3;
}
h3 {
  color: #e3e3e3;
}
</style>
