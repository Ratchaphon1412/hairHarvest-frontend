<template>
  
  <div class="card my-3 " style="width:28rem;">

    <div class="row mt-3">
        <div class="col"><img class="profile-border " src="../assets/default.png"></div>
          <div class="col text-start">
            <label>{{title}}</label>
            <br>
            <label>{{username}}</label>
        </div>
    </div>

    <div class="card-body px-3">
      <router-link to="/ShowHairStyle"></router-link>
      <img alt="Card image cap" class="card-img-top" src="../assets/hairOne.png">
      <p class="card-text text-start mt-2">{{subtitle}}</p>
    </div>
  </div>
  
</template>

<script>
export default {
    props: {
      title: String,
      subtitle: String,
      username: String,
      image: String,
    },
};
</script>

<style>
.card{
  align-items: center;
  text-align: center;
}
.profile-border{
  border: 4px solid #DA0037;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #2c2b2b;
  border-left-color: #2c2b2b;
  border-right-color: #2c2b2b;
  width: 50px;
  height: 50px;
}

</style>