<template>
  <form>
    <select
        v-model="filterColumnTitle"
        class="form-select form-select-lg mb-3"
        @change="onSubmit"
    >
      <option
          v-for="option in filterColumns"
          :key="option.value"
          :disabled="option.disabled || false"
          :label="option.label"
          :value="option.value"
      />
    </select>

    <select
        v-model="filterParameter"
        class="form-select form-select-lg mb-3"
        @change="onSubmit"
    >
      <option
          v-for="option in filterOptions"
          :key="option.label"
          :disabled="option.disabled || false"
          :label="option.label"
          :value="option.value"
      />
    </select>

    <input
        v-model="inputData"
        class="input"
        placeholder="Введите значение для фильтрации"
        type="text"
        @input="onInput"
    >
  </form>
</template>

<script>
import {FILTER_OPTIONS} from '../constants/filterOptions';
import {EMPTY_OPTION} from '../constants/emptyOption';
import {debounce} from "../utils/debounce";

export default {
  name: 'FilterInputs',
  props: {
    columns: Array,
  },
  data() {
    return {
      filterParameter: null,
      filterColumnTitle: null,
      inputData: null,
      FILTER_OPTIONS,
      onInput: debounce(this.onSubmit, 2000),
    }
  },
  computed: {
    filterOptions() {
      const {filterColumnTitle} = this.$data;
      if (filterColumnTitle) {
        const targetColumn = this.$props.columns.find(column => column.key === filterColumnTitle);
        return [
          EMPTY_OPTION,
          ...FILTER_OPTIONS.filter(option => targetColumn.filterBy.includes(option.value))
        ];
      }
      return [
        EMPTY_OPTION,
        ...FILTER_OPTIONS
      ];
    },

    filterColumns() {
      return [
        EMPTY_OPTION,
        ...this.$props.columns.map(c => ({
          value: c.key, label: c.title
        }))
      ];
    },
    createObjectWithFilterParams() {
      const {filterColumnTitle, filterParameter, inputData} = this;
      return {
        filterColumnTitle,
        filterParameter,
        inputData,
      };
    }
  },
  methods: {
    onSubmit() {
      const objectValues = Object.values(this.createObjectWithFilterParams);
      if (objectValues.every(param => param)) {
        this.$emit('submit', this.createObjectWithFilterParams);
      }
    },
  }
}

</script>

<style scoped>
form {
  display: flex;
  justify-content: flex-end;
}

/*todo use bootstrap*/
.input {
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1.25rem;
  color: #212529;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>