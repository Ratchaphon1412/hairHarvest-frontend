<template>
  <NavbarDashboard />

  <div v-for="post in myPost">
    <div class="mx-5 d-flex justify-content-center">
      <Haircard
        :img="post.image"
        :userProfile="post.post.userProfileImage.profile_pic"
        :userName="post.post.userProfileImage.user.name"
        :detail="post.post.detials"
      />
    </div>
  </div>
</template>

<script>
import Haircard from "@/components/Haircard.vue";
import { usePost } from "@/store/post";
import { useAuthStore } from "@/store/auth.js";
import NavbarDashboard from "@/components/NavbarDashboard.vue";

export default {
  data() {
    return {
      myPost: null,
    };
  },
  components: {
    Haircard,
    NavbarDashboard,
  },
  async mounted() {
    const authStore = useAuthStore();
    await authStore.auth();

    const postStore = usePost();

    await postStore.myPost(authStore.userID);
    const myPost = postStore.myPost;
    console.log(myPost);
    this.myPost = myPost;
  },

  name: "MyPost",
  comments: {
    Haircard,
  },
};
</script>

<style lang="scss" scoped></style>
