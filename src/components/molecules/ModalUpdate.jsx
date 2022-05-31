import React, { useState } from 'react'
import Modal from 'react-modal';
import { XCloseBtn } from '../atoms';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const ModalUpdate = ({ state, setState, children }) => {


    function openModal() {
        setState(true);
    }


    function closeModal() {
        setState(false);
    }


    return (
        <div className=''>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={state}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="bg-PrimarioColor2 rounded-xl p-2 flex justify-between">
                    <div >
                        <h3 className="text-lg font-bold">Actualizar estudiante</h3>
                    </div>
                    <XCloseBtn func={closeModal}/>
                </div>
                <br/>
                {children}
            </Modal>
        </div>
    )
}

export default ModalUpdate