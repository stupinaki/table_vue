<template>
  <div id="app">
    <FilterInputs
        :columns="columns"
        @submit="handleSubmit"
    />
    <Table
        :columns="columns"
        :rows="rows"
        :filters="filters"
    />
  </div>
</template>

<script>
import Table from './components/Table.vue';
import FilterInputs from "./components/FilterInputs";
import {EFilters} from "./constants/filterOptions";

export default {
  name: 'App',
  //аналогично стейту
  data() {
    // todo add id to rows
    return {
      columns: [
          {
            title: "Дата",
            key: 'date',
            sorted: false,
            filterBy: [
              EFilters.equals,
              EFilters.more,
              EFilters.more
            ]
          },
          {
            title: "Название",
            key: 'name',
            sorted: true,
            sort(a, b) {
              return a.name.localeCompare(b.name);
            },
            filterBy: [
              EFilters.equals,
              EFilters.contains,
            ]
            },
          {
            title: "Количество",
            key: 'count',
            sorted: true,
            filterBy: [
              EFilters.equals,
              EFilters.more,
              EFilters.less,
            ]
          },
          {
            title: "Расстояние",
            key: 'distance',
            sorted: true,
            filterBy: [
              EFilters.equals,
              EFilters.more,
              EFilters.less,
            ]
          },
      ],
      rows: [
        {
          date: '2020-01-02',
          name: 'Название 1',
          count: 23,
          distance: 20,
        },
        {
          date: '2020-02-01',
          name: 'Название 3',
          count: 24,
          distance: 2030,
        },
        {
          date: '2019-01-01',
          name: 'Название 2',
          count: 22,
          distance: 2003,
        },
        {
          date: '2020-01-01',
          name: 'aaaa 1',
          count: 25,
          distance: 3,
        },
      ],
      filters: null,
    }
  },
  components: {
    Table,
    FilterInputs,
  },
  methods: {
    handleSubmit(filters){
      this.$data.filters = filters;
      console.log({filters})
    }
  },
  computed: {

  }
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
