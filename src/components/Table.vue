<template>
  <div>
    <FilterInputs
        :columns="columns"
        @submit="handleFilteredRows"
    />

    <table class="table table-bordered">
      <TableHeader
          :columns="columns"
          @sort="handleSortRows"
      />
      <TableRow
          v-for="row in sortedRows"
          :key="row.id"
          :columns="columns"
          :row="row"
      />

    </table>

    <p>{{filteredRows}}</p>
  </div>
</template>

<script>
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import FilterInputs from "./FilterInputs";
import {FILTER_SYMBOLS} from "../constants/filterOptions";

export default {
  name: 'Table',
  components: {
    TableRow,
    TableHeader,
    FilterInputs,
  },
  data() {
    return {
      sortParams: null,
      filterParams: undefined,
    }
  },
  props: {
    columns: Array,
    rows: Array,
  },
  methods: {
    handleFilteredRows(filterParams){
      this.$data.filterParams = filterParams;
      console.log({filterParams})
    },
    handleSortRows(column) {
      const {sortParams} = this.$data;
      if(sortParams?.key === column.key){
        this.$data.sortParams = {
          ...sortParams,
          desc: !sortParams.desc,
        }
        return;
      }
      this.$data.sortParams = {
        key: column.key,
        desc: true,
      }
    },
  },

  computed: {
    filteredRows() {
      const unfilteredRows = this.$props.rows;
      if(!this.$data.filterParams){
        return unfilteredRows;
      }
      const {filterColumnTitle, filterParameter, inputData} = this.$data.filterParams;

      return unfilteredRows.slice().filter(row => {
        const symbolFn = FILTER_SYMBOLS[filterParameter];
        const data = row[filterColumnTitle];
        return symbolFn(inputData, data)
      });
    },
    targetSortColumn() {
      const {sortParams} = this.$data;
      const {columns} = this.$props;

      const keyForSort = sortParams.key;
      const columnForSort = columns.find(column => column.key === keyForSort);
      return columnForSort.sort;
    },
    sortedRows() {
      const {sortParams} = this.$data;
      const {rows} = this.$props;
      if (!sortParams){
        return rows;
      }
      return rows.slice().sort((a, b) => {
        if(sortParams.desc){
          return this.targetSortColumn
              ? this.targetSortColumn(a, b)
              : a[sortParams.key] - b[sortParams.key];
        }
        return this.targetSortColumn
            ? this.targetSortColumn(b, a)
            : b[sortParams.key] - a[sortParams.key];
      })
    },
  }
}
</script>

<style>
th, td {
  padding: 8px;
}

</style>
