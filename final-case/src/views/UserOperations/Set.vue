<template>
  <div>
    <Container class="col-lg-6 col-sm-8">
      <div class="setUserForm">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(setUser)">
            <div class="formHead">
              <h2 class="mb-3">Set to User</h2>
              <router-link to="/">
                return home page
              </router-link>
            </div>
            <div class="form-group">
              <select required class="custom-select" v-model="selectedBook">
                <option disabled hidden value="">Please Select a Book</option>
                <template v-for="book in filteredList">
                  <option :key="book.id" :value="book">
                    {{ book.name }}
                  </option>
                </template>
              </select>
            </div>

            <div class="form-group">
              <ValidationProvider
                mode="passive"
                rules="digits:11"
                v-slot="{ errors }"
                name="ID NUMBER"
              >
                <input
                    id="identity"
                  type="text"
                  required
                  class="form-control"
                  placeholder="Please insert 11-digit user identity number"
                  v-model="id"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider
                mode="passive"
                rules="required"
                v-slot="{ errors }"
                name="FULL NAME"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please enter user name and surname"
                  v-model="fullName"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <ValidationProvider
                mode="passive"
                rules="required"
                v-slot="{ errors }"
                name="ADDRESS"
              >
                <textarea
                  v-model="userAdress"
                  class="form-control"
                  placeholder="Please enter user adress"
                  aria-label="With textarea"
                ></textarea>
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <button type="submit" class="btn btn-primary">Set to User</button>
          </form>
        </ValidationObserver>
      </div>
    </Container>
    <notifications group="set" width="400px" position="top center" />
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
import Container from "@/components/Container";
import { mapGetters } from "vuex";

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

export default {
  name: "Set",
  data() {
    return {
      id: "",
      fullName: "",
      userAdress: "",
      selectedBook: ""
    };
  },
  methods: {
    setUser() {
      const userData = {
        id: this.id,
        fullName: this.fullName,
        userAdress: this.userAdress,
        selectedBook: this.selectedBook
      };
      if (userData) {
        this.$store.commit("setUser", userData);
        this.$notify({
          group: "set",
          title: "Success",
          text: `${userData.selectedBook.name} is setted to ${userData.fullName}.`,
          type: "success",
          duration: 5000
        });
        this.clear();
      }
    },
    clear() {
      this.id = "";
      this.fullName = "";
      this.userAdress = "";
      this.selectedBook = "";
    }
  },
  components: {
    Container,
    ValidationObserver,
    ValidationProvider
  },
  computed: {
    ...mapGetters(["getBookList"]),
    filteredList() {
      return this.getBookList.filter(item => item.haveUser == false);
    }
  }
};
</script>

<style scoped>
.setUserForm {
  border: 1px solid #eeeeee;
  margin: auto 0 auto;
  padding: 50px;
  width: inherit;
}

.formHead {
  display: flex;
  justify-content: space-between;
}
</style>
