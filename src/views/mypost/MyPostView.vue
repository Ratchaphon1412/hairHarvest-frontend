<template>
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

export default {
  data() {
    return {
      myPost: null,
    };
  },
  async mounted() {
    const authStore = useAuthStore();
    authStore.auth();

    const postStore = usePost();

    await postStore.myPost(authStore.userID);
    const myPost = postStore.myPost;
    console.log(myPost);
    this.myPost = myPost;
  },

  components: {
    Haircard,
  },
  name: "MyPost",
  comments: {
    Haircard,
  },
};
</script>

<style lang="scss" scoped></style>
