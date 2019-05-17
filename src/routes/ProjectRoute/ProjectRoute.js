import React from "react";
import {ProjectProvider} from '../../context/ProjectContext';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import './styles/project.css';

export default function ProjectRoute() {
  return (
    <div className="ani-container">
      <ProjectProvider>
        <ProjectItem />
      </ProjectProvider>
    </div>
  )
}
