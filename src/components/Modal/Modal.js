import React from 'react';
import styles from './modal.module.css';

function Modal({children}) {
    return (
        //data attribute to store module showModal class name
        //value used in OpenContactBtn component to toggle modal
        <div id="modal" data-showmodalclassname={styles.showModal} className={styles.modalBG}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal
