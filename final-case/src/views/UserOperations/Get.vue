<template>
  <div>
    <Container class="col-lg-6 col-sm-8">
      <div class="getUserForm">
        <div class="formHead">
          <h2 class="mb-3">Get from User</h2>
          <router-link to="/">
            return home page
          </router-link>
        </div>
        <select required class="custom-select mb-3" v-model="userData">
          <option disabled hidden value="">Please Select a Book</option>
          <template v-for="item in getUserList">
            <option :key="item.id" :value="item"> {{ item.selectedBook.name }} </option>
          </template>
        </select>
        <div class="d-flex align-items-start flex-column" v-if="userData">
          <div class="mb-1">{{ userData.id }}</div>
          <div class="mb-1">{{ userData.fullName }}</div>
          <div>{{ userData.userAdress }}</div>
        </div>
        <button v-if="userData" class="btn btn-primary" @click="getFromUser(userData)" style="margin-top: 150px;">
          Get from User
        </button>
      </div>
      <notifications group="get" width="400px" position="top center" />
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
import { mapGetters } from "vuex";
export default {
  name: "Get",
  data() {
    return {
      userData: ""
    }
  },
  components: {
    Container
  },
  computed: {
    ...mapGetters(["getBookList", "getUserList"]),
  },
  methods: {
    getFromUser(item) {
      if (item) {
        this.$store.commit('getUser', item)

        this.$notify({
          group: "get",
          title: "Getted",
          text: `${item.selectedBook.name} has been getted from ${item.fullName}.`,
          type: "success",
          duration: 5000
        });
        this.userData = ""
      }
    }
  }
};
</script>

<style scoped>
.getUserForm {
  border: 1px solid #eeeeee;
  margin: auto 0 auto;
  padding: 50px;
  width: inherit;
}

.formHead {
  display: flex;
  justify-content: space-between;
}

.my-style {
  font-size: 20px;
}


</style>
