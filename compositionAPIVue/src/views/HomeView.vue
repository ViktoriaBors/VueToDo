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
                            <input type="text" class="form-control my-2" id="task" placeholder="To do ..." > 
                            <button class="btn btn-primary my-2">Add task </button>
                        </div>
                        <hr>
                        <h4 class="p-3 fw-bold">Your task list </h4>
                        <div>
                            <ul class="list-group p-2">
                              <div v-for="todo in todos" :key="todo.id">
                              <OneTask :todo="todo"></OneTask>
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

export default {
  name: 'HomeView',
  components: {
    OneTask,
  },
  setup(){
    console.log("setup Home")

    const {todos, error, loadData} = getToDos()

  return {todos, error, loadData}
  }
}

//https://bbbootstrap.com/snippets/bootstrap-5-bootstrap-5-todo-list-add-delete-search-56893384
</script>
