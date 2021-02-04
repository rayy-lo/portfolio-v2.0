import React from 'react';
import siteIconStyles from './siteIcons.module.css';
import GitHubIcon from '../../../static/icons/GitHub-icon.svg';
import FileIcon from '../../../static/icons/file-icon.svg';
import LinkedInIcon from '../../../static/icons/LinkedIn-icon.svg';
import Resume from '../../../static/Raymond_Lo_Resume_PDF.pdf';

function SiteIcons({ lineColor, marginTop, iconColor }) {
    const { line, icon, iconsContainer, siteIconsContainer } = siteIconStyles;

    return (
        <div style={{ marginTop: marginTop }} className={siteIconsContainer}>
            <hr style={{ color: lineColor }} className={line}></hr>
            <div className={iconsContainer}>
                <a
                    href="https://github.com/rayy-lo"
                    aria-label="Go to GitHub profile"
                >
                    <img
                        style={{ filter: iconColor }}
                        className={icon}
                        src={GitHubIcon}
                        alt="GitHub icon"
                    />
                </a>
                <a
                    aria-label="Go to LinkedIn profile"
                    href="https://www.linkedin.com/in/raymond-lo-323b1b178/"
                >
                    <img
                        style={{ filter: iconColor }}
                        className={icon}
                        src={LinkedInIcon}
                        alt="LinkedIn icon"
                    />
                </a>
                <a
                    target="_blank"
                    aria-label="Download resume"
                    href={Resume}
                    download
                >
                    <img
                        style={{ filter: iconColor }}
                        className={icon}
                        src={FileIcon}
                        alt="Resume file icon"
                    />
                </a>
            </div>
        </div>
    );
}

export default SiteIcons;
