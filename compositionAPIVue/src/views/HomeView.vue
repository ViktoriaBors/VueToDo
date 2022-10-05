<template>
  <div>
  <h1>Home</h1>
  <div class="section mt-5" id="container">
    <div class="container mb-4">
        <div class="row justify-content-md-center">
            <div class="col-12 col-md-8">
                <div id="main" class="card">
                    <div class="card-body">
                        <div class="py-3 d-flex flex-column justify-content-between">
                            <h4 for="task" class="p-2 fw-bold">New Task</h4> 
                            <input type="text" class="form-control my-2" id="task" placeholder="To do ..." v-model="newTodoTitle"> 
                            <button class="btn btn-primary my-2" @click="addTodo">Add task </button>
                        </div>
                        <hr>
                        <h4 class="p-3 fw-bold">Your task list </h4>
                        <div>
                            <ul class="list-group p-2">
                              <div v-for="todo in todos" :key="todo.id">
                              <OneTask :todo="todo" :todos="todos"></OneTask>
                              </div>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import OneTask from "../components/OneTask.vue"
import getToDos from "../composables/getToDos.js"

import {onBeforeUpdate,onUpdated, ref, shallowRef,} from "vue"

export default {
  name: 'HomeView',
  components: {
    OneTask,
  },
  setup(){
    console.log("setup Home")
    const {todos, error, loadData} = getToDos()

    let newTodoTitle = ref("")
    const addTodo = ()=>{
      console.log("add")
      todos.value.push({title: newTodoTitle.value , completed:false, id:Math.random()*10})
      console.log(todos.value)// new task is added in the array
      newTodoTitle.value = ""
    }
     
  return {todos, error, loadData, newTodoTitle, addTodo}
  }
}

//https://bbbootstrap.com/snippets/bootstrap-5-bootstrap-5-todo-list-add-delete-search-56893384
</script>
