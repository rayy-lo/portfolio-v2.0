import React, { useEffect } from 'react';
import 'fontsource-merriweather';
import 'normalize.css';
import Landing from '../sections/Landing/Landing';
import Project from '../sections/Projects/Project';
import Footer from '../sections/Footer/Footer';
import Modal from '../components/Modal/Modal';
import styles from './index.module.css';
import EmailSVG from '../../static/icons/message.svg';
import { Helmet } from 'react-helmet';
import Favicon from '../../static/favicon.ico';

export default function Home() {
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

    //attach closeModalOnWindow to window component on mount
    useEffect(() => {
        window.addEventListener('click', closeModalOnWindow);
    }, []);

    function toggleModal(e) {
        const modal = document.querySelector('#modal');
        const showModalClassName = modal.getAttribute(
            'data-showmodalclassname'
        );
        modal.classList.toggle(showModalClassName);
    }

    function closeModalOnWindow(e) {
        if (e.target.id === 'modal') {
            toggleModal();
        }
    }

    return (
        <main>
            <Helmet>
                <title>Raymond's Portfolio</title>
                <meta
                    name="description"
                    content="Raymond Lo's awesome portfolio to illustrate his skills and experience as a web developer."
                />
                <link rel="shortcut icon" href={Favicon} />
            </Helmet>
            <Modal>
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
            </Modal>
            <Landing toggleModal={toggleModal} />
            <Project />
            <Footer toggleModal={toggleModal} />
        </main>
    );
}
