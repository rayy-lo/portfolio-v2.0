import React from 'react'
import styles from './footer.module.css';
import SiteIcons from '../../components/SiteIcons/SiteIcons';
import OpenContactBtn from '../../components/OpenContactBtn/OpenContactBtn';
import SquaresSVG from '../../../static/icons/pinkSquares.svg';

function Footer({toggleModal}) {
    const {footer, squareIcon, textWrapper, header, copyright, subheader} = styles;
    const date = new Date();
    const year = date.getFullYear();

    //filter css color of svg icon
    const cssFilterValueForWhite = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(267deg) brightness(103%) contrast(104%)';

    const openModalBtnStyles = {
        height: '50px',
        width: '250px',
        color: 'white',
        background: '#D93B3B',
        border: '1px solid #E14B4B',
        borderRadius: '10px'
    }

    return (
        <footer className={footer}>
            <div className={textWrapper}>
                <div>
                    <h1 className={header}>Interested in <br />working together?</h1>
                    <span className={subheader}>Send me an email and let's get started!</span>
                </div>
                <OpenContactBtn toggleModal={toggleModal} openModalBtnStyles={openModalBtnStyles} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(-700px, 0) rotate(90deg)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(-800px, -100px) rotate(180deg)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(0px, 0) rotate(45deg)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(-60px, -150px)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(200px, -100px)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(450px, -160px) rotate(300deg)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(650px, -100px)'}} className={squareIcon} />
                <img src={SquaresSVG} alt="" style={{transform: 'translate(800px, -150px) rotate(180deg)'}} className={squareIcon} />
            </div>
            <SiteIcons lineColor='white' marginTop='1em' iconColor={cssFilterValueForWhite} />
            <span className={copyright}> &#169; {year} Raymond Lo </span>
        </footer>
    )
}

export default Footer
