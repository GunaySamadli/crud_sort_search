import React from 'react'
import { useUsersContext } from '../../context/User';
import UserCreate from '../UserCreate';
import './index.scss';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Table = ({ config, keyUser }) => {

    const [{ users, showModal, handleClose, handleOpen }] = useUsersContext();

    const renderedHeaders = config.map((column) => {
        // if (column.header) {
        //   return <Fragment key={column.label}>{column.header()}</Fragment>;
        // }

        return <th key={column.label}>{column.label}</th>;
    });


    const modal = <UserCreate onClose={handleClose} />

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={handleOpen}  >Add User</button>

            {
                showModal && modal
            }
            <table className="table">
                <thead>
                    <tr className='table-header'>{renderedHeaders}</tr>
                </thead>
                <tbody>{users &&
                    users.map((user) => (
                        <tr key={user.id}>
                            <td >{user.name}</td>
                            <td >{user.surname}</td>
                            <td >{user.gender}</td>
                            <td >{user.balance}</td>
                            <td >{user.cart}</td>
                            <td ><AiFillEdit /></td>
                            <td ><AiFillDelete /></td>
                        </tr>
                    ))
                }</tbody>

            </table>
        </div>

    )

}

export default Table