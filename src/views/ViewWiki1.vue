<template>
    <navbar/>
<div class="container">
  <div class="card float-left mt-5">
    <div class="row mt-5">

      <div class="col-sm-7">
        <div class="card-block">
            <h1>How to Cut</h1>
          <p>Step 1: Start on clean, damp hair. Detangle hair with a comb.</p>
          <p>Step 2: Using your non-dominant hand, take a section of hair at the top.</p>
          <p>Step 3: Slide fingers from the root to the ends to measure how much you want to snip off. Aim for 1/4 to 1/2 inch.</p>
          <p>Step 4: Use your scissors to cut the ends.</p>
          <p>Step 5: Repeat on the sides, but snip slightly longer than the length you took off the top to create a shape.</p>
          <p>Step 6: Select your preferred hair clipper length (more on that later!).</p>
          <p>Step 7: Finish by using the clippers on the sides and sideburns. Takes practice.</p>
        </div>
      </div>

      <div class="col-sm-5">
        <img class="d-block w-100 re-size" src="@/assets/wikiOne.jpg" alt="">
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