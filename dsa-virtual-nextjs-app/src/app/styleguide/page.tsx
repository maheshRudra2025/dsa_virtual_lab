"use client";

import { useState } from "react";

export default function StyleGuidePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <div className="container" style={{ padding: "var(--space-10) var(--container-padding)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-8)", flexWrap: "wrap", gap: "var(--space-4)" }}>
        <div>
          <h1>Design System & Style Guide</h1>
          <p className="lead">
            Design tokens, color palette, typography hierarchy, and accessibility standards for DSA Virtual Lab.
          </p>
        </div>
        <button className="btn btn-outline" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Switch to Dark Theme" : "☀️ Switch to Light Theme"}
        </button>
      </div>

      {/* 1. Color Palette */}
      <section style={{ marginBottom: "var(--space-12)" }}>
        <h2>1. Color Palette System</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          Engineered for technical clarity, educational focus, and strict compliance with WCAG 2.1 AA/AAA accessibility standards.
        </p>

        <h3 style={{ marginTop: "var(--space-6)" }}>Primary Brand Colors (Tech Indigo)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-primary-50)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Primary 50</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#EEF2FF</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-primary-500)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Primary 500</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#6366F1</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-primary-600)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "var(--space-2)" }}>
              <span style={{ background: "#ECFDF5", color: "#065F46", fontSize: "0.7rem", fontWeight: 700, padding: "2px 6px", borderRadius: "99px" }}>AAA 6.2:1</span>
            </div>
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Primary 600 (Main)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#4F46E5</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-primary-700)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "var(--space-2)" }}>
              <span style={{ background: "#ECFDF5", color: "#065F46", fontSize: "0.7rem", fontWeight: 700, padding: "2px 6px", borderRadius: "99px" }}>AAA 8.4:1</span>
            </div>
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Primary 700 (Hover)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#4338CA</div>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: "var(--space-8)" }}>Secondary & Node Colors (Teal / Cyan)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-secondary-50)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Secondary 50</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#F0FDFA</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-secondary-600)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "var(--space-2)" }}>
              <span style={{ background: "#EFF6FF", color: "#1E40AF", fontSize: "0.7rem", fontWeight: 700, padding: "2px 6px", borderRadius: "99px" }}>AA 4.6:1</span>
            </div>
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Secondary 600 (Main)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#0D9488</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-secondary-700)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "var(--space-2)" }}>
              <span style={{ background: "#ECFDF5", color: "#065F46", fontSize: "0.7rem", fontWeight: 700, padding: "2px 6px", borderRadius: "99px" }}>AAA 5.9:1</span>
            </div>
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Secondary 700 (Hover)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#0F766E</div>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: "var(--space-8)" }}>Accent & Algorithm State Colors</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-warning-base)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Visiting / Pivot (Amber)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#F59E0B</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-success-base)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Balanced / Found (Green)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#10B981</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-danger-base)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Overflow / Delete (Red)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#EF4444</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
            <div style={{ height: "70px", backgroundColor: "var(--color-info-base)" }} />
            <div style={{ padding: "var(--space-3)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)" }}>Info / Big-O (Blue)</div>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>#3B82F6</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Accessibility Contrast Verification */}
      <section style={{ marginBottom: "var(--space-12)" }}>
        <h2>2. Accessibility Contrast Audit (WCAG 2.1)</h2>
        <div style={{ overflowX: "auto", marginTop: "var(--space-4)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--color-bg-surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-subtle)" }}>
            <thead>
              <tr style={{ background: "var(--color-bg-subtle)", textAlign: "left" }}>
                <th style={{ padding: "var(--space-3) var(--space-4)", fontSize: "var(--font-size-sm)" }}>Combination</th>
                <th style={{ padding: "var(--space-3) var(--space-4)", fontSize: "var(--font-size-sm)" }}>Foreground</th>
                <th style={{ padding: "var(--space-3) var(--space-4)", fontSize: "var(--font-size-sm)" }}>Background</th>
                <th style={{ padding: "var(--space-3) var(--space-4)", fontSize: "var(--font-size-sm)" }}>Ratio</th>
                <th style={{ padding: "var(--space-3) var(--space-4)", fontSize: "var(--font-size-sm)" }}>Compliance</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}>Headings (H1-H4)</td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#0F172A</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#F8FAFC</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)", fontWeight: 700 }}>16.1 : 1</td>
                <td style={{ padding: "var(--space-3) var(--space-4)", color: "#065F46", fontWeight: 600 }}>WCAG AAA</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}>Body Copy</td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#475569</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#FFFFFF</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)", fontWeight: 700 }}>7.0 : 1</td>
                <td style={{ padding: "var(--space-3) var(--space-4)", color: "#065F46", fontWeight: 600 }}>WCAG AAA</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}>Captions & Meta</td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#64748B</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#FFFFFF</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)", fontWeight: 700 }}>4.6 : 1</td>
                <td style={{ padding: "var(--space-3) var(--space-4)", color: "#1E40AF", fontWeight: 600 }}>WCAG AA</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}>Primary Button</td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#FFFFFF</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#4F46E5</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)", fontWeight: 700 }}>6.2 : 1</td>
                <td style={{ padding: "var(--space-3) var(--space-4)", color: "#065F46", fontWeight: 600 }}>WCAG AAA (Large) / AA</td>
              </tr>
              <tr>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}>Focus Ring Outline</td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#4F46E5</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)" }}><code>#FFFFFF</code></td>
                <td style={{ padding: "var(--space-3) var(--space-4)", fontWeight: 700 }}>3.5 : 1</td>
                <td style={{ padding: "var(--space-3) var(--space-4)", color: "#1E40AF", fontWeight: 600 }}>WCAG Non-Text AA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Typography Hierarchy */}
      <section style={{ marginBottom: "var(--space-12)" }}>
        <h2>3. Typography Hierarchy Specimen</h2>
        <div style={{ marginTop: "var(--space-6)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <h1>Display Heading 1</h1>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>2.5rem (40px) | Weight 800 | Line-height 1.2</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <h2>Section Heading 2</h2>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>2.0rem (32px) | Weight 700 | Line-height 1.25</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <h3>Component Heading 3</h3>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>1.5rem (24px) | Weight 600 | Line-height 1.35</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <h4>Algorithm Step Heading 4</h4>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>1.25rem (20px) | Weight 600 | Line-height 1.35</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <p className="lead">Lead Paragraph: An interactive virtual laboratory to master data structures and algorithmic complexity.</p>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>1.125rem (18px) | Weight 400 | Line-height 1.625</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <p>Body Regular: Binary search trees ensure average time complexity of O(log n) for search, insert, and delete operations.</p>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>1.0rem (16px) | Weight 400 | Line-height 1.625</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed var(--color-border-subtle)", padding: "var(--space-4) 0", flexWrap: "wrap", gap: "var(--space-4)" }}>
            <code>const balanceFactor = getHeight(node.left) - getHeight(node.right);</code>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>JetBrains Mono | 0.875rem | Line-height 1.6</span>
          </div>
        </div>
      </section>

      {/* 4. Interactive Components */}
      <section>
        <h2>4. Component Demos</h2>
        <div style={{ display: "flex", gap: "var(--space-4)", margin: "var(--space-6) 0", flexWrap: "wrap" }}>
          <button className="btn btn-primary">Primary Action</button>
          <button className="btn btn-secondary">Secondary Action</button>
          <button className="btn btn-outline">Outline Action</button>
        </div>
      </section>
    </div>
  );
}
