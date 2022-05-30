import axios from '../axios.js'

const getAllMentor = async () => {
    
    return await axios
        .get("user/mentor")
        .then((response) => {
    
            if (response.data.length) {
                return response.data;
            }else{
                return []
            }
        });
}

export default { getAllMentor }