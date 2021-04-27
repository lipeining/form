<template>
  <div>
    <el-row>
      <form-create
        :rule="rule"
        v-model="fApi"
        :option="options"
        :value.sync="value"
      />
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    userId: String,
    corpId: String,
    formId: String,
    recordId: String,
  },
  data() {
    return {
      fApi: {},
      value: {},
      options: {},
      rule: [],
    };
  },
  async mounted() {
    await this.info();
  },
  methods: {
    addHook() {
      this.addSubmitHook();
    },
    addSubmitHook() {
      this.options.onSubmit = (formData) => {
        alert(JSON.stringify(formData));
      };
    },
    async format() {
      const url = `/api/corps/${this.corpId}/forms/${this.formId}`;
      const response = await this.axios.get(url);
      // { formId, rule:[], options:{} }
      console.log(response);
      this.rule = response.data.rule;
      this.options = response.data.options;
      this.addHook(response.data);
    },
    async info() {
      await this.format();
      const url = `/api/corps/${this.corpId}/forms/${this.formId}/records/${this.recordId}`;
      const response = await this.axios.get(url);
      // { key: value }
      console.log(response);
      //   this.value = response.data;
      this.fApi.setValue(response.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
