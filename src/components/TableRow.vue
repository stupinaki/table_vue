<template>
  <tr>
    <td
        v-for="column in columns"
        :key="column.key"
    >
     {{row[column.key]}}
    </td>
  </tr>
</template>


<script>
export default {
  name: 'TableRow',
  props: {
    row: Object,
    columns: Array,
  },
}
</script>