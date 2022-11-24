<template>
  <!--Section: Newsfeed-->
  <section>
    <div class="card mt-3" style="max-width: 42rem">
      <div class="card-body">
        <!-- Data -->
        <div class="row">
          <div class="col">
            <div class="d-flex mb-3">
              <a href="">
                <img
                  :src="`http://localhost:8000${userProfile}`"
                  class="border rounded-circle me-2"
                  alt="Avatar"
                  style="height: 40px"
                />
              </a>

              <div>
                <a href="" class="text-dark mb-0">
                  <strong>{{ userName }}</strong>
                </a>
              </div>
              <div class="ms-auto">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" @click="save">Save</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div>
          <p>
            {{ detail }}
          </p>
        </div>
      </div>
      <!-- Media -->
      <div
        class="bg-image hover-overlay ripple rounded-0"
        data-mdb-ripple-color="light"
      >
        <img :src="`http://localhost:8000${img}`" class="w-100" />
        <a href="#!">
          <div
            class="mask"
            style="background-color: rgba(251, 251, 251, 0.2)"
          ></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { postAPI } from "@/service/api.js";

export default {
  data() {
    return {};
  },

  props: {
    userName: {
      type: String,
      default: "Anna Doe",
    },
    userProfile: {
      type: String,
      default: null,
    },
    img: {
      type: String,
    },
    postId: {
      type: Number,
    },
    title: {
      type: String,
    },
    detail: {
      type: String,
    },
  },
  methods: {
    async save() {
      let self = this;
      const auth = useAuthStore();
      await auth.auth();

      await postAPI.savePost(auth.userID, self.postId);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  text-align: center;
}
.profile-border {
  border: 4px solid #da0037;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #2c2b2b;
  border-left-color: #2c2b2b;
  border-right-color: #2c2b2b;
  width: 50px;
  height: 50px;
}
</style>
