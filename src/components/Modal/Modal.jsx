import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({closeModal}) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()}  className="modal-container">
                <div className="upper-section">
                    <h1>Hello Viewer!!!</h1>
                    <p className="close" onClick={closeModal}>&times;</p>
                </div>
                <div className="middle-section">
                    <h3>I'm Pradeep a FrontEnd Developer!</h3>
                    <p>Do You Wish To Collab for a Project With Me ?</p>
                    <p>Conatct Me with the contact tab given..</p>
                    <p>OR Connect With ME On Linked-In --&gt;&gt;
                       
                    </p>
                </div>
                <div className="lower-section">
                    <a className='modal-btn btn-red' onClick={closeModal}>Close</a>
                    <a href='https://www.linkedin.com/in/pradeep-a-a43187221/' target="_blank" rel='noreferrer' className='modal-btn btn-green'>
                        Connect Now!!
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}
 
export default Modal;