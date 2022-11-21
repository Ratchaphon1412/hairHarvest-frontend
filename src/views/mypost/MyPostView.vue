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
export default {
  name: "MyPostView"
}
</script>

<style scoped>

</style>