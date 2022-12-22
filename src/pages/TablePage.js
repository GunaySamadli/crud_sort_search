import React from 'react';
import SortableTable from '../components/SortableTable';
import { useUsersContext } from '../context/User';

const TablePage = () => {

    const [{ users }] = useUsersContext();
    
    const config = [
        {
            label: "Name",
            render: (user) => user.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: "Surname",
            render: (user) => user.surname
        },
        {
            label: "Gender",
            render: (user) => user.gender
        },
        {
            label: "Balance",
            render: (user) => user.balance
        },
        {
            label: "Card date",
            render: (user) => user.cart
        },
        {
            label: "Edit",
            render: (user) => user.edit
        },
        {
            label: "Delete",
            render: (user) => user.delete
        }
    ];


    return (
        <SortableTable users={users}  config={config} />
    )
}

export default TablePage