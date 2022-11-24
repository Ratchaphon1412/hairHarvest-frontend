<template>
  <navbar class="nav-op" />
  <!-- Masthead-->
  <div style="background-color:black">
  <img src="@/assets/bgOne.jpg" class="img-container1 position-relative">
    <div class="container flex-column position-absolute top-50 start-50 translate-middle">
      <!-- Masthead Heading-->
      <div class="row">
        <div class="col-7">
          <h1 class="masthead-heading border-bottom mb-0 text-h1" style="color:white">Hairvest</h1>
          <h5 class="my-2 " style="color:white">Website for Beauty and Salon</h5>
          <class class="ms-4 flex">
            <button @click="$router.push('Register')" class="btn btn-primary px-lg-3 py-lg-2 m-3 text-white border-white">Click to
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </class>
        </div>
      </div>
    </div>
  </div>

  <section class="position-relative" id="about" style="background-color:black">
    <img src="@/assets/bgTwo.jpg" class="img-container2 position-relative">
    <div class="container flex-column position-absolute top-50 start-50 translate-middle" style="color:white">
      <!-- Contact Section Heading-->
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase mb-5">About</h2>
      <!-- About Section Content-->
      <div class="row">
        <div class="col-lg-4 ms-auto">
          <p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the
            complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy
            customization.</p>
        </div>
        <div class="col-lg-4 me-auto">
          <p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and
            add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
      <!-- About Section Button-->
      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
          <i class="fas fa-download"></i>
          Free Download!
        </a>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-facebook"></i></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-twitter"></i></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-instagram"></i
      ></a>
      
      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.img-container1{
  object-fit: cover;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
}
.img-container2{
  object-fit: cover;
  width: 100%;
  height: 85vh;
  opacity: 0.4;
}
.nav-op{
  background-color:rgba(0, 0, 0, 0) !important;
}

.text-h1{
  font-size: 70px;
}

</style>