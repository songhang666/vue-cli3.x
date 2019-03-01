<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="突突突突突突" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    this.axios
      .get("./api/login.json")
      .then(res => {
        console.log(res, "success");
      })
      .catch(err => {
        console.log(err, "error");
      });
  }
};
</script>
