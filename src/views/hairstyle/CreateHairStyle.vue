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

                    <img src="@/assets/default.png" id="preview" class="img-profile mb-4">

                      <input type="file" name="file" id="file" accept="image/*" @change="previewImage" style="display: none" ref="chooseImg">
                      <button
                        id="upload"
                        @click="$refs.chooseImg.click()"
                        type="button"
                        class="btn btn-secondary img-button">Choose your image
                      </button>
                  </div>
                
                </div>
                <div class="col">
                  <form @submit.prevent class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill">
                        <label class="form-label" for="form3Example1c">ชื่อทรงผม</label
                        >
                        <input type="text" class="form-control" id="inputTitle">

                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label for="inputAddress" class="form-label">เลือกสีผม</label>
                        <vue3-tags-input :tags="color"
                                         placeholder="น้ำเงิน, ดำ, ..."
                                         @on-tags-changed="handleColorChangeTag"/>
                      </div>

                      <div class="col-md-6">
                        <label for="inputState" class="form-label">เลือกแบบผม</label>
                        <vue3-tags-input :tags="type"
                                         placeholder="สั้น, ประบ่า, ..."
                                         @on-tags-changed="handleTypeChangeTag"/>
                      </div> 
                    </div>

                    <div class="pt-5">
                      <label class="form-label" for="form3Example1c"
                          >รายละเอียด</label
                        >
                      <textarea class="form-control" name="inputDescription"></textarea>

                    </div>
                    
                    <div class="row">

                      <div
                      class="col d-flex justify-content-start mt-5 mb-3 mb-lg-4">
                      <button
                        type="button"
                        @click="submit"
                        class="btn btn-outline-primary"
                      >
                        ยกเลิก
                      </button>
                    </div>

                      <div
                      class="col d-flex justify-content-end mt-5 mb-3 mb-lg-4"
                    >
                      <button
                        type="button"
                        @click="submit"
                        class="btn btn-primary"
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
import Vue3TagsInput from 'vue3-tags-input';
    export default{
      name: "CreateHairStyle",
      data() {
        return {
          color: [],
          type: [],
        }
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

        //demo method
        async handleColorChangeTag(color) {
          this.color = color;
        },
        async handleTypeChangeTag(type){
          this.type = type
        }
      },
      components: {
        Vue3TagsInput
      },

    }

</script>

<style lang="scss" scoped>
.form-bg{
  background-color: #ededed;
}

.img-profile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  height: 250px ;
  width: 250px;
  border:2px solid #cecece;
  border-radius: 20px;
}

.img-button{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>