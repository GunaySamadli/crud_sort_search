import { HttpClient } from "../HttpClient";

class UserService extends HttpClient {
    constructor() {
        super("http://localhost:3000")
    }

    getAllUsers() {
        return this.get("users");
    }

    createNewUser(body) {
        return this.post("users", body);
    }

    editUser(id, body) {
        return this.put("users", body, id)
    }

    deleteUser(id, body) {
        return this.delete("users", body, id)
    }

}

export const userService = new UserService();