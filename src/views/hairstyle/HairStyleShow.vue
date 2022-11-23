<template>

  <div class="container h-100 container-size">

      <div class="card text-black form-bg" style="border-radius: 25px">
        <div class="row g-0">
          
          <div class="col-md-6">
            <img class="img-fluid rounded-start previewImg" src="@/assets/cardThree.png" alt="">
          </div>
      
        <div class="col-md-6">
          <div class="card-body">
            <a class="mt-2 btn btn-primary" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg> Bookmark</a>
                    <h4 class="card-title mt-3">title</h4>
                    <p class="card-text">
                      detailogevrufjivuiyfrtgyht6derftgyhju6derftgykio6edr5hyjki6erftgyuki6ed5ghjkiol6edf6gyhjke5rghjki6edrftjikerftgykoreftgyhuji
                    </p>
                    <br>

                    <div class="row">

                      <div class="col"><img class="profile-border" src="@/assets/default.png">
                        <label class="ms-3">Username</label>
                      </div>

                    </div>
          </div>
        </div>
      </div>
      </div>



      <!-- <div class="col-lg-12 col-xl-8">
        <div class="card text-black form-bg" style="border-radius: 25px">
              <div class="row">
                <div class="col">
                  <img class="img-fluid rounded-start previewImg" src="@/assets/cardThree.png" alt="">
                </div>
                <div class="col">
                    <a class="mt-2 btn btn-primary justify-content-end" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg> Bookmark</a>
                    <h4 class="card-title mt-3">title</h4>
                    <p class="card-text">
                      detail
                    </p>
                    <br>
                    <div class="d-inline p-2">
                      <img src="@/assets/default.png" style="width:100px;">
                      <p>Username</p>
                    </div>
                </div>
              </div>
        </div>
      </div> -->
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
.previewImg{
  object-fit: cover;
  height: 500px ;
  width: 400px;
}
.container-size{
  width: 50%;
}

.profile-border{
  border: 4px solid #DA0037;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #2c2b2b;
  border-left-color: #2c2b2b;
  border-right-color: #2c2b2b;
  width: 50px;
  height: 50px;
}

</style>