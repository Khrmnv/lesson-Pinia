<template>
    <h1>Todo List</h1>
    <input type="text" v-model="text" @keyup.enter="addTodo" placeholder="Add a new todo">
    <div >
        <ul v-if="todos.length">
            <li v-for="todo in todos" :key="todo.id">
                <p>{{ todo.title }}</p>
                <p>{{ todo.completed }}</p>
          
            </li>
        </ul>
        <div v-else>Загрузка</div>
        <button @click="loadTodos">Call</button>
    </div>
 
    <!-- <ul>
        div
        <li v-for="todo in todos" :key="todo.id">
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none'}">{{ todo.text }}</span>
            <button @click="removeTodo(todo.id)">Remove</button>
            <button @click="toggleTodo(todo.id)">Toggle</button>
        </li> -->
    <!-- </ul> -->

</template>

<script setup>
    import {ref, onMounted, watch} from 'vue'
    import {useTodoStore} from '../stores/todoStore.js'

    const todoStore = useTodoStore()
    const text = ref('')

    const addTodo = () => {
        if(text.value.trim()) {
            todoStore.addTodo(text.value)
            text.value = ''
        }
    }
    
    const toggleTodo = (index) => {
        todoStore.toggleTodo(index)
    }

    const removeTodo = (index) => {
        todoStore.removeTodo(index)
    }
    const todos = ref([])

    const loadTodos = async () => {
        await todoStore.fetchTodos()
        todos.value = todoStore.todos
    }
 
</script>

<style>

</style>