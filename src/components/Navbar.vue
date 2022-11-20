<template>
  <div v-if="showLandingMenu">
    <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-white" href="#page-top">Hairvest</a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#page-top">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Follow</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div v-else>
    <nav id="mainNav" class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top">
      <div class="container">
        <a class="navbar-brand text-white" href="/LandingPage">Hairvest</a>
        <div id="navbarResponsive" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/CreateHairStyle">Create HairStyle</a></li>
            <li class="nav-item ms-auto dropdown mx-0 mx-lg-1 ">
              <a class="nav-link ms-auto dropdown-toggle mx-0 mx-lg-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
            <ul class="dropdown-menu ms-auto">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    showLandingMenu(){
      return this.$route.name === 'LandingPage' && this.$route.name !== 'home' && this.$route.name !== 'CreateHairStyle';
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
