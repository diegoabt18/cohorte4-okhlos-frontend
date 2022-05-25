import axios from '../axios.js'

const getAllMentor = async () => {
    //console.log(username, password)
    return await axios
        .get("user/mentor")
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data;
            }else{
                return []
            }
        });
}

export default { getAllMentor }