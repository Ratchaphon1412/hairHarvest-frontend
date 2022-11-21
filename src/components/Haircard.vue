<template>
  <router-link to="/ShowHairStyle">
  <div class="card p-2 my-3" style="width:50rem;">
    <h5 class="card-header">
      Featured
    </h5>
    <div class="card-body px-3">
      <img alt="Card image cap" class="card-img-top" src="../assets/hairOne.png">
      <h5 class="card-title pt-3">{{title}}</h5>
      <p class="card-text">{{subtitle}}</p>
    </div>
  </div>
  </router-link>
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