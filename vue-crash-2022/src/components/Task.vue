<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>

<style scoped>
.fas {
  display: none;
  color: #e35555;
  position: absolute;
  right: 15px;
  bottom: 25px;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 5px solid #f4f4f4;
}
.task.reminder {
  border-left: 5px solid #7d7cb5;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task:hover .fas {
  display: block;
}
</style>
