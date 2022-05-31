import axios from '../axios.js'

const getAllMentor = async () => {

    return await axios
        .get("user/mentor")
        .then((response) => {

            if (response.data.length) {
                return response.data;
            } else {
                return []
            }
        });
}

const getEstudies = async () => {
    return await axios
        .get("studies")
        .then((response) => {
            console.log(response.data)
            return response.data;
        });
}

const getCargos = async () => {
    return await axios
        .get("cargo")
        .then((response) => {
            console.log(response.data)
            return response.data;
        });
}

const getBusiness = async () => {
    return await axios
        .get("business")
        .then((response) => {
            console.log(response.data)
            return response.data;
        });
}

export default { getAllMentor, getEstudies, getCargos, getBusiness }