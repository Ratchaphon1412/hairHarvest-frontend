<template>
  
  <div class="card my-3 " style="width:28rem;">

    <div class="row mt-3">
        <div class="col-3"><img class="profile-border floated-end ms-4" src="../assets/default.png"></div>
          <div class="col-6 text-start">
            <label>{{title}}</label>
            <br>
            <label>{{username}}</label>
        </div>
        <div class="col">
          <a class="mt-auto btn btn-primary" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg></a>
        </div>
    
      
      <div class="mt-3">
        <img type="button" @click="$router.push('ShowHairStyle')" alt="card image cap" class="card-img-bottom" src="../assets/hairOne.png">
      </div>
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

<style lang="scss" scoped>
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