<template>
  <div id="bookOperation">
    <h3 class="pt-5">Please select the operation you would like to do</h3>
    <div class="menu">
      <div class="row">
      <div class="card ml-lg-5 mr-lg-5 p-2 col-lg-5 col-md-10">
        <div class="card-body">
          <h3 class="card-title">Book Operations</h3>
          <p class="card-text">
            Here you can add a new book or see the list of books.
          </p>
          <router-link to="/addbook" class="card-link"
            >Add New Book</router-link
          >
          <router-link to="/booklist" class="card-link">Book List</router-link>
        </div>
      </div>
      <div class="card p-2 col-lg-5 col-md-10 mt-lg-0 mt-md-2 mt-sm-2">
        <div class="card-body">
          <h3 class="card-title">User Operations</h3>
          <p class="card-text">
            Here you can set books to user or get books from user.
          </p>
          <router-link to="/setuser" class="card-link">Set to User</router-link>
          <router-link to="/getuser" class="card-link">Get from User</router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookOperation"
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  padding-top: 70px;
}
</style>
