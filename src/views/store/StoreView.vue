<template>
   <NavbarDashboard />
   <section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" >
            <img src="@/assets/cardFour.jpg" class="card-img-top image-resize position-absolute" alt="">

            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img src="@/assets/hairOne.png"
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1">
    
            </div>
            <div class="ms-3 layer" style="margin-top: 130px;">
              <h5>ManMan barber</h5>
              <p>Thailand, Bangkok</p>
            </div>
          </div>
       
          <div class="card-body p-4 text-black">
            <div class="mb-5">
              <p class="lead fw-normal mb-1">About</p>
              <div class="p-4" style="background-color: #f8f9fa;">
                <p class="font-italic mb-1">Find us when you want to be handsome!</p>
                <p class="font-italic mb-1">Thailand, Bangkok : 081222313</p>
                
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">Recent photos</p>
            
            </div>
            <div class="row g-2">
              <div class="col mb-2">
                <img src="@/assets/sampleOne.jpeg"
                  alt="image 1" class="w-100 rounded-3 preview-img">
              </div>
              <div class="col mb-2">
                <img src="@/assets/sampleTwo.jpeg"
                  alt="image 1" class="w-100 rounded-3 preview-img">
              </div>
            </div>
            <div class="row g-2">
              <div class="col">
                <img src="@/assets/sampleThree.jpeg"
                  alt="image 1" class="w-100 rounded-3 preview-img">
              </div>
              <div class="col">
                <img src="@/assets/sampleFour.jpeg"
                  alt="image 1" class="w-100 rounded-3 preview-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';

export default {
  name: "StoreView",
  data(){
  
  },
  components:{
    NavbarDashboard
  }
}

</script>

<style scoped>
.gradient-custom-2 {
/* fallback for old browsers */
background: #fbc2eb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(251, 194, 235, 1), rgba(166, 193, 238, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(251, 194, 235, 1), rgba(166, 193, 238, 1))
}

.image-resize{
  object-fit: cover;
  height: 200px;

}
.layer{
  z-index: 1;
}

.preview-img{
  object-fit: cover;
  height: 300px;
}

</style>