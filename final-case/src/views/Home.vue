<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld :msg='msg' />
    </div>
    <BookOperation class="rightHome" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BookOperation from "@/components/BookOperation";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Kodluyoruz Vue.js bootcamp final case."
    }
  },
  components: {
    HelloWorld,
    BookOperation
  }
};
</script>


<style scoped>

.home {
  float:left;
  clear: left;
  height: 100vh;
  width: calc(100% - 1200px);
  padding-top: 150px;
  text-align: center;
  background-color: #eee;
}

.rightHome {
  float: right;
  clear: right;
  width: 1200px;
  height: 100vh;
}


@media only screen and (max-width: 1400px) {
  .home {
    display: none;
  }

  .rightHome {
    width: 100%;
  }
}

</style>
