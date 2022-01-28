import {EFilters} from "../constants/filterOptions";


export const columns =  [
    {
        title: "Дата",
        key: 'date',
        sorted: false,
        filterBy: [
            EFilters.equals,
            EFilters.more,
            EFilters.less,
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
]