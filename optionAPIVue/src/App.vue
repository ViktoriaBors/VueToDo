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
                  <input
                    type="text"
                    class="form-control my-2"
                    id="task"
                    placeholder="To do ..."
                  />
                  <button class="btn btn-primary my-2">Add task</button>
                </div>
                <hr />
                <h4 class="p-3 fw-bold">Your task list</h4>
                <div>
                  <!--
                  <ul class="list-group p-2">
                    <div v-for="todo in todos" :key="todo.id">
                      <OneTask :todo="todo"></OneTask>
                    </div>
                  </ul>
                  -->
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
// import OneTask from "../components/OneTask.vue";
import {shallowRef, ref} from "vue"

export default {
  name: "App",
  components: {
    //OneTask,
  },
  data(){
    return {
      todos : null,
      error : null,
      show: false
    }
  },
  methods: {

  },
  async mounted(){
      let resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log("load data");
      if (!resp.ok) {
        throw new Error("no data found");
      }
     let data = await resp.json();

      this.todos= shallowRef(data.splice(0,5))
      console.log(this.todos, data);

      this.show = true
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
