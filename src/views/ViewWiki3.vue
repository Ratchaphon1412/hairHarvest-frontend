<template>
    <navbar/>
<div class="container">
  <div class="card float-left mt-5">
    <div class="row mt-5">

      <div class="col-sm-7">
        <div class="card-block">
            <h1>Lazy Curl with a Curling Iron</h1>
          <p>Begin with your first section and mist with a thermal heat spray from at least 6” away to protect the hair.
             Gather the section, elevate to 90 degrees with thumb and index finger.</p>
          <p>Place the curling iron in front of the section with the barrel of the iron behind the section. 
            Holding the section, face thumbnail up and flat wrap around the iron (do not twist the hair around the barrel when doing a flat wrap).
            After you complete the flat wrap, hold the section and roll the iron and close near the scalp and allow the section to heat completely before moving on.</p>
          <p>Holding the section, remove the barrel from the hair and turn it so the barrel is not in front of the section. 
            Place the iron in the spot where your last curl was made and repeat the process, flat wrap, roll the iron and close.</p>
          <p>Once to the end of the section, comb through with your hand and finger through the section to separate the curls.</p>
        </div>
      </div>

      <div class="col-sm-5">
        <img class="d-block w-100 re-size" src="@/assets/wikiTwo.jpg" alt="">
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