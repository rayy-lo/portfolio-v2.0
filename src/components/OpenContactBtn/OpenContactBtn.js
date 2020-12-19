import React from 'react';
import styles from './openContactBtn.module.css';

function OpenContactBtn({openModalBtnStyles, toggleModal}) {

    return (
        <button className={styles.button} onClick={toggleModal} style={openModalBtnStyles}>
            Let's Talk!
        </button>
    )
}

export default OpenContactBtn;
