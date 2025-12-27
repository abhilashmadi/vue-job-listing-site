<script setup>
import { ref, onMounted } from 'vue'

const BASE_URL = 'https://dummyjson.com';

const todos = ref([]);
const loadingTodos = ref(false)
const todosError = ref(null)

const newTask = ref("")
const addingTodo = ref(false);
const addingTodoError = ref(null)

const fetchTodos = async () => {
  try {
    loadingTodos.value = true;
    addingTodoError.value = null;

    const res = await fetch(`${BASE_URL}/todos`)
    if (!res.ok) throw new Error('Failed to fetch todos!');

    const data = await res.json();
    todos.value = data.todos;
  } catch (error) {
    todosError.value = error.message || error;
  } finally {
    loadingTodos.value = false
  }
}

const addTodo = async () => {
  try {
    const payload = {
      userId: 1,
      todo: newTask.value,
      completed: false,
    }
    addingTodo.value = true;
    addingTodoError.value = null;

    const res = await fetch(`${BASE_URL}/todos/add`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error("Failed to add new todo");
    const newTodo = await res.json();
    todos.value = [newTodo, ...todos.value];
    newTask.value = ""

  } catch (error) {
    addingTodoError.value = error.message;
  } finally {
    addingTodo.value = false;
  }
}

const toggleTodo = async ({ completed, id }) => {
  try {
    const res = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    })

    if (!res.ok) return;
    const data = await res.json();
    todos.value = todos.value.map((t) => t.id === id ? { ...t, completed: data.completed } : t)
  } catch (error) {
    console.log(error);
  }
}

onMounted(fetchTodos);
</script>

<template>
  <h1>Todo Application</h1>

  <form @submit.prevent="addTodo">
    <input v-model="newTask" type="text" :disabled="addingTodo"
      :placeholder="addingTodo ? 'Adding Loading...' : 'Enter task here'" />
    <button type="submit" :disabled="addingTodo">{{ addingTodo ? "Adding task..." : "Add task" }}</button>
  </form>

  <div v-if="loadingTodos">Loading...</div>
  <div v-if="todosError" class="text-red-500">{{ todosError }}</div>
  <div v-if="addingTodoError" class="text-red-500">{{ addingTodoError }}</div>

  <ul>
    <li v-for="task in todos" :key="task.id" class="space-x-2">
      <span>{{ task.id }}-</span>
      <span>{{ task.todo }}</span>
      <span>
        <button @click="toggleTodo(task)">
          {{ task.completed ? "✅" : "❌" }}
        </button>
      </span>
    </li>
  </ul>
</template>
