<template>
  <section class="login">
    <header class="login-header">
      <h1 class="brand"></h1>
      <el-alert
        v-if="error"
        :title="error.title"
        type="warning"
        :description="error.message"
        show-icon
      />
    </header>

    <el-form
      class="login-form"
      auto-complete="off"
      :model="user"
      label-width="75px"
      :rules="rules"
      ref="loginForm"
    >
      <h2 class="heading">Login</h2>
      <el-form-item label="name" prop="name">
        <el-input
          type="text"
          v-model="user.name"
          placeholder="Please enter name"
          @keydown.enter.native="submit('loginForm')"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input
          type="password"
          v-model="user.password"
          placeholder="Please enter password"
          @keydown.enter.native="submit('loginForm')"
        >
        </el-input>
      </el-form-item>
      <el-button type="primary" :loading="loading" @click="submit('loginForm')">
        {{ loading ? "Loading..." : "Login" }}
      </el-button>
    </el-form>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "login",
  components: {},
  data() {
    const user = {
      name: "",
      password: "",
    };
    // form validate rules
    const rules = {
      name: [{ required: true, message: "请输入邮箱", type: "string" }],
      password: [
        { required: true, message: "请输入密码" },
        { min: 2, max: 16, message: "长度在 2 到 16 个字符" },
      ],
    };
    return {
      user: user,
      rules: rules,
      error: null,
      loading: false,
    };
  },
  methods: {
    submit(formName) {
      // form validate
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        } else {
          // validated
          this.error = null;
          this.loading = true;
          const userId = uuidv4().replace(/-/g, '');
          const user = {
            userId: userId,
            corpId: userId,
            name: this.user.name,
            password: this.user.password,
          };
          this.$store.dispatch("setuser", user);
          this.$router.replace({ path: this.$route.query.redirect || "/" });
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  flex: 1;
  width: 95%;
  max-width: 22rem;
  margin: 0 auto;
  font-size: 0.875rem;
}
.login .login-header {
  margin-bottom: 1rem;
}
.login .login-header .brand {
  margin: 4.5rem 0 3.5rem;
  text-align: center;
  letter-spacing: 0.125rem;
}
.login .login-header brand a {
  margin: 0;
  color: #d3dce6;
  font: 300 3rem sans-serif;
}
.login .login-header brand a :hover {
  color: #ffffff;
  text-shadow: 0 0 1rem #ffffff;
}
.login .login-form {
  margin-bottom: 2.5rem;
  padding: 1.875rem 1.25rem;
  background: #f8f9fb;
  color: #2b3b49;
}
.login .login-form .heading {
  margin: 0 0 1rem;
  font-weight: 400;
  font-size: 1.5rem;
}
.login .login-form .el-button {
  margin-top: 0.5rem;
  width: 100%;
}

.login .login-footer {
  margin-bottom: 1rem;
  padding: 0.625rem;
  border: 0.0625rem solid #d3dce6;
  font-size: 0.75rem;
  text-align: center;
}
.login .login-footer a {
  color: #d3dce6;
}
</style>
