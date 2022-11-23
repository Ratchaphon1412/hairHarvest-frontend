<template>
        <div class="mx-5 d-flex justify-content-center">
        <Haircard
            :title="'no1'"
            :subtitle="'no2'"
            :username="'userNo1'"
        />
        </div>
        <div class="mx-5 d-flex justify-content-center">
        <Haircard
            :title="'no1'"
            :subtitle="'no2'"
            :username="'userNo2'"
        />
        </div>
        <div class="mx-5 d-flex justify-content-center">
        <Haircard
            :title="'no1'"
            :subtitle="'no2'"
            :username="'userNo3'"
        />
        </div>
<!--  <div class="mx-5 d-flex justify-content-center">-->
<!--    <Haircard v-for="post in allPost"-->
<!--    :post="post" :url="`post/${post.id}`">-->
<!--    </Haircard>-->
<!--  </div>-->
</template>

<script>
import Haircard from "@/components/Haircard.vue";
import {usePost} from "@/store/post";
export default {
  data() {
    return{
     allPost:null
    }
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

  },
  components: {
    Haircard,
  },
  name: "home",
  comments: {
    Haircard,
  },
}
</script>

<style lang="scss" scoped>

</style>
