import axios from '../axios.js'

const getAllStudents = async () => {
    //console.log(username, password)
    return await axios
        .get("user/student")
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data;
            }else{
                return []
            }
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


export default { getAllStudents, logout, register }