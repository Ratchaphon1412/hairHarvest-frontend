<template>
  <!--Section: Newsfeed-->
  <section>
    <div class="card mt-3" style="max-width: 42rem">
      <div class="card-body">
        <!-- Data -->
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
            <a href="" class="text-muted d-block" style="margin-top: -6px">
              <small>10h</small>
            </a>
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
export default {
  data() {
    return {
      userName: null,
      userProfile: null,
      img: null,
      postId: null,
      title: null,
      detail: null,
    };
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
