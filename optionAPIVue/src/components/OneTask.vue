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

    {{todo.title}}

    <div class="text-dark">
      <i class="fa fa-edit p-3" v-if="!todo.completed"></i>
      <i class="fa fa-times p-3"></i>
      <i class="fa fa-check p-3" v-if="!todo.completed"></i>
    </div>
  </li>

</div>
</template>

<script>
export default {
    props:["todo"]
};
</script>

<style>
i{
    cursor: pointer;
}

</style>