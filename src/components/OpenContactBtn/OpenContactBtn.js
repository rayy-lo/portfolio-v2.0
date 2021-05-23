import React from 'react';
import styles from './openContactBtn.module.css';

function OpenContactBtn({ openModalBtnStyles, toggleModal, isFocusable }) {
    return (
        <button
            tabIndex={isFocusable ? 0 : -1}
            className={styles.button}
            onClick={toggleModal}
            style={openModalBtnStyles}
        >
            Let's Talk!
        </button>
    );
}

export default OpenContactBtn;
