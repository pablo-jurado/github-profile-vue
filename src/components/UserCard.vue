<template>
  <div class="user-card">
    <img v-bind:src="avatar" height="200px" alt="user avatat" />
    <div class="content">
      <h2>{{ name }}</h2>
      <p>{{ bio }}</p>
      <a v-bind:href="blog" target="_blank">{{ blog }}</a>
    </div>
    <div class="favorite">
      <button v-on:click="addToFavorites">
        {{ isFolllowed ? "Unfollow ★" : "Follow ☆" }}
      </button>
    </div>
  </div>
</template>

<script>
import { updateFollowList, isUserFollowed } from "../service";
export default {
  name: "UserCard",

  props: {
    login: String,
    name: String,
    bio: String,
    avatar: String,
    blog: String,
  },
  created: function() {
    this.isFolllowed = isUserFollowed(this.login);
  },
  data: function() {
    return {
      isFolllowed: null,
    };
  },
  methods: {
    addToFavorites: function() {
      const newUser = {
        login: this.login,
        name: this.name,
        bio: this.bio,
        avatar: this.avatar,
        blog: this.blog,
      };

      updateFollowList(newUser);
      this.isFolllowed = isUserFollowed(this.login);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,
p,
a {
  margin: 0.5rem;
}

.user-card {
  max-width: 800px;
  border: solid 1px rgb(206, 206, 206);
  border-radius: 8px;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  text-align: left;
}
.favorite {
  align-self: flex-end;
}

img {
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
