<template>
  <div class="container">
    <main class="py-5 text-center">
      <div class="pt-5 text-center">
        <h2>สร้างโพสตผม</h2>
      </div>
    </main>
  <form class="row g-3">
    <div class="col-12">
      <label for="inputEmail4" class="form-label">ชื่อสไตล์ผม</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>

    <div class="col-md-6">
      <label for="inputAddress" class="form-label">เลือกสีผม</label>
      <select id="inputState" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="inputState" class="form-label">เลือกแบบผม</label>
      <select id="inputState" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-12">
      <label for="inputZip" class="form-label">รายละเอียด</label>
      <textarea class="form-control" type="text" id="inputZip"> </textarea>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
  </div>

</template>

<script>
    export default{
      data() {
        return {
          post: {
            name:""
            
          },
          error:null
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>