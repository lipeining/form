<template>
  <div>
    <info
      :userId="user.userId"
      :corpId="user.corpId"
      :formId="formId"
      :recordId="recordId"
    />
  </div>
</template>

<script>
import Info from ".././components/info";
import { mapGetters } from "vuex";
export default {
  name: "InfoPage",
  components: {
    Info,
  },
  data() {
    return {
      formId: "1",
      recordId: "1",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.formId = this.$route.query.formId || "1";
    this.recordId = this.$route.query.recordId || "1";
    // console.log(this.formId, this.$route);
    // console.log(this.$store.state.user);
  },
  methods: {},
};
</script>

<style></style>
