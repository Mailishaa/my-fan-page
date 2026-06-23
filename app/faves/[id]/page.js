import { items } from "../../data";

export default async function FaveDetail({ params }) {
  const { id } = await params;
  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <main>
        <p>Sorry, that one doesn't exist.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{item.emoji} {item.name}</h1>
      <p>{item.blurb}</p>
      <p>{"⭐".repeat(item.speed)}</p>
    </main>
  );
}

// In CardGrid.js, link each card to its detail page:
import Link from "next/link";
// ...inside the map:
<Link href={"/faves/" + item.id} key={item.id}>
  <Card name={item.name} blurb={item.blurb} rating={item.rating} emoji={item.emoji} />
</Link>