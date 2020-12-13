import React from 'react';
import styles from './OpenContactBtn.module.css';

function OpenContactBtn({openModalBtnStyles, toggleModal}) {

    return (
        <button className={styles.button} onClick={toggleModal} style={openModalBtnStyles}>
            Let's Talk!
        </button>
    )
}

export default OpenContactBtn;
