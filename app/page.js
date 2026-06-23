/* import { items } from "./data";

export default function Home() {
  return (
    <main>
      <h1>DRAGON MOTOR TESTING</h1>
      <p>AN EXPLORATION OF THE WORLD'S FASTEST CARS</p>

      <div className="grid">
        {items.map((item) => (
          <article className="card" key={item.id}>
            <div className="emoji">{item.emoji}</div>
            <h2>{item.name}</h2>
            <p>{item.blurb}</p>
            <p className="stars">{"⭐".repeat(item.rating)}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
 */
import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title="DRAGON MOTOR TESTING"
        tagline="AN EXPLORATION OF THE WORLD'S FASTEST CARS"
      />
      <CardGrid items={items} />
    </main>
  );
}
