import styles from "./Photo.module.css";

export function PhotoDiv() {
  return (
    <div className={styles.div1}>
    <img className={styles.img1}src="./img/photo.PNG" alt = "Yo :)"/>
    </div>
  );
}