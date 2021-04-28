<template>
  <div>
    <list :userId="user.userId" :corpId="user.corpId" :formId="formId" />
  </div>
</template>

<script>
import List from ".././components/list";
import { mapGetters } from "vuex";
export default {
  name: "ListPage",
  components: {
    List,
  },
  data() {
    return {
      formId: "1",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.formId = this.$route.query.formId || "111";
    console.log(this.formId, this.$route);
    // console.log(this.$store.state.user);
  },
  methods: {},
};
</script>

<style></style>
