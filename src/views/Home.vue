
<template>

  <NavbarDashboard/>

  <div class="mx-5 d-flex justify-content-center">
    <Haircard
      :title="'this is title'"
      :subtitle="'no2'"
      :username="'userNo1'"
    />
  </div>
  <div class="mx-5 d-flex justify-content-center">
    <Haircard :title="'no1'" :subtitle="'no2'" :username="'userNo2'" />
  </div>
  <div class="mx-5 d-flex justify-content-center">
    <Haircard :title="'no1'" :subtitle="'no2'" :username="'userNo3'" />
  </div>
</template>

<script>
import Haircard from "@/components/Haircard.vue";
import { usePost } from "@/store/post";
import { useAuthStore } from "@/store/auth.js";
import NavbarDashboard from "@/components/NavbarDashboard";
export default {

  data() {
    return {
      allPost: null,
    };
  },
  async mounted() {
    const postStore = usePost();

    //call method
    await postStore.allPost();

    //get data post
    const postAll = postStore.postAll; //array all post

    //store in data vue
    this.allPost = postAll;

    console.log(postAll);

    const authStore = useAuthStore();
    await authStore.auth();
    console.log(authStore.getImage)

  },
  components: {
    Haircard,
    NavbarDashboard,
  },
  name: "home",
  comments: {
    Haircard,
  },
};
</script>

<style lang="scss" scoped></style>
