<template>
<div class="container">
  <h3>与世界分享你的知识、经验和见解</h3>
<div class="login">
  <router-link to="/login">登录</router-link>
  <router-link to="/regsiter">注册</router-link>
</div>
  <router-view></router-view>
</div>
</template>

<style scoped>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.container{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: monospace, monospace;
}
.login{
  display: flex;
}
.login a{
  padding: 20px;
}
</style>
