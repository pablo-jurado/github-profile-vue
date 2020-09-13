<template>
  <div class="user">
    <img v-bind:src="avatar" height="100px" alt="user avatat" />
    <h2>{{ name }}</h2>
    <p>{{ bio }}</p>
    <a v-bind:href="blog" target="_blank">{{ blog }}</a>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: String,
    bio: String,
    avatar: String,
    blog: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  margin: 2rem;
}
img {
  border-radius: 8px;
  border: solid 1px rgb(206, 206, 206);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
