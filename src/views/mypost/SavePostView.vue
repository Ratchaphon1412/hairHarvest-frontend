<template>
  <NavbarDashboard />

  <div v-for="post in saveMyPostData">
    <div class="mx-5 d-flex justify-content-center">
      <Haircard
        :img="post.post.image"
        :userProfile="post.post.post.userProfileImage.profile_pic"
        :userName="post.post.post.userProfileImage.user.name"
        :detail="post.post.post.detials"
        :postId="post.post.post.id"
      />
    </div>
  </div>
</template>

<script>
import Haircard from "@/components/Haircard.vue";
import NavbarDashboard from "@/components/NavbarDashboard.vue";
import { useAuthStore } from "@/store/auth.js";
import { usePost } from "@/store/post.js";

export default {
  data() {
    return {
      saveMyPostData: null,
    };
  },
  components: {
    Haircard,
    NavbarDashboard,
  },
  name: "SavePostView",
  async mounted() {
    const authStore = useAuthStore();
    await authStore.auth();

    const postStore = usePost();
    await postStore.getMySavePost(authStore.userID);
    console.log(postStore.savePost);
    this.saveMyPostData = postStore.savePost;
  },
};
</script>

<style lang="scss" scoped></style>
