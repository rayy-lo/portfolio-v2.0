import React from 'react';
import landingStyles from './Landing.module.css';
import logo from '../../../static/Logo.svg';
import OpenContactBtn from '../../components/OpenContactBtn/OpenContactBtn';
import SiteIcons from '../../components/SiteIcons/SiteIcons';
import Illustration from '../../../static/Landing-illustration.svg';

function Landing() {
    const { bookmark, illustration, textIllustrationContainer, pseudoHeader, sectionContainer,contentContainer, infoContainer, nameHeader,subHeader, description} = landingStyles;
    // custom styles for open modal button component
    const openModalBtnStyles = {
        color: '#221E41',
        width: '250px',
        padding: '0.75em 0',
        borderRadius: '20px',
        background: '#FFAFAF',
        border: '1px solid #E14B4B',
        fontWeight: 700
    };

    return (
        <section className={sectionContainer}>
            <div className={bookmark}></div>
            <div className={contentContainer}>
                <div className={pseudoHeader}>
                    <object data={logo} type="image/svg+xml">
                    Raymond's Logo
                    </object>
                </div>
                <div className={textIllustrationContainer}>
                    <div className={infoContainer}>
                        <h1 className={nameHeader}>
                            Raymond 
                            <br/> 
                            Lo
                        </h1>
                        <h2 className={subHeader}>Front-End Developer</h2>
                        <p className={description}>Building beautiful web-based user interfaces is my passion. Develop and implement quality code is my mission.</p>
                        <OpenContactBtn openModalBtnStyles={openModalBtnStyles} />
                    </div>
                    <object className={illustration} data={Illustration} type="image/svg+xml">
                        Landing Illustration
                    </object>
                </div>
                <SiteIcons />
            </div>
        </section>
    )
}

export default Landing;
