import styles from "./Card.module.css";

export function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image}></img>
      <span className={styles.name}>{props.name}</span>
      <section className={styles.bottom}>
        <div className={styles.row}>
          Fecha:&nbsp;
          <span className={styles.span}>{props.date}</span>
        </div>

        <div className={styles.row}>
          Creador:&nbsp;
          <span className={styles.span}>{props.who}</span>
        </div>

        <div className={styles.description}>{props.description}</div>
      </section>
    </div>
  );
}
