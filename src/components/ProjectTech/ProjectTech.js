import React from 'react';
import styles from './projectTech.module.css';

function ProjectTech({tech}) {
    const { wrapper, icons, liquidIcon, iconWrapper, iconTooltip } = styles;
    const techIcons = tech.map(tech => {
        let elementAttributes = {className: icons};

        //different css class for liquid icon to to increase size
        if(tech.name === 'Liquid'){
            elementAttributes = {className: liquidIcon};
        }
        // return React.createElement('img', {className: elementAttributes.className, src: tech.icon, alt: `${tech.name} icon`});
        return (
            <div className={iconWrapper}>
                <div className={iconTooltip}>{tech.name}</div>
                <img className={elementAttributes.className} src={tech.icon} alt={`${tech.name} icon`}/>
            </div>
        )
    })

    return (
        <div className={wrapper}>
            {techIcons}
        </div>
    )
}

export default ProjectTech
