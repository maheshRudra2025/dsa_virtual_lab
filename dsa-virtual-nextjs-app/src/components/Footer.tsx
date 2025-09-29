"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} DSA Virtual Lab. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
