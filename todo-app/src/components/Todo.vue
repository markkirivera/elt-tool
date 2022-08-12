<template>
  <div class="hello">
    <h1>Todo List</h1>

    <h3>You Have {{ countTodos }} Todos</h3>
    <input
      @keyup.enter="addTodo"
      v-model="title"
      type="text"
      placeholder="Add ToDo"
    />

    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ todo.title }}
        <span @click="deleteTodo(index)"> X </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data() {
    return {
      title: '',
      todos: [
        { id: 0, title: 'Clean rug' },
        { id: 1, title: 'Do laundry' },
        { id: 2, title: 'Cook dinner' }
      ],
      swearWords: ['butt hair', 'tite', 'burat']
    }
  },
  methods: {
    addTodo() {
      let newTodo = {
        id: Date.now(),
        title: this.title
      }

      if (!this.swearWords.includes(this.title)) {
        this.todos.push(newTodo)
        this.title = ''
      } else {
		  alert('no swearing!')
	  }

      console.log(this.title)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    }
  },
  computed: {
    countTodos() {
      return this.todos.length
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
input {
  margin: 10px auto;
  padding: 8px 10px;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 150px;
  margin: 0 auto;
}
li {
  display: block;
  margin: 8px auto;
}
li span {
  float: right;
  margin-left: 10px;
  cursor: pointer;
}
</style>
