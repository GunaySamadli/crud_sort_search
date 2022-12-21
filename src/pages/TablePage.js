import React from 'react';
import Table from '../components/Table'

const TablePage = () => {
    
    const config = [
        {
            label: "Name",
            render: (user) => user.name
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

    const keyUser = (user) => {
        return user.id
    }


    return (
        <Table keyUser={keyUser} config={config}  />
    )
}

export default TablePage