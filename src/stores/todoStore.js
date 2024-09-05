import {defineStore} from 'pinia'
import { v4 as uuidv4 } from 'uuid';
import {ref} from 'vue'
import axios from 'axios';



export const useTodoStore = defineStore('todo',{
    state: () => ({
        todos: []
    }),
    actions: {
        addTodo(text){
            this.todos.push({id: uuidv4(), text, completed: false})
        },
        toggleTodo(index){
            const todo = this.todos.find((todo) => todo.id == index) 
            todo && (todo.completed =!todo.completed)
        },
        removeTodo(index){
            const todo = this.todos.findIndex((todo) => todo.id == index);
            if(todo !== -1) this.todos.splice(todo, 1)
        },
        async fetchTodos() {
        try {
           const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
           this.todos = response.data
        } catch (error) {
           console.error(error);
        }
       }
    }

    // const todos = ref([])

    // const fetchTodos = async () => {
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    //         todos.value = response.data
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const addTodo = (text) => {
    //     todos.value.push({id: uuidv4(), text, completed: false})

    // }

    // const toggleTodo = (index) => {
    //    const todo = todos.value.find((todo) => todo.id == index) 
    //    todo && (todo.completed =!todo.completed)
    // //    if(todo){
    // //     todo.completed =!todo.completed;  
    // //    }
    // }

    // const removeTodo = (index) => {
    //     const todo = todos.value.findIndex((todo) => todo.id == index);
    //     if(todo !== -1) todos.value.splice(todo, 1)
        
    // }
    // fetchTodos()
    // return {
    //     todos,
    //     addTodo,
    //     toggleTodo,
    //     removeTodo,
    //     fetchTodos
    // }
})