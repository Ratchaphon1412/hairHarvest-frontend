<template>
    <Searchbar />
    <main class="container mx-auto mt-4">
      <div v-for="n in 3" class="row mb-5">
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
      
    </main>
</template>

<script>
import Searchbar from "@/components/Searchbar.vue";
import Haircard from "@/components/Haircard.vue";
export default {
  components: { Searchbar,
    Haircard,
  },
  name:"home",
  comments: {
    Searchbar,
  },

};
</script>

<style lang="scss" scoped></style>
