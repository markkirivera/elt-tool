<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
  name: 'Home',
  props: {
    showAddTask: Boolean
  },
  components: {
    Tasks,
    AddTask
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    async addTask (task) {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      console.log(data)

      // this.tasks.push(data)
      this.tasks = [...this.tasks, data]
    },
    async deleteTask (id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })
      res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task.')
    },
    async toggleReminder (id) {
      const taskToggle = await this.fetchTask(id)
      const updatedTask = { ...taskToggle, reminder: !taskToggle.reminder }
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })
      const data = await res.json()
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
    },
    async fetchTasks () {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data
    },
    async fetchTask (id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()

      return data
    }
  },
  async created () {
    this.tasks = await this.fetchTasks()
  }
}
</script>
