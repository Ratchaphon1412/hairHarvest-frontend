<template>
  <nav
    id="mainNav"
    class="navbar navbar-expand-lg bg-dark text-uppercase sticky-top"
  >
    <div class="container">
      <a class="navbar-brand text-white" href="/LandingPage">Hairvest</a>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a>
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a
              class="nav-link py-3 px-0 px-lg-3 rounded"
              href="/CreateHairStyle"
              >Create HairStyle</a
            >
          </li>
          <li class="nav-item dropdown mx-0 mx-lg-1">
            <a
              aria-expanded="false"
              class="nav-link dropdown-toggle py-3 px-0 px-lg-3 rounded"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <img :src="profile_img" alt="" width="30" height="24">
            </a>
            <ul class="dropdown-menu ms-auto">
              <li>
                <a class="dropdown-item" href="/MyPost" role="button"
                  >My Post</a
                >
              </li>
              <li><a class="dropdown-item" href="/SavePost">Save List</a></li>
              <li>
                <a class="dropdown-item" href="/CreateStore">Create Store</a>
              </li>
              <li>
                <a class="dropdown-item fw-bold text-red" href="/LandingPage"
                  >Logout</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

import {useAuthStore} from '@/store/auth';
export default {

  name:"NavbarDashboard",
  data() {
    return{
      username : "",
      profile_img : "http://localhost:8000",
    }

  },
  //
  async mounted(){

    let storeAuth = useAuthStore()

    await storeAuth.auth();
    console.log(storeAuth.getImage)

    this.profile_img += storeAuth.getImage;
    // console.log(this.profile_img)
    // this.username = authStore.getUsername();
  }
};
</script>

<style lang="scss" scoped></style>
