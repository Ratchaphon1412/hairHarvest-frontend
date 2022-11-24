<template>
  <navbar/>
  <section class="vh-100">
    <div class="container-fluid h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            alt="Sample image"
            class="img-fluid"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3"
                >Email address</label
              >
              <input
                v-model="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                type="email"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">Password</label>
              <input
                v-model="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter password"
                type="password"
              />
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <a class="link-danger" href="/Register">Register</a>
              </p>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
                type="button"
                @click="login"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "@/store/auth.js";
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async login() {
      // console.log(this.email, this.password);

      const auth_store = useAuthStore();
      if (auth_store.login(this.email, this.password)) {
        await this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  background: lightgray;
}

.text-primary {
  color: #da0037 !important;
}

.a:hover {
  color: #da0037 !important;
}

.border-bottom {
  border-bottom: 5px #444444 !important;
  height: 80px;
}

.btn-primary {
  background-color: #da0037 !important;
  border: 0px;
}

.btn-primary:hover {
  background-color: #860b2a !important;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
