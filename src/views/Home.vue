<template>
  <NavbarDashboard />

  <div class="container mt-4">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-6">
        <div class="form">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="form-control form-input"
            placeholder="Search anything..."
          />
          <span class="left-pan"><i class="fa fa-microphone"></i></span>
        </div>
      </div>
    </div>
  </div>

  <div v-for="post in allPost">
    <div class="mx-5 d-flex justify-content-center">
      <Haircard
        :img="post.image"
        :userProfile="post.post.userProfileImage.profile_pic"
        :userName="post.post.userProfileImage.user.name"
        :detail="post.post.detials"
        :postId="post.post.id"
      />
    </div>
  </div>
  <!-- <div class="mx-5 d-flex justify-content-center">
    <Haircard :title="'no1'" :subtitle="'no2'" :username="'userNo2'" />
  </div>
  <div class="mx-5 d-flex justify-content-center">
    <Haircard :title="'no1'" :subtitle="'no2'" :username="'userNo3'" />
  </div> -->
  <!--  <div class="mx-5 d-flex justify-content-center">-->
  <!--    <Haircard v-for="post in allPost"-->
  <!--    :post="post" :url="`post/${post.id}`">-->
  <!--    </Haircard>-->
  <!--  </div>-->
</template>

<script>
import Haircard from "@/components/Haircard.vue";
import { usePost } from "@/store/post";
import { useAuthStore } from "@/store/auth.js";
import NavbarDashboard from "@/components/NavbarDashboard.vue";
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
    console.log(postAll.image);
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

<style lang="scss" scoped>
.form {
  position: relative;
}

.form .fa-search {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #9ca3af;
}

.form span {
  position: absolute;
  right: 17px;
  top: 13px;
  padding: 2px;
  border-left: 1px solid #d1d5db;
}

.left-pan {
  padding-left: 7px;
}

.left-pan i {
  padding-left: 10px;
}

.form-input {
  height: 55px;
  text-indent: 33px;
  border-radius: 10px;
}
</style>
