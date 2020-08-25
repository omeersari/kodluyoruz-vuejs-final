<template>
  <div>
    <Container>
      <div class="card col-lg-12 col-sm-12">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">Book List</h5>
            <router-link to="/"> return home page </router-link>
          </div>
          <template v-for="book in pageOfItems">
            <div :key="book.id" class="movies">
              <div class="image">
                <img :src="book.bookUrl" />
              </div>
              <div class="infotop">
                <span>{{ book.name }}</span>
                <span :class="book.haveUser ? 'atUser' : 'inStore'">{{
                  book.haveUser ? "AT USER" : "IN STORE"
                }}</span>
              </div>
              <div class="infobottom">
                <span class="author"> {{ book.author }}</span>
                <span
                  v-if="!book.haveUser"
                  class="btn-sm btn-danger mt-1"
                  @click="deleteBook(book)"
                  >DELETE</span
                >
              </div>
            </div>
          </template>
        </div>
        <div class="card-footer pb-0 pt-3">
          <jw-pagination
            :items="getBookList"
            @changePage="onChangePage"
            :pageSize="3"
            :maxPages="15"
          >
          </jw-pagination>
        </div>
      </div>
      <notifications group="delete" width="400px" position="top center" />
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
import { mapGetters } from "vuex";
export default {
  name: "BookList",
  components: {
    Container
  },
  data() {
    return {
      pageOfItems: []
    };
  },
  computed: {
    ...mapGetters(["getBookList"])
  },
  methods: {
    deleteBook(item) {
      this.$confirm("Are you sure?")
        .then(() => {
          this.$store.commit("deleteBook", item);
          this.$notify({
            group: "delete",
            title: "Deleted",
            text: `${item.name} is deleted.`,
            type: "warn",
            duration: 5000
          });
        })
        .catch(() => {
          this.$notify({
            group: "delete",
            title: "Cancelled",
            text: "Action cancelled",
            type: "error",
            duration: 5000
          });
        });
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>

<style scoped>
.movies {
  border: 1px solid #eee;
  padding: 10px;
  height: 110px;
  margin-bottom: 30px;
}

.image {
  float: left;
  clear: both;
  width: 150px;
  margin-right: 10px;
}

.image img {
  width: inherit;
  height: 90px;
}

.infotop {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}

.infobottom {
  display: flex;
  justify-content: space-between;
}

.infobottom .author {
  color: darkgray;
  font-size: 1em;
  margin-top: -10px;
}

.inStore {
  background-color: lightgreen;
  border: 1px solid green;
  color: darkgreen;
  padding: 2px;
}

.atUser {
  background-color: lightcoral;
  border: 1px solid red;
  color: darkred;
  padding: 2px;
}

@media only screen and (max-width: 800px) {
  .movies {
    height: auto;
  }
}
</style>
