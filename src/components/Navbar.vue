 <template>
    <div v-if="showLandingMenu">
      <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand text-white" href="#page-top">Hairvest</a>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#page-top">Home</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Follow</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/Login">Login</a></li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded btn btn-primary" href="/Register">Register</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  <div v-else>
    <nav id="mainNav" class="navbar navbar-expand-lg bg-dark text-uppercase sticky-top">
      <div class="container">
        <a class="navbar-brand text-white" href="/LandingPage">Hairvest</a>
        <div id="navbarResponsive" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                                                 href="/CreateHairStyle">Create HairStyle</a></li>
            <li class="nav-item dropdown mx-0 mx-lg-1 ">
              <a aria-expanded="false" class="nav-link dropdown-toggle py-3 px-0 px-lg-3 rounded" data-bs-toggle="dropdown"
                 href="#" role="button">
                Dropdown link
              </a>
              <ul class="dropdown-menu ms-auto">
                <li><a class="dropdown-item" href="/MyPost" role="button">My Post</a></li>
                <li><a class="dropdown-item" href="/SavePost">Save List</a></li>
                <li><a class="dropdown-item" href="/CreateStore">Create Store</a></li>
                <li><a class="dropdown-item fw-bold text-red" href="/LandingPage">Logout</a></li>
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
    showLandingMenu() {
      return this.$route.name === 'LandingPage' && this.$route.name !== 'home' && this.$route.name !== 'CreateHairStyle';
    }
  },
}
</script>

<style lang="scss" scoped>
.text-red{
  color:#dc3545;
}
</style>
