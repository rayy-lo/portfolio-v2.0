import React from 'react';
import landingStyles from './Landing.module.css';
import logo from '../../../static/Logo.svg';
import OpenContactBtn from '../../components/OpenContactBtn/OpenContactBtn';
import SiteIcons from '../../components/SiteIcons/SiteIcons';
import Illustration from '../../../static/Landing-illustration.svg';

function Landing({toggleModal}) {
    const { bookmark, illustration, textIllustrationContainer, pseudoHeader, sectionContainer,contentContainer, infoContainer, nameHeader,subHeader, description} = landingStyles;
    // custom styles for open modal button component
    const openModalBtnStyles = {
        color: 'rgb(217, 59, 59)',
        width: '250px',
        padding: '0.75em 0',
        borderRadius: '10px',
        background: '#FFF3F3',
        border: '1px solid #E14B4B',
        fontWeight: 700
    };
    
    return (
        <section className={sectionContainer}>
            <div className={bookmark}></div>
            <div className={contentContainer}>
                <div className={pseudoHeader}>
                    <img src={logo} alt="Raymond's Logo" />
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
                        <OpenContactBtn isFocusable={true} toggleModal={toggleModal} openModalBtnStyles={openModalBtnStyles} />
                    </div>
                    <img className={illustration} src={Illustration} alt=""/>
                </div>
                <SiteIcons isFocusable={true} lineColor='#221E41' />
            </div>
        </section>
    )
}

export default Landing;
