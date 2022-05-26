import axios from '../axios.js'


const getPrograms = async () => {
    //console.log(username, password)
    return await axios
        .get("cohorte")
        .then((response) => {
            
            const data=response.data;
            var datos=[]
            data.forEach(element => {
                datos.push(
                    {
                        value: element.cohort, label: 'cohorte '+element.cohort 
                    }
                )
            });
            console.log(datos)
            return datos
        });
}



export default { getPrograms }