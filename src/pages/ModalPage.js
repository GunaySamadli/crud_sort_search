import React, { useState } from 'react'
import Modal from '../components/Modal';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <button style={{ color: 'red' }} onClick={handleClose} >I Accept</button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p> I am here</p>
    </Modal>;
    return (
        <div className='modal-page' style={{ position: 'relative' }}>
            <button onClick={handleOpen}  >Add User</button>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, veritatis, beatae qui facilis enim non ipsam inventore cumque corporis reiciendis officia dignissimos iusto pariatur quaerat velit delectus nam recusandae nisi.
            </p>
            {
                showModal && modal
            }
        </div>
    )
}

export default ModalPage;