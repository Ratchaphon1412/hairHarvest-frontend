<template>
<div type="button" class="card mx-auto" style="width: 20rem;">
  <img src="../assets/hairOne.png" class="card-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{subtitle}}</p>
  </div>
</div>
</template>

<script>
export default {
    props: {
    title: String,
    subtitle: String,
    image: String,
  },
};
</script>

<style>
.card{
  position: relative;
  align-items: center;
  text-align: center;
}

</style>