<template>
  <div id="app">
    <Table
        :columns="columns"
        :rows="rows"
    />
  </div>
</template>

<script>
import Table from './components/Table.vue';
import {columns} from "./data/columns";
import {rows} from "./data/rows";

export default {
  name: 'App',
  data() {
    // todo add id to rows
    return {
      columns: columns,
      rows: rows,
      filters: null,
    }
  },
  components: {
    Table,
  },

}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
