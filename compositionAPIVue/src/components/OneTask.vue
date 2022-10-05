<template>
<div>
  <li
    class="
      list-group-item
      d-flex
      flex-column
      align-items-center
      justify-content-between
     text-danger
    "
    :class="{'bg-success text-white': todo.completed}"
  >
        <div v-show="showInput">
        <button type="button" class="btn btn-success" @click="saveTitle(todo)">
          save
        </button>
        <input type="text" class="form-control my-2" v-model="editTodoTitle" />
      </div>
      <p> {{todo.title}} </p>
   

    <div class="text-dark">
      <i class="fa fa-edit p-3"  v-if="!todo.completed" @click="editTodo"></i>
      <i class="fa fa-times p-3" @click="deleteTodo(todo, todos)" ></i>
      <i class="fa fa-check p-3" v-if="!todo.completed" @click="completedTodo(todo)"></i>
    </div>
  </li>

</div>
</template>

<script>
import {onMounted, onUpdated, ref} from "vue"

export default {
    props:["todo", "todos"],
    setup(props){
      console.log("setup")    
      console.log(props.todo)

      const editTodoTitle = ref("")
      let showInput = ref(false)

      const deleteTodo = (todo, todos)=>{
        console.log("delete one wit id " + todo.id)     
        let index = todos.findIndex(task => task.id == todo.id)
        todos.splice(index,1)
      }
      const completedTodo = (todo)=>{
        console.log("completed task with id " + todo.id)
        todo.completed = true
        console.log(todo)

      }
      const editTodo = ()=>{
        console.log("edit todo with id ")
        showInput.value = !showInput.value     
        console.log(showInput.value)
      }
      const saveTitle = (todo)=>{
        console.log("save todo title with id " + todo.id)
        todo.title = editTodoTitle.value
        showInput.value = false
        console.log(todo)
      }

      return {deleteTodo, completedTodo, editTodo, showInput, editTodoTitle, saveTitle}
    }
};
</script>

<style>
i{
    cursor: pointer;
}

</style>