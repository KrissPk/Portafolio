// Aqui van mis proyectos :) __________________________________________________________________________

import styles from "./ProjectGrid.module.css";

export function ProjectsGrid() {
  return (
    <ul className={styles.grid}>
      <li className={styles.li1}>
        <a className={styles.aweb1} href="https://webpelis.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img className={styles.imgweb1} src="./img/captura_webpelis.png" alt="webpelis" />
        <h3 className={styles.h3web1}>WebPelis</h3>
        </a>
      </li>
    </ul>
  );
}
