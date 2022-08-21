import styles from "./Skills.module.css";

export function SkillsGrid() {
  return (
    <ul className={styles.grid}>
      <li className={styles.li1}>
        <img className={styles.imgHtml} src="./img/html.svg" alt="HTML" />
        <h3 className={styles}>Html 5</h3>
      </li>
      <li className={styles.li1}>
        <img className={styles.imgHtml} src="./img/css.svg" alt="HTML" />
        <h3 className={styles}>CSS 3</h3>
      </li>
      <li className={styles.li1}>
        <img className={styles.imgHtml} src="./img/javascript.svg" alt="HTML" />
        <h3 className={styles}>JavaScript</h3>
      </li>
    </ul>
  );
}