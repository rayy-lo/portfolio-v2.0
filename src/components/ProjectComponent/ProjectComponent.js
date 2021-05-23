import React from 'react';
import componentStyles from './projectComponent.module.css';
import GitHubIcon from '../../../static/icons/GitHub-icon.svg';
import ProjectTech from '../ProjectTech/ProjectTech';

function ProjectComponent({data, order}) {
    const {projectImage, imageWrapper, GitHubRepoLink, projectContainer, projectDescription, projectText, projectName, projectType, GitHubRepo} = componentStyles;
    //create GitHub element for project if available
    const checkRepo = data.repo.length > 0 ? <a class={GitHubRepoLink} href={data.repo}><img className={GitHubRepo} alt={data.info.name + ' GitHub repo'} src={GitHubIcon} /></a> : null; 

    return (
        <div className={projectContainer}>
            <div className={projectText}>
                <span className={projectType}>{data.info.type}</span>
                <h1 className={projectName}>{data.info.name}</h1>
                <p className={projectDescription}>{data.info.description}</p>
                {checkRepo}
                <ProjectTech tech={data.tech} />
            </div>
            <div className={imageWrapper} style={{order}}>
                <img style={data.info.name === "P3 Media" ? {background: '#F0FBEE'} : {}} alt={data.info.name + ' project image'} src={data.image} className={projectImage} />
            </div>
        </div>
    )
}

export default ProjectComponent
