export const EFilters = {
    equals: 'equals',
    contains: 'contains',
    less: 'less',
    more: 'more',
}

export const FILTER_OPTIONS = [
    {value: EFilters.equals, label: 'Равно'},
    {value: EFilters.contains, label: 'Содержит'},
    {value: EFilters.less, label: 'Меньше'},
    {value: EFilters.more, label: 'Больше'},
]

export const FILTER_SYMBOLS = {
    equals: function (inputData, data){
        return +inputData === data;
    },
    contains: function (inputData, data){
        return data.includes(inputData);
    },
    less: function (inputData, data){
        return data < +inputData;
    },
    more: function (inputData, data){
        return data > +inputData;
    },
}
