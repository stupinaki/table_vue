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