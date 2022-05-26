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


const  registerAll =  async (data) => {
    return await axios.post("/StudentMasiva", data.data)
    .then((res)=>{
        console.log(res)
    });
}


export default { getAllStudents, logout, registerAll }