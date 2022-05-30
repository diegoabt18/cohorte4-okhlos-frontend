import axios from '../axios.js'


const getAllStudents = async () => {
    return await axios
        .get("user/student")
        .then((response) => {
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
    });
}

const  registerStudent =  async (data) => {
    return await axios.post("/StudentMasiva", data.data)
    .then((res)=>{
         });
}

const getintereses= async () => {
     return await axios
        .get("interests")
        .then((response) => {
            
            const data=response.data;
            console.log(data)
            var datos=[]
            data.forEach(element => {
                datos.push(
                    {
                        value: element.id, label:element.name 
                    }
                )
            });
            console.log(datos)
            return datos
        });
}

export default { getAllStudents, logout, registerAll, getintereses }