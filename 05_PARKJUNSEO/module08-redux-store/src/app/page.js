import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>

      <hr />

      <h2>chap01-basic Redux</h2>
      <ul>
        <li>
          <Link href="/chap01">basic Redux</Link>
        </li>
      </ul>

      <hr />

      <h2>chap02-basic Redux</h2>
      <ul>
        <li>
          <Link href="/chap02">combine Reducers</Link>
        </li>
      </ul>

      <hr />

      <h2>chap03-Redux toolkit</h2>
      <ul>
        <li>
          <Link href="/chap03">Redux toolkit</Link>
        </li>
      </ul>
    </div>
  );
}
