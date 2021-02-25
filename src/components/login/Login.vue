<template>
<div class="form">
  <form action="">
    <div class="form-group">

      <input type="email" class="form-control"  placeholder="手机号或邮箱">
    </div>
    <div class="form-group">

      <input type="password" class="form-control"   placeholder="密码">
    </div>
    <button class="btn1 btn border-0" type="submit">登录</button>
    <div class="check">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
        <label class="custom-control-label" for="customCheck">记住我？</label>
      </div>
      <span><a href="/regsiter">无法登录?</a></span>
    </div>
  </form>

  <div class="login">
    <a href="javascript:;">社交账户登录</a>
  </div>

  <div class="download">
    <button class="btn btn-outline-primary w-100">下载知乎APP</button>
  </div>
</div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
.form form{
  display: flex;
  flex-direction: column;
}
form{
  width: 540px;
}
form input{
  margin: 10px 0px;
}
.btn1{
  background-color: #286090;
  color: #ffffff;
}
.check{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-top: 10px;
}
.login{
  text-align: left;
  margin-top: 20px;
}
.download{
  margin-top: 20px;
}
</style>