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
      :class="{ 'bg-success text-white': todo.completed }"
      :key="todo.id"
      
    >
      <div v-show="showInput">
        <button type="button" class="btn btn-success" @click="saveTitle(todo)">
          save
        </button>
        <input type="text" class="form-control my-2" v-model="editTodoTitle" />
      </div>
      <p>{{ todo.title }}</p>
      <div class="text-dark">
        <i
          class="fa fa-edit p-3"
          v-if="!todo.completed"
          @click="editTodo(todo)"
        ></i>
        <i class="fa fa-times p-3" @click="deleteTodo(todo, todos)"></i>
        <i
          class="fa fa-check p-3"
          v-if="!todo.completed"
          @click="completedTodo(todo)"
        ></i>
      </div>
    </li>
  </div>
</template>

<script>

export default {
  props: ["todo", "todos"],
  data() {
    return {
      showInput: false,
      editTodoTitle: "",
    };
  },
  methods: {
    saveTitle(todo) {
      console.log("save todo with id " + todo.id);
      console.log(todo)
      this.todo.title = this.editTodoTitle;
      console.log(this.todo)
      this.showInput = !this.showInput
    },
    deleteTodo(todo, todos) {
      console.log("delete one wit id " + todo.id);
      let index = todos.findIndex(task => task.id == todo.id)
      todos.splice(index,1)

    },
    completedTodo(todo) {
      console.log("completed task with id " + todo.id);
      this.todo.completed = true;
      console.log(this.todo);
    },
    editTodo(todo) {
      console.log("edit todo with id " + todo.id);
      this.showInput = !this.showInput;
    },
  },
};
</script>

<style>
i {
  cursor: pointer;
}
</style>