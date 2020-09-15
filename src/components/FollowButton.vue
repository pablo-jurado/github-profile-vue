<template>
  <button>{{ isFolllowed ? "Unfollow ★" : "Follow ☆" }}</button>
</template>

<script>
export default {
  name: "FollowButton",
  props: {
    isFolllowed: Boolean,
  },
};
</script>

