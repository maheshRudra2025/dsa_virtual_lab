import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to the DSA Virtual Lab</h1>
          <p>
            An interactive platform to learn and visualize data structures and
            algorithms.
          </p>
          <Link href="/experiments" className="btn">
            Get Started
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-container">
            <div className="feature">
              <h2>Interactive Visualizations</h2>
              <p>
                Visualize complex algorithms step-by-step to understand their
                inner workings.
              </p>
            </div>
            <div className="feature">
              <h2>Hands-on Practice</h2>
              <p>
                Implement data structures and algorithms in our integrated
                coding environment.
              </p>
            </div>
            <div className="feature">
              <h2>Self-Paced Learning</h2>
              <p>
                Learn at your own pace with our comprehensive tutorials and
                examples.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
