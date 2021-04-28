<template>
  <el-row>
    <el-header>
      <el-menu
        :router="true"
        :default-active="$route.path"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/"> Home</el-menu-item>
        <!-- <el-menu-item index="/timeslider"> TimeSlider</el-menu-item> -->
        <el-menu-item index="/list">list</el-menu-item>
        <el-menu-item index="/info">info</el-menu-item>
        <el-menu-item index="/design">design</el-menu-item>
        <el-submenu index="">
          <template slot="title">{{ user.name || "" }}</template>
          <el-menu-item index="">
            <i @click="login()">login </i>
          </el-menu-item>
          <el-menu-item index="">
            <i @click="logout()">logout </i>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app-header",
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    login() {
      this.$store.dispatch("setuser", {
        userId: "1",
        name: "test-form",
        corpId: "1",
      });
    },
    logout() {
      this.$store.dispatch("deluser");
    },
  },
};
</script>

<style scoped></style>
