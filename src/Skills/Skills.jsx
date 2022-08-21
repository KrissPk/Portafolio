import styles from "./Skills.module.css";

export function SkillsGrid() {
  return (
    <ul className={styles.grid}>
      <li className={styles.li1}>
        <img className={styles.imgHtml} src="./img/html.svg" alt="HTML" />
        <h3 className={styles}>Html 5</h3>
      </li>
    </ul>
  );
}