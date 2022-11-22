<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Register
                  </p>

                  <form @submit.prevent class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c"
                          >Your Name *</label
                        >
                        <input
                          v-model="username"
                          type="text"
                          id="form3Example1c"
                          class="form-control "
                        />

                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c"
                          >Your Email *</label
                        >
                        <input
                          v-model="email"
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                        />

                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c"
                          >Password *</label
                        >
                        <input
                          v-model="password"
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                        />

                      </div>
                    </div>

                    <div v-if="password">

                    </div>

                    <div class="flex-row align-items-center mb-2">

                      <img src="@/assets/default.png" id="preview" class="img-profile mb-4"
                      >

                      <input type="file" name="file" id="file" accept="image/*" @change="previewImage" style="display: none" ref="chooseImg">
                      <button
                        id="upload"
                        @click="$refs.chooseImg.click()"
                        type="button"
                        class="btn btn-secondary img-button"
                      >
                        Choose your profile image
                      </button><br>

                    </div>
                    

                    <!-- <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="password2"
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example4cd"
                          >Repeat your password</label
                        >
                      </div>
                    </div> -->


                    <div class="form-check d-flex fw-bold justify-content-center mb-3">
                      <label class="form-check-label" for="form2Example3">
                        Already has an account?
                        <a href="/Login" class="text-primary">Login</a>
                      </label>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        type="button"
                        @click="submit"
                        class="btn btn-primary btn-lg"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
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
import {useAuthStore} from '@/store/auth.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      image: null,
    };
  },
  methods: {
    async submit() {
      const auth_store = useAuthStore()

      this.uploadImage(this.image);

      const response = await auth_store.register({
        username: this.username,
        password: this.password,
        email: this.email,
        image:this.image
      });

    },

    previewImage(){
      var file = document.getElementById("file").files;
      if (file.length > 0){
        var fileReader = new FileReader();

        fileReader.onload = function(event){
          document.getElementById("preview").setAttribute("src", event.target.result);
        }

        fileReader.readAsDataURL(file[0]);
        this.image = this.$ref.file.files.item(0)

      }
    },

    uploadImage(file){
      // const storage = getStorage();

      // const metadata = {
      //   contentType: 'image/png'
      // };

      // const storageRef = ref(storage, 'images/' + file.name);
      // const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //     console.log('File available at', downloadURL);
      //   });
      // }



      // const imageEndpoint = 'http:localhost:8000/images/'

        
      let formData = new FormData()
      formData.append('document',file)

      return axios.post('/upload/', formData, {
        headers:{
          "Content-Type":"multipart/form-data","X-CSRfToken":"{{ csrf_token }}"
        }
      })


    },

  },
};
</script>

<style lang="scss" scoped>
.img-profile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  height: 200px ;
  width: 200px;
  border:2px solid #cecece;
  border-radius: 20px;
}
.img-button{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.text-primary{
  color: #DA0037 !important;
}
.a:hover{
  color:#DA0037 !important;
}
.border-bottom {
    border-bottom: 5px #444444 !important;
    height: 80px;
  }
  
  .btn-primary {
    background-color: #DA0037 !important;
    border:0px
  }
  .btn-primary:hover {
    background-color: #860b2a !important;
  }
  
  .bg-secondary {
    background-color: #444444;
  }
  
  .border-bottom-4 {
    padding-bottom: 20px !important;
  }
  
  .masthead {
    padding-top: calc(6rem + 74px);
    padding-bottom: 6rem;
  }
  
  .masthead .masthead-heading {
    font-size: 2.75rem;
    line-height: 2.75rem;
  }
  
  .masthead .masthead-subheading {
    font-size: 1.25rem;
  }
  
  .masthead .masthead-avatar {
    width: 15rem;
  }
  
  @media (min-width: 992px) {
    .masthead {
      padding-top: calc(6rem + 104px);
      padding-bottom: 6rem;
    }
  
    .masthead .masthead-heading {
      font-size: 4rem;
      line-height: 3.5rem;
    }
  
    .masthead .masthead-subheading {
      font-size: 1.5rem;
    }
  }
  
  .page-section {
    padding: 6rem 0;
  }
  
  .page-section .page-section-heading {
    font-size: 2.25rem;
    line-height: 2rem;
  }
  
  @media (min-width: 992px) {
    .page-section .page-section-heading {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }
  
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: white !important
  }
  
  .nav-link:hover {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: white !important;
    background-color: #444444;
  }
</style>
