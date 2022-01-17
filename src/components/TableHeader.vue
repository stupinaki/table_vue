<template>
  <tr>
    <th
        v-for="column in columns"
        :key="column.title"
        @click="handleSort(column)"
        :class="column.sorted && 'pointed'"
    >
      {{ column.title }}
    </th>
  </tr>
</template>


<script>
export default {
  name: 'TableHeader',
  props: {
    columns: Array,
  },
  methods: {
    handleSort(column){
      if(column.sorted){
        return this.$emit('sort', column);
      }
    }
  },
}
</script>

<style>
.pointed {
  cursor: pointer;
}
</style>