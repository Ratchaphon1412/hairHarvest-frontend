<template>
  <nav
    class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top"
    id="mainNav"
  >
    <div class="container">
      <a class="navbar-brand text-white" href="#page-top">
        <i class="bi bi-display me-3"></i>
        Hairvest</a
      >
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <router-link
              class="nav-link py-3 px-0 px-lg-3 rounded"
              to="/" 
              >Home</router-link
            >
            <!-- <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#page-top"
              >Home</a
            > -->
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about"
              >About</a
            >
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Login"
              >Login</router-link
            >
            <!-- <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/Login"
              >Login</a
            > -->
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <router-link
              class="nav-link py-3 px-0 px-lg-3 rounded btn btn-primary"
              to="/Register"
              >Register</router-link
            >

            <!-- <a
              class="nav-link py-3 px-0 px-lg-3 rounded btn btn-primary"
              href="/Register"
              >Register</a
            > -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    // showLandingMenu() {
    //   return this.$route.name === 'LandingPage' && this.$route.name !== 'home' && this.$route.name !== 'CreateHairStyle';
    // }
  },
};
</script>

<style lang="scss" scoped>
.text-red {
  color: #dc3545;
}
</style>
