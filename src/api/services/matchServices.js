import axios from '../axios.js'


const getPrograms = async () => {
    
    return await axios
        .get("cohorte")
        .then((response) => {
            
            const data=response.data;
            var datos=[]
            data.forEach(element => {
                if (element.cohort == 0 ){
                    datos.push(
                        {
                            value: element.cohort, label: 'Proyectate' 
                        }
                    )
                }else{
                    datos.push(
                    {
                        value: element.cohort, label: 'Programate Cohorte '+element.cohort 
                    }
                )}

                
            });
                return datos
        });
}

const matchMasivo = async (data) => {
    console.log(data)
    return await axios.post("MatchMassive", data)
        .then((res) => {
            return res.data
        });
}


export default { getPrograms, matchMasivo }