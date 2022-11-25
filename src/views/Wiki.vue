<template>
  <navbar/>
  <div class="text-center mt-4"><h1>Wiki</h1></div>
  <div class="row p-4">
    <div class="col-6">
      <router-link to="ViewWiki1" style="text-decoration: none; color: inherit;">
      <div class="card mb-3" style="max-width: 40xh;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/wikiOne.jpg" class="img-fluid rounded-start re-size" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body"><br><br><br>
              <h5 class="card-title" style="text-transform: none;">Skinhead</h5>
              <p class="card-text">Click for more detail</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    </div>
    <div class="col-6">
      <router-link to="ViewWiki2" style="text-decoration: none; color: inherit;">
      <div class="card mb-3" style="max-width: 40xh;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/wikiFive.jpg" class="img-fluid rounded-start re-size" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body"><br><br><br>
              <h5 class="card-title" style="text-transform: none;">Hair care for seniors</h5>
              <p class="card-text">Click for more detail</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    </div>
    <div class="col-6">
      <router-link to="ViewWiki3" style="text-decoration: none; color: inherit;">
      <div class="card mb-3" style="max-width: 40xh;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/wikiTwo.jpg" class="img-fluid rounded-start re-size" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body"><br><br><br>
              <h5 class="card-title" style="text-transform: none;">Curler</h5>
              <p class="card-text">Click for more detail</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    </div>
    <div class="col-6">
      <router-link to="ViewWiki4" style="text-decoration: none; color: inherit;">
      <div class="card mb-3" style="max-width: 40xh;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/wikiThree.jpg" class="img-fluid rounded-start re-size" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body"><br><br><br>
              <h5 class="card-title" style="text-transform: none;">Mohawk</h5>
              <p class="card-text">Click for more detail</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue";
export default {
    components: {
        Navbar,
    },
}
</script>

<style>
.re-size{
  object-fit: cover;
  width: 200px;
  height: 250px;
}
</style>