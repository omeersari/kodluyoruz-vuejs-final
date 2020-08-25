<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link id="logo" class="navbar-brand" to="/">Kodluyoruz-Final</router-link>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Book Operations
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/addbook">Add New Book</router-link>
              <router-link class="dropdown-item" to="/booklist">See Book List</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User Operations
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/setuser">Set to User</router-link>
              <router-link class="dropdown-item" to="/getuser">Get from User</router-link>
            </div>
          </li>

        </ul>
        <form @submit.prevent="makeSearch" class="form-inline my-2 my-lg-0">
          <input required
            class="form-control mr-sm-2"
            type="search"
            placeholder="Books or authors"
            aria-label="Search"
            v-model="search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    <notifications group="add" width="400px" position="top center" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: ""
    }
  },
  methods: {
    makeSearch() {
      const routePath = this.$route.path
      if (routePath == `/search/${this.search}`) {
        this.$notify({
          group: "add",
          title: "Error",
          text: "You are already here",
          type: "error",
          duration: 2000
        });
      }else {
        this.$router.push({name: 'Search', params: { search : this.search }})
        this.$notify({
          group: "add",
          title: "Success",
          text: "Search made",
          type: "success",
          duration: 2000
        });
      }
    }
  }
};
</script>

<style scoped></style>
