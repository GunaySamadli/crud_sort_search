import React, { Fragment } from 'react'
import { useUsersContext } from '../../context/User';
import UserCreate from '../UserCreate';
import './index.scss';
import { AiFillDelete } from "react-icons/ai";
import { userService } from '../../APIs/Services/User';
import { useState } from 'react';

const Table = ({ config, data }) => {


    const [search, setSearch] = useState("");


    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const [{ showModal, handleClose, handleOpen }] = useUsersContext();

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>;
    });

    const modal = <UserCreate onClose={handleClose} />

    const handleDelete = (id) => {
        userService.deleteUser(id);
    }


    return (
        <div style={{ position: 'relative' }}>

            <div className='body_header'>
                <div className='search_section'>
                    <input onChange={handleChange} type="text" name="search" placeholder='Search' />
                </div>

                <button onClick={handleOpen}  >Add User</button>
            </div>

            {showModal && modal}

            <table className="table">
                <thead>
                    <tr className='table-header'>{renderedHeaders}</tr>
                </thead>
                <tbody>
                    {data &&
                        data.filter((val) => {
                            if (search === "") {
                                return val
                            } else if (
                                (val.name.toLowerCase().includes(search.toLocaleLowerCase())) || (val.surname.toLowerCase().includes(search.toLocaleLowerCase()))) {
                                return val;
                            }
                        }).map((user) => (
                            <tr key={user.id}>
                                <td >{user.name}</td>
                                <td >{user.surname}</td>
                                <td >{user.genderId === 1 ? "Man" : "Female"}</td>
                                <td >{user.balance}</td>
                                <td >{user.cart}</td>
                                <td onClick={() => handleDelete(user.id)}><AiFillDelete /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >

    )

}

export default Table