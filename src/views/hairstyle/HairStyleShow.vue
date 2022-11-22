<template>
  <!-- <div class="card">
    {{post[0]}}
    <div class="row ">
      <div class="col-sm-5">
        <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt="">
      </div>
      <div class="col-md-7 px-3">
        <div class="card-block px-6">

          <a class="mt-auto btn btn-primary justify-content-end" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg> Bookmark</a>
          <h4 class="card-title"> {{post.title}} </h4>
          <p class="card-text">
           {{post.detials}}
          </p>
          <br>
          <div class="d-inline p-2">
            <img src="post.userID.user_profile" style="width:100px;">
            <p>{{post.userID.name}}</p>
          </div>
        </div>

      </div>

    </div>
  </div> -->

  //Note by P'Ford
  <!-- <div>
    {{ $route.params.id }}
  </div> -->
</template>

<script>
import { usePost } from "@/store/post.js"
export default {
  data() {
    return {
      post: null
    }
  },
  async mounted() {
    try {
      // await axios post.show path $route.params.id
      // then store to this.post
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.card-block {
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, .1);
  box-shadow: none;

}

.card {
  font-size: 1em;
  overflow: hidden;
  padding: 5px;
  border: none;
  border-radius: .28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  margin-top: 20px;
}
</style>