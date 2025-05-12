import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>react Hooks</h1>
      <h3>chap01</h3>
      <ul>
        <li>
          <Link href="/chap01/section01">Use Effect Basic</Link>
        </li>
        <li>
          <Link href="/chap01/section02">Use Effect Dependency</Link>
        </li>
        <li>
          <Link href="/chap01/section03">Use Effect CleanUp</Link>
        </li>
        <li>
          <Link href="/chap01/section04">Use Effect Problem</Link>
        </li>
      </ul>

      <hr></hr>

      <h3>chap02</h3>
      <ul>
        <li>
          <Link href="/chap02/section01">Use Layout Effect</Link>
        </li>
        <li>
          <Link href="/chap02/section02">Dom Measure</Link>
        </li>
      </ul>

      <hr></hr>

      <h3>chap03</h3>
      <ul>
        <li>
          <Link href="/chap03/section01">Use Ref Dom Access</Link>
        </li>
      </ul>
    </>
  );
}
