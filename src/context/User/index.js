import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { userService } from "../../APIs/Services/User";

const UserContext = createContext([]);

function UserProvider({ children }) {

    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(({ data }) => setUsers(data))
    }, [])


    return (
        <UserContext.Provider value={[{ users, setUsers, showModal, handleClose, handleOpen }]} >
            {children}
        </UserContext.Provider>
    )
}

const useUsersContext = () => {
    const usersContext = useContext(UserContext);
    return usersContext
}

export { useUsersContext, UserProvider }

