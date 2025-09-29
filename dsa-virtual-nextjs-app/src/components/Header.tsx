import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <Link href="/">DSA Virtual Lab</Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/experiments">Experiments</Link>
              </li>
              <li>
                <Link href="/feedback">Feedback</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
