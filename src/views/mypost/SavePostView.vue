<template>
  <div class="mx-5 d-flex justify-content-center">
        <Haircard
            :title="'This is save post page'"
            :subtitle="'no2'"
            :username="'userNo1'"
        />
  </div>
</template>

<script>
import Haircard from "@/components/Haircard.vue";
export default {
  components: {
    Haircard,
  },
  name: "SavePostView",
  comments: {
    Haircard,
  },
}
</script>

<style lang="scss" scoped>

</style>