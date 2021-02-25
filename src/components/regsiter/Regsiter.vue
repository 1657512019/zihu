<template>
  <div class="form">
    <form action="">

      <div class="form-group">
        <input type="text" class="form-control" placeholder="姓名">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" placeholder="手机号(仅支持中国大陆)">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="密码(不少于6位)">
      </div>


      <button class="btn1 btn border-0" type="submit">注册知乎</button>
      <h6>点击注册按钮，即代表你同意 <a href="javascript:;">《知乎协议》</a></h6>

    </form>
    <div class="download">
      <button class="btn btn-outline-primary w-100">下载知乎APP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regsiter"
}
</script>

<style scoped>
.form form {
  display: flex;
  flex-direction: column;
}

form {
  width: 540px;
}

form input {
  margin: 10px 0px;
}

.btn1 {
  background-color: #286090;
  color: #ffffff;
}

.check {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}

.login {
  text-align: left;
  margin-top: 20px;
}

.download {
  margin-top: 20px;
}
h6{
  margin-top: 20px;
}
</style>