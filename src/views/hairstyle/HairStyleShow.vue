<template>
  <div class="card">
    <div class="row ">
      <div class="col-sm-5">
        <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt="">
      </div>
      <div class="col-md-7 px-3">
        <div class="card-block px-6">

          <a class="mt-auto btn btn-primary justify-content-end" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg> Bookmark</a>
          <h4 class="card-title">Horizontal Card with Carousel - Bootstrap 4 </h4>
          <p class="card-text">
            The Carousel code can be replaced with an img src, no problem. The added CSS brings shadow to the card and
            some adjustments to the prev/next buttons and the indicators is rounded now. As in Bootstrap 3
          </p>
          <p class="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div
            above the col containing the text for left alignment of images</p>
          <br>
          <div class="d-inline p-2">
            <img src="src/assets/logo.png" style="width:100px;">
            <p>User Name</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {

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