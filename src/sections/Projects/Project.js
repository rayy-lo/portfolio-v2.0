import React from 'react';
import projectStyles from './project.module.css';
import ProjectComponent from '../../components/ProjectComponent/ProjectComponent';
import data from '../../../static/projectData';

function Project() {
    const {container, headerWrapper, header, description} = projectStyles;
    const projects = data.map(project => {
        let componentProps = {
            key: project.id,
            data: project,
        };

        //alternate image + text of project
        if(project.id % 2 === 0){
            componentProps.order = -1
        }

        return <ProjectComponent key={project.id} {...componentProps} />;
    })

    return (
            <section className={container}>
                <div className={headerWrapper}>
                    <h1 className={header}>Work & Experience</h1>
                </div>
                {projects}            
            </section>
    )
}

export default Project;
