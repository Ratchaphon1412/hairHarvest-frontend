<template>

<div class="container d-flex justify-content-center">

  <showcard/>

</div>

</template>

<script>
import Showcard from "@/components/Showcard.vue";
export default {
  components: {
    Showcard,
  },
  name: "HairStyleShow",
  comments: {
    Showcard,
  },
}
</script>

<style lang="scss" scoped>

.card-block {
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, .1);
  box-shadow: none;

}

.previewImg{
  object-fit: cover;
  height: 500px ;
  width: 400px;
}


</style>