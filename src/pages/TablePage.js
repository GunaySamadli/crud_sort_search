import React from 'react';
import SortableTable from '../components/SortableTable';
import { useUsersContext } from '../context/User';

const TablePage = () => {

    const [{ users }] = useUsersContext();
    
    const config = [
        {
            label: "Name",
            render: (user) => user.name,
            sortValue: (user) => user.name,
        },
        {
            label: "Surname",
            render: (user) => user.surname,
            sortValue: (user) =>user.surname,
        },
        {
            label: "Gender",
            render: (user) => user.gender
        },
        {
            label: "Balance",
            render: (user) => user.balance,
            sortValue: (user) =>user.balance,
        },
        {
            label: "Card",
            render: (user) => user.cart
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