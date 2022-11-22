<template>
  <router-link to="/post/2">
  <div class="card p-2 my-3" style="width:50rem;" >
    <img src="post.userID.user_profile" style="width:50px;">
    <h5 class="card-header">
      {{post.userID.name}}
    </h5>
    <div class="card-body px-3">
      <img alt="Card image cap" class="card-img-top" src="../assets/hairOne.png">
      <h5 class="card-title pt-3">{{post.title}}</h5>
      <p class="card-text">{{post.details}}</p>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      post: null
    }
  },
  props: {
    post: Object,
    url: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.card{
  position: relative;
  align-items: center;
  text-align: center;
}

</style>