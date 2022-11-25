<template>
    <navbar/>
<div class="container">
  <div class="card float-left mt-5">
    <div class="row mt-5">

      <div class="col-sm-7">
        <div class="card-block">
            <h1>How to Cut a Hawk</h1>
          <p>Step 1: Prep Your Hair</p>
          <p>Step 2: Map out the Mohawk</p>
          <p>Step 3: Cutting the Mohawk Fade</p>
          <p>Step 4: Cutting the Fade</p>
        </div>
      </div>

      <div class="col-sm-5">
        <img class="d-block w-100 re-size" src="@/assets/wikiThree.jpg" alt="">
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