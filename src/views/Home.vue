<template>
  <div class="col mx-5">
    <Haircard v-for="post in allPost"
    :post="post" :url="`post/${post.id}`">
    </Haircard>
  </div>
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
