<template>
  <div class="row">
    <div class="addForm col-lg-6 col-sm-12">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addNewBook)">
          <div class="formHead">
            <h2 class="mb-3">Add New Book</h2>
            <router-link to="/">
              return home page
            </router-link>
          </div>
          <div class="form-group">
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                v-model="name"
                class="form-control"
                placeholder="Please enter book name"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                v-model="author"
                class="form-control"
                placeholder="Please enter author"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="url"
                v-model="bookUrl"
                class="form-control"
                placeholder="Book Image URL"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </ValidationObserver>
    </div>
    <notifications group="add" width="400px" position="top center" />
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

export default {
  name: "Add",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      name: "",
      author: "",
      bookUrl: ""
    };
  },
  methods: {
    addNewBook() {
      const formData = {
        name: this.name,
        author: this.author,
        bookUrl: this.bookUrl,
        haveUser: false
      };
      if (formData) {
        this.$store.commit("addNewBook", formData);
        this.$notify({
          group: "add",
          title: "Success",
          text: `${formData.name} is added to book list.`,
          type: "success",
          duration: 5000
        });
      }
      this.clear();
    },
    clear() {
      this.name = "";
      this.author = "";
      this.bookUrl = "";
    }
  }
};
</script>

<style scoped>
.addForm {
  border: 1px solid #eeeeee;
  margin: 110px auto auto;
  padding: 50px;
}

.formHead {
  display: flex;
  justify-content: space-between;
}

</style>
