<template>
  <div>
      <h2>学校名称：{{SchooName}}</h2>
      <h2>学校地址：{{address}}</h2>
      <Student></Student>
  </div>
</template>

<script>
import Student from "./Student.vue"

export default {
    name:'School',
    data() {
        return {
            SchooName: "不知道",
            address: "还是不知道",
        }
    },
    components: {
        Student
    }
}
</script>

<style>

</style>