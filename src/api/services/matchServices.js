import axios from '../axios.js'


const getPrograms = async () => {
    
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
                return datos
        });
}



export default { getPrograms }