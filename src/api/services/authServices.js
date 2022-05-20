import React from 'react'
import axios from '../axios.js'

const login = async (username, password) => {
    console.log(username, password)
    const data = {
        username: username,
        password: password
    }
    return await axios
        .post("login/", data)
        .then((response) => {

            console.log(response.data)
            if (response.data.access) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user");
}


const register = (username, password, name, role, last_name, email, address, cellphone) => {
    return axios.post("user", {
        username,
        password,
        name,
        role,
        last_name,
        email,
        address,
        cellphone
    });
}


export default { login, logout, register }