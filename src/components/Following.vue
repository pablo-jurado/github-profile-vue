<template>
  <div>
    <h3>
      Following
    </h3>
    <div v-for="user in users" :key="user.name">
      <UserCard
        :login="user.login"
        :name="user.name"
        :bio="user.bio"
        :avatar="user.avatar"
        :blog="user.blog"
      />
    </div>
  </div>
</template>

<script>
import { getFollowList } from "../service";
import UserCard from "./UserCard";

export default {
  name: "Following",
  components: {
    UserCard,
  },
  data: function() {
    return {
      users: [],
    };
  },
  created: function() {
    this.users = getFollowList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
