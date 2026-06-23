 import styles from "./CardGrid.module.css";
import Card from "./card";

export default function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          model={item.model}
          blurb={item.blurb}
          image={item.image}
          rating={item.rating}
          emoji={item.emoji}
        />
      ))}
    </div>
  );
}