import React from 'react';
import landingStyles from './Landing.module.css';
import logo from '../../../static/Logo.svg';
import OpenContactBtn from '../../components/OpenContactBtn/OpenContactBtn';

function Landing() {
    const { sectionContainer,contentContainer, infoContainer, nameHeader,subHeader, description} = landingStyles;

    return (
        <section className={sectionContainer}>
            <div className={contentContainer}>
                <div>
                    <object data={logo} type="image/svg+xml">
                    Raymond's Logo
                    </object>
                </div>
                <div className={infoContainer}>
                    <h1 className={nameHeader}>
                        Raymond 
                        <br/> 
                        Lo
                    </h1>
                    <h2 className={subHeader}>Front-End Developer</h2>
                    <p className={description}>Building beautiful web-based user interfaces is my passion. Develop and implement quality code is my mission.</p>
                    <OpenContactBtn />
                </div>
            </div>
        </section>
    )
}

export default Landing;
