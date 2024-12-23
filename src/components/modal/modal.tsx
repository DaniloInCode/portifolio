import React from "react";
import ReactModal from "react-modal";


interface props {
    nome : String
}

export default function Modal(props : props){

    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false)
  }

    return (
        <ReactModal 
           isOpen={modalIsOpen}
           contentLabel="onRequestClose Example"
           onRequestClose={closeModal}
           className="Modal"
           overlayClassName="Overlay"
          >
                <span id='appbar_modal'>
                <h1 onClick={closeModal}>❌</h1>                 
                </span>
                <div id='text_modal'></div>
            </ReactModal>
    )
}