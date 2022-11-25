<template>
    <navbar/>
<div class="container">
  <div class="card float-left mt-5">
    <div class="row mt-5">

      <div class="col-sm-7">
        <div class="card-block">
            <h1>Your Guide to Aging, Thinning Hair: 5 Simple Tips</h1>
          <p>1. Wash less frequently</p>
          <p>2. Don’t forget conditioners and volumizers</p>
          <p>3. Choose the right products</p>
          <p>4. Eat a complete, protein-rich diet</p>
          <p>5. Check medications with your doctor</p>
        </div>
      </div>

      <div class="col-sm-5">
        <img class="d-block w-100 re-size" src="@/assets/wikiFive.jpg" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style lang="scss" scoped>
body {
  background-color:  #eee;
}
.title {
 
    margin-bottom: 50px;
    text-transform: uppercase;
}

.card-block {
    font-size: 1em;
    position: relative;
    margin: 0;
    padding: 1em;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, .1);
    box-shadow: none;
     
}
.card {
    font-size: 1em;
    overflow: hidden;
    padding: 5;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    margin-top:20px;
}

.carousel-indicators li {
    border-radius: 12px;
    width: 12px;
    height: 12px;
    background-color: #404040;
}
.carousel-indicators li {
    border-radius: 12px;
    width: 12px;
    height: 12px;
    background-color: #404040;
}
.carousel-indicators .active {
    background-color: white;
    max-width: 12px;
    margin: 0 3px;
    height: 12px;
}

.btn {
  margin-top: auto;
}

.re-size{
    object-fit: cover;
  width: 250px;
  height: 600px;
}
</style>