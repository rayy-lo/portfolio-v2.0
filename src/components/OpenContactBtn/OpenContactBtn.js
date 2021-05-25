import React from 'react';
import styles from './openContactBtn.module.css';

function OpenContactBtn({ openModalBtnStyles, showModal, isFocusable }) {
    return (
        <button
            tabIndex={isFocusable ? 0 : -1}
            className={styles.button}
            onClick={showModal}
            style={openModalBtnStyles}
        >
            Let's Talk!
        </button>
    );
}

export default OpenContactBtn;
