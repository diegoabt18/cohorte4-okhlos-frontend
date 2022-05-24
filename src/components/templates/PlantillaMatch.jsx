import React from "react";
import { PageOptionsTitle } from "../molecules";
import MatchTableOptions from "../organisms/MatchTableOptions";

const PlantillaMatch = () => {
  return (
    <div className='grid' >
      <div className='pt-6 pb-4 px-4 font-Roboto'>
            <PageOptionsTitle text={"Realizar Match"} />
            <MatchTableOptions />
      </div>

      <div>
        <h1>A Q U I _______V A_______L A________T A B L A </h1>
      </div>
    </div>
  );
};

export default PlantillaMatch;
