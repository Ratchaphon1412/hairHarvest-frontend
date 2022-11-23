<template>
  <section class="mt-5">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-8">
          <div class="card text-black form-bg" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <p class="text-left h3 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                สร้างโพสต์ทรงผม
              </p>
              <div class="row">
                <div class="col order-2 order-lg-1">
                  <div class="flex-row align-items-center mb-2">
                    <img
                      src="@/assets/default.png"
                      id="preview"
                      class="img-profile mb-4"
                    />

                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept="image/*"
                      @change="previewImage"
                      style="display: none"
                      ref="chooseImg"
                    />
                    <button
                      id="upload"
                      @click="$refs.chooseImg.click()"
                      type="button"
                      class="btn btn-secondary img-button"
                    >
                      Choose your image
                    </button>
                  </div>
                </div>
                <div class="col">
                  <form @submit.prevent class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill">
                        <label class="form-label" for="form3Example1c"
                          >ชื่อทรงผม</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="inputTitle"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label for="inputAddress" class="form-label"
                          >เลือกสีผม</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="inputColor"
                        />
                        <!-- <select id="inputState" class="form-select">
                          <option selected>Choose...</option>
                          <option>ดำ</option>
                          <option>แดง</option>
                          <option>น้ำตาล</option>
                          <option>บลอนด์</option>
                          <option>น้ำเงิน</option>
                        </select> -->
                      </div>

                      <div class="col-md-6">
                        <label for="inputState" class="form-label"
                          >เลือกแบบผม</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="inputStyle"
                        />
                        <!-- <select id="inputState" class="form-select">
                          <option selected>Choose...</option>
                          <option>เกาหลี</option>
                          <option>ลอนด์</option>
                          <option>ประบ่า</option>
                          <option>สั้น</option>
                          <option>ยาว</option>
                        </select> -->
                      </div>
                    </div>

                    <div class="pt-4">
                      <label class="form-label" for="form3Example1c"
                        >รายละเอียด</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="inputDescription"
                      />
                    </div>

                    <div class="row">
                      <div
                        class="col d-flex justify-content-start mt-5 mb-3 mb-lg-4"
                      >
                        <button
                          type="button"
                          @click.prevent="onCancel"
                          class="btn btn-secondary btn-lg"
                        >
                          ยกเลิก
                        </button>
                      </div>

                      <div
                        class="col d-flex justify-content-end mt-5 mb-3 mb-lg-4"
                      >
                        <button
                          type="button"
                          @click="saveNewPost()"
                          class="btn btn-primary btn-lg"
                        >
                          สร้างโพสต์
                        </button>
                      </div>
                    </div>
                  </form>
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
import axios from "axios";
export default {
  name: "CreateHairStyle",
  data() {
    return {
      post: {
        name: "",
        color: [],
        style: [],
        details: "",
        //img
        error: null,
      },
      post_id: null,
    };
  },
  methods: {
    previewImage() {
      var file = document.getElementById("file").files;
      if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          document
            .getElementById("preview")
            .setAttribute("src", event.target.result);
        };
        fileReader.readAsDataURL(file[0]);
        // this.image = this.$ref.file.files.item(0)
      }
    },
    async saveNewPost() {
      try {
        const response = await this.axios.post(
          "http://localhost:8000/api/post",
          this.post
        );
        if (response.status == 200) {
          this.new_post_id = response.data.id;
          this.$router.push(`/posts/${new_post_id}`);
          console.table(this.new_post_id);
        }
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    },
    onCancel() {
      console.log("CANCEL SUBMIT");
      this.post = false;
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-bg {
  background-color: #ededed;
}

.img-profile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  height: 250px;
  width: 250px;
  border: 2px solid #cecece;
  border-radius: 20px;
}

.img-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
