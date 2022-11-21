<template>
  <div class="mx-auto">
      <div class="col">
        <Haircard
            :title="'no1'"
            :subtitle="'no2'"
        />
      </div>
      <div class="col">
        <Haircard
            :title="'haha'"
            :subtitle="'jojo'"
        />
      </div>
      <div class="col">
        <Haircard
            :title="'this is my third'"
            :subtitle="'koko'"
        />
      </div>
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
