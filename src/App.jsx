import { ProjectsGrid } from "./Projects/ProjectsGrid";
import { PhotoDiv } from "./Photo/Photo";
import { Desc } from "./Desc/Desc";

import styles from "./App.module.css";

export function App() {
  return (
    <div className="container">
      <div className="foto">
        <PhotoDiv />
      </div>
      <div className="desc">
        <Desc />
      </div>
      <div className="project">
        <h2 className={styles.titulos}>Proyectos</h2>
        <ProjectsGrid />
      </div>
      <div className="skill"><h2 className={styles.titulos}>Skills</h2></div>
      <div className="contact"><h2 className={styles.titulos}>Contacto</h2></div>
    </div>
  );
}
