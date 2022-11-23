<template>
  <div class="mx-5 d-flex justify-content-center">
    <Haircard
      :title="'This is my post page'"
      :subtitle="'no2'"
      :username="'userNo1'"
    />
  </div>
</template>

<script>
import Haircard from "@/components/Haircard.vue";
import { useAuthStore } from "@/store/auth";
export default {
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
