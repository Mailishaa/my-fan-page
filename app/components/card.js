import Image from "next/image";
import styles from "./card.module.css";

export default function Card({ name, blurb, speed, model, emoji, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={600} height={700} />
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      <h3>{model}</h3>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(speed)}</p>
    </article>
  );
}
