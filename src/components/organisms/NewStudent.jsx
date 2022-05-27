import React from "react";
import BasicButton from "../atoms/BasicButton";
import DataStudent from "../molecules/DataStudent";

const NewStudent = ({ text }) => {
    return (
        <div >            
    
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box h-[80%] w-screen flex flex-col justify-between overflow-hidden">
                   <div>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Agregar nuevo estudiante</h3>
                        <div className="py-7">
                            <DataStudent />
                        </div>
                   </div>
                    <div className='flex justify-end w-full '>
                        <BasicButton text={'Submit'} />
                    </div>
                </div>
            </div>
  
        </div >
    );
};

export default NewStudent;
