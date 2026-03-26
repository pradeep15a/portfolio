import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({closeModal}) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()}  className="modal-container">
                <div className="upper-section">
                    <h1>Hello there!</h1>
                    <p className="close" onClick={closeModal}>&times;</p>
                </div>
                <div className="middle-section">
                    <h3>Full Stack Engineer open to meaningful collaborations.</h3>
                    <p>From product development to deployment, solutions are built with quality and pace in mind.</p>
                    <p>Feel free to connect on LinkedIn or drop a message through the contact page.</p>
                </div>
                <div className="lower-section">
                    <button type="button" className='modal-btn btn-red' onClick={closeModal}>Close</button>
                    <a href='https://www.linkedin.com/in/pradeep-a-a43187221/' target="_blank" rel='noreferrer' className='modal-btn btn-green'>
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}
 
export default Modal;
