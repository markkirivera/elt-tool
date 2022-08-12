<template>
  <div class="home">
    <div class="container">
      <h2>Lyrify</h2>
      <h3>Find lyrics. Fast.</h3>
      <input
        @keydown.enter="getSongs"
        v-model="songInput"
        type="text"
        class="search"
        placeholder="Search song lyrics"
      />

      <div v-if="results.length" class="results">
        <p>Results:</p>
        <ul>
          <li v-for="song in results" :key="song.id">
            {{ song.title }} - {{ song.artist }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
import { ref } from '@vue/reactivity'
import searchSongs from '../composables/searchSongs'

export default {
  name: 'Home',
  setup() {

    const err = ref('')
    const songInput = ref('');
    const results = ref([
      { id: 0, title: 'Sofia', artist: 'Clairo' },
      { id: 1, title: 'Frankenstein', artist: 'Claire Rosinkranz' },
      { id: 2, title: 'Back In My Life', artist: 'Carlie Hanson' },
      { id: 3, title: 'Hope Is A Heartache', artist: 'Leon' },
      { id: 4, title: 'Dreaming, Backwards', artist: 'Ella Vos' }
    ])

    function getSongs() {

      const { songs, error, load } = searchSongs(songInput.value)
      load()

      // results.value = songs
      // err.value = error

      // console.log('Results for: ' + songInput.value)
      // console.log(results.value)
    }

    return { songInput, results, getSongs }
  }
}
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}
body {
  background-color: #191414;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  text-transform: uppercase;
  font-size: 30px;
  color: #1db954;
  letter-spacing: 6px;
  font-weight: bold;
}
h3 {
  text-align: center;
  color: #1db954;
  font-weight: normal;
}
p {
  text-align: left;
  color: #1db954;
}
.search {
  width: 60%;
  outline: none;
  font-size: 16px;
  margin-top: 2em;
  padding: 8px 1em;
  border-radius: 42px;
  border: 1px solid #191414;
}
.results {
  width: 65%;
  margin: 3em auto;
}
.results ul {
  background-color: #666363;
  border-radius: 8px;
  list-style-type: none;
  padding: 1em 0;
}
.results li {
  color: #c8c6c6;
  cursor: pointer;
  margin-bottom: 12px;
}
.results li:hover {
  color: #1db954;
}
</style>
