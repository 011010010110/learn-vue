<template>
  <div>
      <h3>学生名字：{{StudentName}}</h3>
      <h3>年纪：{{age}}</h3>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            StudentName: "刘岳",
            age: 23
        }
    },
}
</script>

<style>

</style>