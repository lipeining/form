<template>
  <div>
    <el-table :data="rows" stripe style="width: 100%">
      <el-table-column
        :key="col.prop"
        :label="col.label"
        :prop="col.prop"
        v-for="col in cols"
      >
      </el-table-column>
      <el-table-column label="操作" prop="option">
      </el-table-column>
    </el-table>
    <el-row>
      <li>
        上一页
      </li>
      <li>
        下一页
      </li>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    userId: String,
    corpId: String,
    formId: String,
  },
  data() {
    return {
      rows: [],
      cols: [],
    };
  },
  async mounted() {
    await this.list();
  },
  methods: {
    async list() {
      const url = `/api/corps/${this.corpId}/forms/${this.formId}/records`;
      const response = await this.axios.get(url);
      console.log(response);
      // { rows:[{ key: value }], count, cols:[{prop, label}] }
      this.rows = response.data.rows;
      this.cols = response.data.cols;
    },
  },
};
</script>

