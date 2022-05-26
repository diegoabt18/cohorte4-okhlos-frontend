import React from "react";
import { PageOptionsTitle } from "../molecules";
import MatchTableOptions from "../organisms/MatchTableOptions";
import { BasicTable } from "../organisms";

const PlantillaMatch = () => {
  const datos={
    data:[],
    file:true,
    columnas:[["estudiante", "mentor"]]

  }
  return (
    <div className='grid' >
      <div className='pt-6 pb-4 px-4 font-Roboto font-bold'>
            <PageOptionsTitle text={"Realizar Match"} />
            <MatchTableOptions />
      </div>

      <div>
        <BasicTable datos={datos}/>
      </div>
    </div>
  );
};

export default PlantillaMatch;
