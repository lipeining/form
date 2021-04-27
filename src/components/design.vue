<template>
  <div>
    <fc-designer ref="designer" />
    <el-row>
      <el-button round @click="getRule">getRule</el-button>
      <el-button type="primary" @click="getOption">getOption</el-button>
      <el-button type="success" @click="setRule">setRule</el-button>
      <el-button type="info" @click="setOption">setOption</el-button>
      <el-button type="waring" @click="display">display</el-button>
      <el-button type="error" @click="disabled">disabled</el-button>
    </el-row>
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
// <router-link :to="{ name: 'list', params: { corpId: 1, userId: 1, formId: 1 }}">List</router-link>
// <router-link :to="{ name: 'info', params: { corpId: 1, userId: 1, formId: 1, recordId: 1 }}">Info</router-link>
// import formCreate from '@form-create/element-ui';
export default {
  name: "App",
  components: {},
  data() {
    return {
      fApi: {},
      value: {
        // field1:'111',
        // field2:'222',
        // time:'11:11:11',
      },
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
      },
      rule: [
        // {type:'input', field:'field1',title:'field1',value:'aaa'},
        // {type:'input', field:'field2',title:'field2',value:'sss'},
        // {type:'timePicker', field:'time',title:'time',value:'12:12:12'},
        // {
        //     type:'ElButton',
        //     title:'Modify field1',
        //     native: false,
        //     on:{
        //         click: ()=>{
        //             this.rule[0].value+='a'
        //         }
        //     },
        //     children: ['Click'],
        // }
      ],
    };
  },
  methods: {
    disabled() {
      this.fApi.disabled(true);
      this.fApi.btn.show(false);
    },
    display() {
      this.rule = this.$refs.designer.getRule();
      // this.options = this.$refs.designer.getOption()
    },
    getRule() {
      console.log("getRule!");
      console.log(this.$refs.designer.getRule());
    },
    setRule() {
      console.log("setRule!");
    },
    getOption() {
      console.log("getOption!");
      console.log(this.$refs.designer.getOption());
    },
    setOption() {
      console.log("setOption!");
    },
    makeTemplate() {
      //          const rule = this.$refs.designer.getRule()
      //          const opt = this.$refs.designer.getOption()
      //          const ruleStr = formCreate.toJson(rule).replaceAll('\\','\\\\')
      //          const optStr = JSON.stringify(opt)
      //          return `<template>
      //          <form-create
      //            v-model="fapi"
      //            :rule="rule"
      //            :option="option"
      //            @submit="onSubmit"
      //          ></form-create>
      //        </template>
      //
      //        <script>
      //        import formCreate from "@form-create/element-ui";
      //
      //        export default {
      //          data () {
      //            return {
      //                fapi: null,
      //                rule: formCreate.parseJson('${ruleStr}'),
      //                option: formCreate.parseJson('${optStr}'),
      //            }
      //          },
      //          methods: {
      //            onSubmit (formData) {
      //              //todo 提交表单
      //            }
      //          }
      //        }
      //        <\/script>`
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
