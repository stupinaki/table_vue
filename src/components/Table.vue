<template>
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
</template>

<script>
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default {
  name: 'Table',
  components: {
    TableRow,
    TableHeader,
  },
  data() {
    return {
      sortParams: null,
    }
  },
  props: {
    columns: Array,
    rows: Array,
    filters: Object,
  },
  methods: {
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
    // filtredRows() {
    //   const unfilteredRows = this.$props.rows;
    //   const {filterColumnTitle, filterParameter, inputData} = this.$props.filters;
    //   const filteredRows = unfilteredRows.filter(row => row[filterColumnTitle] === inputData);
    //
    // }
  }
}
</script>

<style>
th, td {
  padding: 8px;
}

</style>
