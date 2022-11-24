<template>
  <NavbarDashboard/>
  <section class="mt-5">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-8">
          <div class="card text-black form-bg" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <p class="text-left h3 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                Create Store
              </p>
              <div class="row">
                <div class="col order-2 order-lg-1">

                  <div class="flex-row align-items-center mb-1">

                    <img id="preview" class="img-profile mb-4" src="@/assets/shop.png"
                    >

                    <input id="file" ref="chooseImg" accept="image/*" name="file" style="display: none"
                           type="file" @change="previewImage">
                    <button
                        id="upload"
                        class="btn btn-secondary img-button"
                        type="button"
                        @click="$refs.chooseImg.click()"
                    >
                      Choose your image
                    </button>

                  </div>

                </div>
                <div class="col">
                  <form class="mx-1 mx-md-3" @submit.prevent>
                    <div class="d-flex flex-row align-items-center mb-2">
                      <div class="form-outline flex-fill">
                        <label class="form-label" for="form3Example1c">Name</label>
                        <input id="inputStoreName" class="form-control" type="storeName">
                      </div>
                    </div>

                    <div class="mb-1">
                      <label class="form-label" for="form3Example1c"
                      >Description</label
                      >
                      <input id="inputStoreDescription" class="form-control" type="storeDescription">
                    </div>

                    <div class="mb-1">
                      <label class="form-label" for="form3Example1c"
                      >Location</label
                      >
                      <input id="inputStoreDescription" class="form-control" type="storeLocation">
                    </div>

                    <div class="mb-1">
                      <label class="form-label" for="form3Example1c"
                      >Contact</label
                      >
                      <input id="inputStoreDescription" class="form-control" type="storeContact">
                    </div>

                    <div class="row">

                      <div
                          class="col d-flex justify-content-start mt-5 mb-3 mb-lg-4">
                        <button
                            class="btn btn-secondary btn-lg"
                            type="button"
                            @click="submit">
                          cancel
                        </button>
                      </div>

                      <div
                          class="col d-flex justify-content-end mt-5 mb-3 mb-lg-4">
                        <button
                            class="btn btn-primary btn-lg"
                            type="button"
                            @click="submit">
                          create
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
import NavbarDashboard from "@/components/NavbarDashboard.vue";
export default {
  name: "CreateStore",
  components: {
    NavbarDashboard,
  },
  methods: {

    previewImage() {
      var file = document.getElementById("file").files;
      if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          document.getElementById("preview").setAttribute("src", event.target.result);
        }
        fileReader.readAsDataURL(file[0]);
        // this.image = this.$ref.file.files.item(0)
      }
    },
  },
}
</script>

<style scoped>

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