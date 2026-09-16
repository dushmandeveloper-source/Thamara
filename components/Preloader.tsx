"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const MIN_TIME = 1300; // keep it on screen at least this long (no flash)
    const MAX_TIME = 4500; // hard fallback so it never traps the page
    const start = performance.now();
    let done = false;

    document.body.classList.add("preloader-lock");

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN_TIME - (performance.now() - start));
      window.setTimeout(() => {
        setHidden(true);
        document.body.classList.remove("preloader-lock");
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish);
    const fallback = window.setTimeout(finish, MAX_TIME);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
      document.body.classList.remove("preloader-lock");
    };
  }, []);

  return (
    <div
      className={`preloader${hidden ? " preloader--done" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={hidden}
    >
      {/* Plain <img> (not next/image) so the logo paints instantly, before hydration */}
      <div className="preloader__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.jpg" alt="" aria-hidden className="preloader__logo-base" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.jpg"
          alt="Thamara Foreign Employment Agency"
          className="preloader__logo-fill"
        />
      </div>
      <div className="preloader__bar" aria-hidden>
        <span />
      </div>
    </div>
  );
}
