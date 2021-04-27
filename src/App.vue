<template>
  <div id="app">
    <design/>
    <List corpId="1" userId="1" formId="1" />
    <Info corpId="1" userId="1" formId="1" recordId="1"/>
  </div>
</template>

<script>

import Design from "./components/design"
import List from './components/list'

import Info from './components/info'
export default {
  name: "App",
  components: {
    Design,
    List,
    Info,
  },
  data() {
    return {
    };
  },
  methods: {
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
