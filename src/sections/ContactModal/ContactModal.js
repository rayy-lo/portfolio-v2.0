import React, { forwardRef } from 'react';
import styles from './modal.module.css';
import EmailSVG from '../../../static/icons/message.svg';

function ContactModal({ isModalOpen, closeModal }, ref) {
    const {
        form,
        input,
        formHeader,
        emailIcon,
        headerWrapper,
        legend,
        sendEmailBtn,
        contactFieldSet,
        label,
        message,
    } = styles;

    const showHideClassName = isModalOpen
        ? `${styles.modalBG} ${styles.showModal}`
        : `${styles.modalBG}`;

    function handleFocusTrap(e) {
        const modal = e.currentTarget;

        const focusableElements = modal.querySelectorAll(
            'button:not([disabled]), input:not([disabled])'
        );

        const firstTab = focusableElements[0];
        const lastTab = focusableElements[focusableElements.length - 1];

        if (e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === firstTab) {
                    e.preventDefault();
                    lastTab.focus();
                }
            } else {
                if (document.activeElement === lastTab) {
                    e.preventDefault();
                    firstTab.focus();
                }
            }
        }
    }

    return (
        <div
            id="modal"
            onKeyDown={handleFocusTrap}
            className={showHideClassName}
        >
            <div className={styles.modalContent}>
                <button
                    ref={ref}
                    tabIndex="1"
                    id="modalClose-btn"
                    onClick={closeModal}
                    className={styles.closeBtn}
                >
                    &#10006;
                </button>
                <form
                    className={form}
                    action="https://getform.io/f/09976747-1aa0-41dc-9c30-912abb04af26"
                    method="POST"
                >
                    <div className={headerWrapper}>
                        <h2 className={formHeader}>Send A Message</h2>
                        <img
                            alt="email icon"
                            className={emailIcon}
                            src={EmailSVG}
                        />
                    </div>
                    <fieldset className={contactFieldSet}>
                        <legend className={legend}>Your Information</legend>
                        <label className={label}>
                            Name
                            <input
                                className={input}
                                required="required"
                                type="text"
                                name="name"
                            />
                        </label>
                        <label className={label}>
                            Email
                            <input
                                className={input}
                                required
                                type="email"
                                name="email"
                            />
                        </label>
                        <label className={label}>
                            Message
                            <textarea
                                className={message}
                                required
                                type="text"
                                name="message"
                            />
                        </label>
                    </fieldset>
                    <button className={sendEmailBtn} type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default forwardRef(ContactModal);
