<template>
        <div class="mx-5 d-flex justify-content-center">
        <Haircard
            :title="'this is title'"
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
