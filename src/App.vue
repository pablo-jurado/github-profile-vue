<template>
  <div id="app">
    <h1>GitHub Explorer</h1>
    <form v-on:submit.prevent="fetchUser">
      <input type="text" v-model="searchValue" />
      <input type="submit" value="Search" v-bind:disabled="loading" />
    </form>
    <p v-show="loading">Loading...</p>

    <UserCard
      v-if="!loading && result"
      :login="result.login"
      :name="result.name"
      :bio="result.bio"
      :avatar="result.avatar_url"
      :blog="result.blog"
    />
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import { getUser } from "./service";
export default {
  name: "App",
  components: {
    UserCard,
  },
  data: function() {
    return {
      searchValue: "",
      loading: false,
      notFound: false,
      result: null,
    };
  },
  methods: {
    fetchUser: async function() {
      if (!this.searchValue) return;

      this.loading = true;

      try {
        const response = await getUser(this.searchValue);
        if (response) {
          this.result = response;
        } else {
          this.notFound = true;
        }
      } catch (error) {
        this.notFound = true;
      }
      this.loading = false;
      this.searchValue = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
