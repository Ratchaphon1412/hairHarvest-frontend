<template>
<div class="card mt-5" style="width:70rem">
    <div class="row g-0">
        <div class="col-md-5">
        <img src="@/assets/hairOne.png" class="img-fluid rounded-start previewImg" alt="...">
        </div>
        <div class="col-md-7">
                <div class="card-body">
                    <div class="row">
                        <div class="col d-flex justify-content-end">

                        <a class="mt-auto btn btn-primary " href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>Save</a>

                        </div>
                    
                    <div class="row mt-2">
                        <h5 class="col card-title text-start">Hair title</h5>
                        <p class="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>

            </div>
            <div class="row ms-2 mt-4">
                <div class="col-2"><img class="profile-border floated-end" src="../assets/default.png"></div>
                <div class="col-1">
                    <label class="mt-2 text-start">ThisIsMyUsername101</label>
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

.card{
  align-items: center;
  text-align: center;
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

.previewImg{
  object-fit: cover;
  width: auto;
  height: auto;
}


</style>