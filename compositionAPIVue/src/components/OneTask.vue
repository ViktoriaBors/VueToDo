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
  <input type="text" v-show="showInput" class="form-control my-2" v-model="editTodoTitle">
    {{todo.title}}

    <div class="text-dark">
      <i class="fa fa-edit p-3"  v-if="!todo.completed" @click="editTodo(todo)"></i>
      <i class="fa fa-times p-3" @click="deleteTodo(todo)" ></i>
      <i class="fa fa-check p-3" v-if="!todo.completed" @click="completedTodo(todo)"></i>
    </div>
  </li>

</div>
</template>

<script>
import {onMounted, onUpdated, ref} from "vue"

export default {
    props:["todo"],
    setup(props){
      console.log("setup")    
      console.log(props.todo)

      const editTodoTitle = ref("")
      let showInput = true

      const deleteTodo = (todo)=>{
        console.log("delete one wit id " + todo.id)        
      }
      const completedTodo = (todo)=>{
        console.log("completed task with id " + todo.id)
        todo.completed = true
        console.log(todo)
        return todo
      }
      const editTodo = (todo)=>{
        console.log("edit todo with id " + todo.id)
        showInput = !showInput
        todo.title = editTodoTitle.value
        return showInput
      }


      return {deleteTodo, completedTodo, editTodo, showInput, editTodoTitle}
    }
};
</script>

<style>
i{
    cursor: pointer;
}

</style>