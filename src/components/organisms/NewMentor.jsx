import React from 'react'
import { BasicButton } from '../atoms'
import { DataMentor } from '../molecules'

const NewMentor = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box h-[80%] w-screen flex flex-col justify-between overflow-hidden">
                   <div>
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Agregar nuevo Mentor</h3>
                        <div className="py-7">
                            <DataMentor />
                        </div>
                   </div>
                    <div className='flex justify-end w-full '>
                        <BasicButton text={'Submit'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMentor