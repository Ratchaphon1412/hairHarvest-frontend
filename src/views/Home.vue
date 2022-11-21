<template>
      <div class="col mx-5">
        <Haircard
            :title="'no1'"
            :subtitle="'no2'"
        />
        <Haircard
            :title="'haha'"
            :subtitle="'jojo'"
        />
        <Haircard
            :title="'this is my third'"
            :subtitle="'koko'"
        />
  </div>
</template>

<script>
import Haircard from "@/components/Haircard.vue";
export default {
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
