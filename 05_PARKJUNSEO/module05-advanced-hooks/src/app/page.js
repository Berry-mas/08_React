import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Advanced Hooks</h1>

      <h2>chap01</h2>
      <ul>
        <li>
          <Link href="/chap01/section01">
            <p>UseTransition</p>
          </Link>
        </li>
        <li>
          <Link href="/chap01/section02">
            <p>UseDefferedVlaue</p>
          </Link>
        </li>
        <li>
          <Link href="/chap01/section03">
            <p>UseId</p>
          </Link>
        </li>
      </ul>

      <hr></hr>

      <h2>chap02</h2>
      <ul>
        <li>
          <Link href="/chap02/section01">UseFetch</Link>
        </li>
        <li>
          <Link href="/chap02/section02">UseLocalStorage</Link>
        </li>
        <li>
          <Link href="/chap02/section03">UseFormValidation</Link>
        </li>
      </ul>
    </>
  );
}
