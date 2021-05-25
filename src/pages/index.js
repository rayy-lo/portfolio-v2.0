import React, { useState, useRef } from 'react';
import 'fontsource-merriweather';
import 'normalize.css';
import Landing from '../sections/Landing/Landing';
import Project from '../sections/Projects/Project';
import Footer from '../sections/Footer/Footer';
import ContactModal from '../sections/ContactModal/ContactModal';
import { Helmet } from 'react-helmet';
import Favicon from '../../static/favicon.ico';

export default function Home() {
    const [isModalOpen, setModal] = useState(false);
    // close btn ref for focus
    const ref = React.useRef(null);

    function showModal() {
        setModal(true);
        setTimeout(() => {
            ref.current.focus();
        }, 1);
    }

    function closeModal() {
        setModal(false);
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
            <ContactModal
                ref={ref}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
            <Landing showModal={showModal} />
            <Project />
            <Footer showModal={showModal} />
        </main>
    );
}
