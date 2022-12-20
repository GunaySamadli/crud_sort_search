import React from 'react'
import { useUsersContext } from '../../context/User'
import UserCreate from '../UserCreate';

const Table = () => {

    const [{ users, showModal, handleClose, handleOpen }] = useUsersContext();

    const renderedUser = users.map(({ id, name, surname, balance, cart }) => {
        return (
            <div key={id}>
                <div>{name}</div>
            </div>
        )
    });

    const modal = <UserCreate onClose={handleClose} />

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={handleOpen}  >Add User</button>
            {users && renderedUser}
            {
                showModal && modal
            }
        </div>
    )
}

export default Table