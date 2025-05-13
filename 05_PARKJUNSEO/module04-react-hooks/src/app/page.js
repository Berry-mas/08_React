import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>react Hooks</h1>
      <h3>chap01</h3>
      <ul>
        <li>
          <Link href="/chap01/section01">UseEffect Basic</Link>
        </li>
        <li>
          <Link href="/chap01/section02">UseEffect Dependency</Link>
        </li>
        <li>
          <Link href="/chap01/section03">UseEffect CleanUp</Link>
        </li>
        <li>
          <Link href="/chap01/section04">UseEffect Problem</Link>
        </li>
      </ul>

      <hr></hr>

      <h3>chap02</h3>
      <ul>
        <li>
          <Link href="/chap02/section01">UseLayout Effect</Link>
        </li>
        <li>
          <Link href="/chap02/section02">Dom Measure</Link>
        </li>
      </ul>

      <hr></hr>

      <h3>chap03</h3>
      <ul>
        <li>
          <Link href="/chap03/section01">UseRef Dom Access</Link>
        </li>
        <li>
          <Link href="/chap03/section02">UseRef Value Keep</Link>
        </li>
        <li>
          <Link href="/chap03/section03">UseRef Timer Focus</Link>
        </li>
      </ul>

      <hr></hr>

      <h3>chap04</h3>
      <ul>
        <li>
          <Link href="/chap04/section01">UseMemo Example</Link>
        </li>
        <li>
          <Link href="/chap04/section02">UseCallback</Link>
        </li>
      </ul>
    </>
  );
}
